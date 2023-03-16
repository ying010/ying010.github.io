# 内存溢出(OOM)

在测试环境有个项目占用内存过大，大佬让我处理一下，我在本地启动项目复现问题时发现本地内存不会过高，分析遇到瓶颈。一次偶然机会发现测试环境内存过高但又没超限导致崩溃，就及时在测试环境生成了一个内存快照，并导到本地进行了分析。在生成快照、分析内存快照、分析本地内存不会过高过程中几经坎坷，记录一下。

## 一、生成快照

要分析内存占用过高有很多方式，如果是本地启动的项目JDK自带的可视化软件jvisualvm是个不错的选择，但是在测试环境甚至生产环境就不能使用了。在测试/生产环境分析内存最常用的手段是生成内存快照并导到本地，利用eclipse的[MAT](https://www.eclipse.org/mat/downloads.php)(Memory Analyzer)插件分析内存快照。

插件独立下载地址[MAT](https://www.eclipse.org/mat/downloads.php)

在生成内存快照时，首先需要分析进程内存占用、GC等是否异常，然后生成快照

### 1.1. 分析内存

众所周知JVM内存可分为堆、栈、方法区等(具体的分区就不写了，分析内存溢出一般只会分析堆)，堆又可以分为新生代：Eden，Survivor0、1(S0、S1)和老年代：Old；

几乎所有新建的对象都会先入Eden区，如果入Eden区时发现已满会执行一次YGC（Minor GC），把可回收内存回收掉，把仍活跃对象存入S0；第二次满时会回收Eden、S0把两者中活跃的放入S1；第三次回收Eden、S1，活跃的放入的S0…依次往复，一个对象如果回收超过15次或回收后空间依旧不够会转存到Old区。

当Old区满之后会触发Full GC，如果Full GC之后内存仍不够就会抛出OutOfMemoryError错误。

判断一个程序是否出现内存异常，首先需要查看内存占用情况、GC频率等，常用命令又jps、jstat、jmap等。但是如果项目是部署在docker上而不是直接部署，此时需要进入docker容器中查看。

#### 1.1.1 docker

- `docker stats`可以查看进程资源占用：

  ![image-20210224170454598](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220407194133.png)

- `docker ps`显示docker正在运行中的image

- `docker exec -it <name> /bin/sh`进入容器

#### 1.1.2 查看内存

- `jps`查询容器中运行中的进程

- `jstat`用来查看进程状态，语法如下[官方文档](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html):

`jstat [ generalOption | outputOptions vmid [interval[s|ms] [count]] ]`

一般用来查询内存占用时可用如下代码:

`jstat -gcold <pid>`

![image-20210225160409703](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220407194008.png)

#### 1.1.3 生成内存快照

- jmap生成内存快照，语法如下[官方文档](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jmap.html):
  
  jmap -dump:format=b,file=文件名 [pid]

生成快照之后需要将快照文件导入到本地分析,建议让运维帮助导出,文件过大自己导会非常慢。

## 二、分析内存快照

### 2.1 分析快照文件

首先使用MAT打开本地的内存快照，选择 leak suspects可以查看系统给出的内存泄露分析，分析中会显示占据内存过多的疑似问题对象;如本次的分析,图中显示`IMAPFolder`有5510个实例,占用了63.52%的内存:

![image-20210310171657270](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220407194158.png)

进入这个异常对象分析一下,发现`FatchImapMailThread`中持有的`IMAPStore`对象中有一个数组,里面有3064个`IMAPFolder`对象;

![image-20210310172239589](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220407194207.png)

进入代码中查看:

在`FatchImapMailThread`中维持一个永久的循环,每次循环都会重新打开一次文件夹,进入`IMAPFolder`的open()方法可以查看到会先获取一个协议,在获取协议的时候会把当前的`IMAPFolder`对象存入一个数组中。因为是在循环中创建的`IMAPFolder`，每循环一次都会创建一个新的，但是没有进行释放，导致了持有对象过多。

```java
private void loopLineOn(IMAPStore store) {
        boolean loopLineOnFlag = true;
        IMAPFolder folder = null;
        while (loopLineOnFlag) {
            try {
                // 重新连接
                if (!store.isConnected()) {
                    store.connect();
                }
                // 每次获取最新的 folder
                folder = refreshFolder(store);

                // 睡眠一段时间再获取
                Thread.sleep(DELAY);
                // 获取当前邮箱邮件数量
                if (!folder.isOpen()) {
                    // 每次获取最新的 folder
                    folder = refreshFolder(store);
                }

                // 处理新邮件
                // todo
                // 异步发送日志
                // todo
            } catch (Exception e) {
                // 一些异常处理
                // 出现无法处理异常时loopLineOnFlag = false;
            }
        }
    }
```

```java
    private IMAPFolder refreshFolder(IMAPStore store) throws MessagingException {
        IMAPFolder folder = null;

        // 每次重新获取收件箱,避免本地缓存导致获取不到最新邮件
        folder = (IMAPFolder) store.getFolder(MailTypeEnum.MAIL_TYPE_INBOX.getMsg());
        // 打开文件夹
        folder.open(Folder.READ_WRITE);

        return folder;
    }
```

```java
 public synchronized List<MailEvent> open(int mode, ResyncData rd)
                throws MessagingException {
    checkClosed(); // insure that we are not already open

    MailboxInfo mi = null;
    // Request store for our own protocol connection.
    protocol = ((IMAPStore)store).getProtocol(this);

    List<MailEvent> openEvents = null;
    synchronized(messageCacheLock) { // Acquire messageCacheLock
//省略其他代码
    }
  }
```

```java
    IMAPProtocol getProtocol(IMAPFolder folder) 
        throws MessagingException {
        // 省略无关代码
        if (folder != null) {
          if (pool.folders == null)
            pool.folders = new Vector<>();
          pool.folders.addElement(folder);
        }
    }
```

在修复过程中，对`IMAPFolder`对象使用完成进行了释放：

```java
private void loopLineOn(IMAPStore store) {
        boolean loopLineOnFlag = true;
        IMAPFolder folder = null;
        while (loopLineOnFlag) {
            try {
                // 重新连接
                if (!store.isConnected()) {
                    store.connect();
                }
                // 每次获取最新的 folder
                folder = refreshFolder(store);

                // 睡眠一段时间再获取
                Thread.sleep(DELAY);
                // 获取当前邮箱邮件数量
                if (!folder.isOpen()) {
                    // 每次获取最新的 folder
                    folder = refreshFolder(store);
                }

                // 处理新邮件
                // todo
                // 异步发送日志
                // todo
            } catch (Exception e) {
                // 一些异常处理
                // 出现无法处理异常时loopLineOnFlag = false;
            } finally {
                if (folder != null) {
                    try {
                        folder.close();
                    } catch (MessagingException e) {
                        loopLineOnFlag = false;
                    }
                }
            }
        }
    }
```
