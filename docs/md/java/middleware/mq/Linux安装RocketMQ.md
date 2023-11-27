# Linux安装RocketMQ实战

## 一、 docker简介

在Linux上使用Docker获取安装源、安装启动软件会更加简单，所以本次安装将以Docker安装RocketMQ为例。下面简单介绍下本次使用到的一些Docker命令，以便不熟悉Docker的小伙伴也可以快速上手。

::: details Docker命令

- docker search <Image名称> 查询docker中可用镜像
- docker pull <Image名称>[:版本] 拉取docker中的镜像，如果不设置版本就是拉取最新版本lastest
- docker run [配置信息] <Image名称>[:版本] 启动镜像

:::

Docker详细教程如：Docker本身的安装和各命令的详细介绍可自行搜索Docker使用教程。

## 二、安装RocketMQ

### 1. 安装RocketMQ

#### 查找镜像

```sh
docker search rocketmq
```

![image-20230417180216975](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180217.png)

#### 拉取镜像

从上面查询到的镜像中选一个拉取，在这选择STARS比较高的`apache/rocketmq `。

```sh
docker pull apache/rocketmq
```

![image-20230417180453936](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180454.png)

![image-20230417180534685](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180535.png)

上面两个分别是拉取中和拉取结束时的截图。拉取结束后可以查看docker的image发现已经有rocketmq了，使用的版本是最新版latest。由于最新版不是固定版本，可能会有不确定问题，不建议生成环境选择这个选项。

```sh
docker images
```

![image-20230417180716825](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180717.png)

### 2、启动RocketMQ

#### 启动namesrv服务

```sh
docker run -d -p 9876:9876 -v /tmp/data/rocketmq/namesrv/logs:/root/logs -v /tmp/data/rocketmq/namesrv/store:/root/store --name rmqnamesrv -e "MAX_POSSIBLE_HEAP=134217728" apache/rocketmq sh mqnamesrv
```

![image-20230417193901663](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417193902.png)

启动成功后会返回id，后面也可以使用`docker ps`查看

![image-20230417193958367](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417193959.png)

::: details docker run命令解析

docker run用来启动docker中的镜像。

- 语法

  ```sh
  docker run [OPTIONS] <IMAGE> [COMMAND] [ARG...]
  ```
  对比上面的启动namesrv命令，其中
  - `[OPTIONS]`是容器启动的参数设置，本示例用到的设置如下：`-d -p 9876:9876 -v /tmp/data/rocketmq/namesrv/logs:/root/logs -v /tmp/data/rocketmq/namesrv/store:/root/store --name rmqnamesrv -e "MAX_POSSIBLE_HEAP=134217728"`
  - `<IMAGE>` 是启动容器所使用的镜像，本次示例使用`apache/rocketmq`镜像
  - `[COMMAND]` 是容器启动后执行的命令，`sh mqnamesrv`命令是启动namesrv服务
  - `[ARG...]`是`[COMMAND]`的参数，`sh mqnamesrv`命令没用使用参数

  那么这条命令的含义就是使`[OPTIONS]`的配置来启动`apache/rocketmq`镜像，并运行镜像的`sh mqnamesrv`命令以启动namesrv。

- [OPTIONS]部分参数的说明

  - **-d:** 后台运行容器，不打印启动日志，终端不阻塞等待启动，启动完成后返回容器ID；
  - **-p:** 指定端口映射，格式为：**主机(宿主)端口:容器端口**；如果需要访问容器中的端口必须设置此参数，通过`主机IP:主机端口`的方式访问容器映射端口。在本机端口冲突或暴露外部不想用默认端口的情况下可设置主机端口与容器端口不同，例如：启动mqnamesrv时设置`-p 9886:9876`,那么就是通过`主机IP:9886`访问mqnamesrv而不是默认的`主机IP:9876`。
  - **--name="nginx-lb":** 为容器指定一个名称；
  - **-e username="ritchie":** 设置环境变量；`"MAX_POSSIBLE_HEAP=134217728"`设置了最大堆内存为128M。
  - **-m :**设置容器使用内存最大值；
  - **--link=[]:** 添加链接到另一个容器；
  - **--volume , -v:** 绑定一个卷，将本地文件映射到docker中

  对上面的启动命令简单解释下就是：启动`apache/rocketmq`容器并执行`sh mqnamesrv`命令以启动mqnamesrv，mqnamesrv设置了最大堆内存128M,启动后命名为rmqnamesrv，后面的容器想要使用此容器时可以通过这个名字调用。启动后容器的`/root/logs`文件和`/root/store`文件分别对应本机的`/tmp/data/rocketmq/namesrv/logs`和`/tmp/data/rocketmq/namesrv/store`。使用`主机IP:9876`方式访问mqnamesrv服务

