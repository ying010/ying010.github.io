# redis基本配置



* * *

## 一、redis远程访问

redis远程访问需要修改`${redis}/redis.conf`配置文件
配置文件的`NETWORK`部分规定了网络连接，

* 其中`bind`设置了白名单列表，默认只有本地可以访问redis，如果需要全部外网可以访问可以把`bind 127.0.0.1`注释掉；如果需要有限的一些IP可以访问redis，可以设置bind列表，如：`bind 192.168.1.100 10.0.0.1`
* `protected-mode`设置了保护模式，默认开启保护模式不允许白名单之外的IP访问，可以关掉保护模式把`protected-mode`设为`no`
* `port`设置了端口号

下边给出了配置文件的部分内容：

```bash
################################## NETWORK #####################################

# By default, if no "bind" configuration directive is specified, Redis listens
# for connections from all the network interfaces available on the server.
# It is possible to listen to just one or multiple selected interfaces using
# the "bind" configuration directive, followed by one or more IP addresses.
#
# Examples:
#
# bind 192.168.1.100 10.0.0.1
# bind 127.0.0.1 ::1
#
# ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the
# internet, binding to all the interfaces is dangerous and will expose the
# instance to everybody on the internet. So by default we uncomment the
# following bind directive, that will force Redis to listen only into
# the IPv4 loopback interface address (this means Redis will be able to
# accept connections only from clients running into the same computer it
# is running).
#
# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES
# JUST COMMENT THE FOLLOWING LINE.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#bind 127.0.0.1

# Protected mode is a layer of security protection, in order to avoid that
# Redis instances left open on the internet are accessed and exploited.
#
# When protected mode is on and if:
#
# 1) The server is not binding explicitly to a set of addresses using the
#    "bind" directive.
# 2) No password is configured.
#
# The server only accepts connections from clients connecting from the
# IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain
# sockets.
#
# By default protected mode is enabled. You should disable it only if
# you are sure you want clients from other hosts to connect to Redis
# even if no authentication is configured, nor a specific set of interfaces
# are explicitly listed using the "bind" directive.
protected-mode no

# Accept connections on the specified port, default is 6379 (IANA #815344).
# If port 0 is specified Redis will not listen on a TCP socket.
port 6379
```

## 二、开机自启动

### 1. 开启守护线程

允许redis后台运行，可以修改`redis.conf`配置文件，将`daemonize`设置为`yes`

```bash
################################# GENERAL #####################################

# By default Redis does not run as a daemon. Use 'yes' if you need it.
# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.
daemonize yes
```

### 2. 编辑自启动脚本

* 将`${redis}/utils/redis_init_script`文件复制到`/etc/init.d/redis`
  
  ```bash
  cp /root/redis-5.0.4/utils/redis_init_script /etc/init.d/redis
  ```

* 编辑配置文件,设置端口号与安装路径
  
  ```bash
  REDISPORT=6379
  EXEC=/root/redis-5.0.4/src/redis-server
  CLIEXEC=/root/redis-5.0.4/src/redis-cli
  
  PIDFILE=/var/run/redis_${REDISPORT}.pid
  CONF="/etc/redis.conf"
  ```

* 添加redis启动脚本权限为可执行
  
  ```bash
  chmod +x /etc/init.d/redis      
  ```

* 设置开机自启动
  
  ```
  chkconfig --add redis
  chkconfig redis on
  ```
  
  ### 3.验证配置
  
  重启系统，如果redis已经启动说明设置成功
