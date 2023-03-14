# 内存模型

## 模型图

![JVM内存模型](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220408105205.png)

## 1.1 程序计数器

Java 源代码 --》（编译）二进制字节码 JVM指令 --》（解释器）解释为机器码

```java
       0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
       3: astore_1
       4: aload_1
       5: iconst_1
       6: invokevirtual #3                  // Method java/io/PrintStream.println:(I)V
       9: aload_1
      10: iconst_2
      11: invokevirtual #3                  // Method java/io/PrintStream.println:(I)V
      14: aload_1
      15: iconst_3
      16: invokevirtual #3                  // Method java/io/PrintStream.println:(I)V
      19: return
```

- 程序计数器作用：记住下一条JVM指令的执行地址

物理上通过寄存器实现

- 特点：
  - 程序计数器是线程私有的
  - 程序计数器不会出现内存溢出

## 1.2 栈

- **定义 **：线程运行需要的内存空间，由栈帧组成
  
  - 栈帧：每个方法运行时需要的内存
  - 每个线程只能由一个活动栈帧，对应当前正在执行的方法

- 垃圾回收只回收堆内存，不涉及栈内存

### 1.2.1栈内存溢出

异常：`` java.lang.StackOverflowError``

- 栈帧过多导致
  - 循环调用
    - 没有正确关闭的递归
    - 三方库导致
- 栈帧过大
