# Linux命令

- ` stat ${fileName}` 查看文件新建信息
- `-daemon`启动守护进程

**文件上传**

`rz -E`,如果rz命令未安装可以使用`yum -y install lrzsz`安装

**安装Java:**

解压后配置环境变量:`vim /etc/profile`

```bash
export JAVA_HOME=/usr/local/java/jdk1.8.0_181
export PATH=$JAVA_HOME/bin:$PATH
```

查看jdk版本 `java -version`

**VIM安装**

`yum -y install vim*`

**防火墙**

```bash
//检查防火墙状态
firewall-cmd --state
//关闭防火墙
systemctl stop firewalld
//开启防火墙
systemctl start firewalld
```

