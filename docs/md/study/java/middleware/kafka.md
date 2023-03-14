# Kafka

## 1.1 spring-boot集成spring-kafka

引入依赖：

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

添加配置信息

```yaml
spring:
    kafka:
        bootstrap-servers: 192.168.235.128:9092
        producer:
          retries: 0
          batch-size: 16384
          buffer-memory: 33554432
        consumer:
          enable-auto-commit: true
          heartbeat-interval: 1000
```

生产者:

由于项目中Kafka使用的是spring-kafka,所以在使用生产者时可以使用Spring提供的KafkaTemplate<K,V>;泛型中的K表示键的类型,V表示值即发送数据的类型,这两种一般使用String即可。

```java
/**
 * 生产者
 * @author zhiying
 */
@RestController
@RequestMapping("/study/kafka/producer")
@Slf4j
public class KafkaProducerRest {
    @Resource
    KafkaTemplate<String, String> kafkaTemplate;

    @GetMapping("/send/{topic}/{message}")
    public void send(@PathVariable String message, @PathVariable String topic) {
        ProducerRecord<String, String> producerRecord = new ProducerRecord<>(topic, message);
        kafkaTemplate.send(producerRecord);
    }
}
```

消费者:

消费者需要加一个监听注解@KafkaListener

```java
    @KafkaListener(topics = "first", groupId = "group1")
    public void listener(String message) {
        log.info(message);
    }
```

## 1.2 本地测试

### 1.2.1 Linux安装配置Kafka

- 首先在[Kafka官网](https://kafka.apache.org/downloads)下载压缩包,并在Linux解压;

- 修改配置文件
  
  - 首先修改broker,broker为唯一的int值
    
    ```bash
    ############################# Server Basics #############################
    
    # The id of the broker. This must be set to a unique integer for each broker.
    broker.id=0
    ```
  
  - 修改服务器地址端口号
    
    ```bash
    ############################# Socket Server Settings #############################
    
    # The address the socket server listens on. It will get the value returned from
    # java.net.InetAddress.getCanonicalHostName() if not configured.
    #   FORMAT:
    #     listeners = listener_name://host_name:port
    #   EXAMPLE:
    #     listeners = PLAINTEXT://your.host.name:9092
    listeners=PLAINTEXT://192.168.235.128:9092
    ```
  
  - 修改zookeeper地址
    
    ```bash
    ############################# Zookeeper#############################
    
    # Zookeeper connection string (see zookeeper docs for details).
    # This is a comma separated host:port pairs, each corresponding to a zk
    # server. e.g. "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002".
    # You can also append an optional chroot string to the urls to specify the
    # root directory for all kafka znodes.
    zookeeper.connect=192.168.235.128:2181,192.168.235.129:2181
    ```
  
  - 启动zookeeper
    
    ```bash
    ./bin/zookeeper-server-start.sh ./config/zookeeper.properties
    ```
  
  - 启动Kafka
    
    ```bash
    ./bin/kafka-server-start.sh ./config/server.properties
    ```

# 二、Kafka概述

## 2.1 定义

Kafka是**分布式**的基于**发布/订阅**模式的**消息队列**，主要用于大数据中信息处理。

## 2.2消息队列

### 2.2.1传统消息队列

消息队列的好处：

1. 解耦

2. 可恢复性
   
   系统部分组件失效后不影响整个系统，组件回复后可继续处理消息；

3. 缓冲
   
   控制、优化数据流经过系统的速度，解决生产者、消费者速度不一致；主要为生成者速度>消费者。

4. 灵活性 & 峰值处理能力
   
   峰值访问时将信息暂存在消息队列，过后处理。

5. 异步通信
   
   消息放入消息队列可在需要时再处理

### 2.2.2消息队列的两种模式

1）**点对点模式**（一对一，消费者主动拉取，消费后删除消息）

2）**发布/订阅模式**（一对多，消费后消息不删除）

​    （1）消费者主动拉取

​                缺点：需要维护常轮询，可能造成资源浪费

​                优点：处理速度取决与消费者

​    （2）队列主动推送

​                优点：消费者不用关注是否有新消息

​                缺点：处理速度取决于队列，消费者处理速度过慢会错过消息；消费这处理速度过快会浪费资源

# 三、Kafka组成

## 3.1 Kafka名词

- **Broker** 节点
  
  Kafka存储的服务节点

- **Topic** 主题

- **Partition** 分区

- **Replication factor** 副本

- **Leader** 主副本
  
  ​    每个Partition分区会有多个副本，其中Leader是主副本

- **Follower** 从副本 
  
    从副本不能读取,只是用来备份数据,等待成为Leader

- **Producer** 生产者

- **Consumer** 消费者

- **Consumer Group** 消费者组
  
  同一个消费者组中的消费者对同一消息只能消费一次

- **offset** 偏移量
  
  记录消费者已消费的消息数

- **ISR** in-sync replica set同步副本
  
  可以竞争上岗的副本

- **ack**
  
  发送成功策略
  
  0:不重试,发完就行;
  
  1:等待lead写完;
  
  -1(all):等待ISR中的所有副本全都完成,可能造成**重复数据**;