:::

#### 启动Broker服务

```sh
docker run -d -p 10911:10911 -p 10909:10909 -v  /tmp/data/rocketmq/broker/logs:/root/logs -v  /tmp/data/rocketmq/broker/store:/root/store -v  /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf --name rmqbroker --link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" -e "MAX_POSSIBLE_HEAP=134217728" apache/rocketmq sh mqbroker -c /opt/rocketmq/conf/broker.conf
```

![image-20230418113545671](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418113546.png)

如果`docker ps`查看到docker中已经启动了namesrv服务和broker服务，那么就可以发送、接收消息了。需要注意的是broker的启动会有一些配置需要更改，为了每次启动都使用相同的配置而不是每次都敲入配置，我们选择使用配置文件的方式，即上面`-c /opt/rocketmq/conf/broker.conf`指定的文件，由于此参数是容器执行的命令所以文件也是容器中的文件，我们是不方便修改的，需要找到它的本地映射文件也就是`-v  /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf`设置的本地映射，所以我们在本机`/tmp/etc/rocketmq/broker`目录下建一个`broker.conf`配置文件并键入如下配置：

```properties
brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH
# 设置是否允许自动创建Topic，如果设置为false在使用前需要先手动增加对应的Topic
autoCreateTopicEnable=true
# 如果是本地程序调用云主机 mq，这个需要设置成 云主机 IP
# 如果Docker环境需要设置成宿主机IP
brokerIP1 = [docker宿主机IP]
```

::: warning

根据docker run语法可知，镜像名前面的配置是启动容器的配置是docker中的配置用来设置容器的配置和处理宿主机和容器间的映射可以访问到宿主机的文件，镜像名后面是容器本身的命令和命令的参数，只能访问容器内的文件。如果想要访问容器的文件或设置容器配置文件可以使用`-v 宿主机文件:容器文件`的方式映射到宿主机再操作。

:::

启动了namesrv服务和Broker服务之后RocketMQ就可以算部署完成正常使用了。不过出于方便管理的角度还可以部署一个控制台以便在网页中查看和管理RocketMQ。

### 3、部署访问控制台

![image-20230418151601625](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418151602.png)

#### 安装控制台

- `docker search rocketmq-consle`查找可用的控制台镜像，并选择其中Stars较多的一个安装；

  ![image-20230418152613745](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418152614.png)

- `docker pull styletang/rocketmq-console-ng`拉取其中一个镜像

  ![image-20230418152726264](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418152727.png)

- `docker run -d -p {8180}:8080 -e "JAVA_OPTS=-Drocketmq.config.namesrvAddr={docker宿主机ip}:{9876} -Drocketmq.config.isVIPChannel=false" styletang/rocketmq-console-ng`启动控制台。上面`{}`括起来的部分是需要去除大括号并修改为自己的配置。

  ![image-20230418154351196](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418154352.png)

::: warning 端口映射

控制台默认使用8080访问，如果宿主机的8080端口已经被占用，或出于其他考虑可以将容器的8080映射为宿主机的其他端口，然后在浏览器输入`http://{宿主机IP}:{映射的端口}/`。

:::

## 三、都是坑

### 1、准备工作得做好

`docker run `的`-v`指令映射宿主文件和容器文件时，如果是映射文件夹，容器运行过程中往里加文件如：`-v  /tmp/data/rocketmq/broker/logs:/root/logs -v  /tmp/data/rocketmq/broker/store:/root/store`等，宿主机是不用提前创建文件的。但是如果映射的是容器启动就要用的**文件**如：`-v  /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf`，那么这个文件必须提前在宿主机的相应位置建好并编辑好配置。否则自动映射时会将其映射为文件夹导致启动异常。

