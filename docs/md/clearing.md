- [ ] html details 标签
- [ ] typora markText
- [ ] git
- [ ] windows tree命令生成文件树
- [ ] 



- [ ] 事务
- [ ] mysql引擎
- [ ] Spring Cloud集群部署
- [ ] 



- [ ] 拦截器日志记录

1. 获取logger-key
   1. 获取Header中的logger-key
   2. 生成随机的logger-key
2. 缓存logger-key
3. log中打印logger-key



- [ ] redis 雪崩、击穿、穿透

- [ ] 分布式事务
  - [讲解](https://xiaomi-info.github.io/2020/01/02/distributed-transaction/)
- [ ] 熔断降级
- [ ] 接口幂等
  - 幂等指的是其任意多次执行所产生的影响均与一次执行的影响相同
- [ ] 同接口的多个实现
- [ ] service的线程安全
  - 在@Controller/@Service等容器中，默认情况下，scope值是单例-singleton的，也是线程不安全的。
  - 尽量不要在@Controller/@Service等容器中定义静态变量，不论是单例(singleton)还是多实例(prototype)他都是线程不安全的。
  - 默认注入的Bean对象，在不设置scope的时候他也是线程不安全的。
  - 一定要定义变量的话，用ThreadLocal来封装，这个是线程安全的
- [ ] 服务间传递token
- [ ] 亿级数据同时update千条，优化