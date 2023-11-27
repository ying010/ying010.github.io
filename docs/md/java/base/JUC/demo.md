线程状态

synchronized：

​	锁对象，以执行某一段代码；

​	锁普通方法等于锁this，锁静态方法相当于锁当前类.class的对象（类加载器加载的class对象）

​	hotspot VM中实现方式是对象头上有两位表示锁标识

​	可重入锁

​	sync(Object)

​	markword记录线程ID(偏向锁)

​	如果线程争用，升级为自旋锁

​	10次之后，升级为重量锁 - OS

​	加锁代码，执行时间短，线程数少用自旋锁；执行时间长、线程数多用系统锁。



- 线程的概念、启动方式、常用方法

- synchronized(Object)

  - 不能用String常量 Integer Long 等

- 线程同步

  -synchronized

  - 锁的是对象不是代码
  - 不些锁定对象锁this；锁静态方法锁 XX.class
  - 锁定方法 非锁定方法 同时执行
  - 锁升级
    - 偏向锁 -> 自旋锁 -> 重量级锁



volatile:

- 保证线程可见性
  - MESI
  - 缓存一致性协议
- 禁止指令重排序(CPU) ：指令重排序表现为编译后的汇编指令重新排序
  - DCL单例
  - Double Check Lock

volatile不保证原子性；synchronized不阻止指令重排

如果不加volatile但是线程可见，1、线程取线程缓存数据才会出现可见性问题，如果都是直接取内存数据是没问题的，如果线程操作的数据次数较少时不触发缓存。2、由于其他语句触发了MESI(缓存一致性协议)，例如：System.out.println会由于有synchronized而触发MESI。



CAS（无锁优化 自旋）

Atomic前缀开头的类都是CAS实现

- Compare And Set

- cas(V, Expected, NewValue)

  - if V==e

    v=NewValue

    otherwise try again or fail

  - CPU原语支持

- ABA问题

  - 加Version



CountDownLatch

CyclicBarrier

Phaser



ReentrantReadWriteLock

读写锁，读读不排斥，写排斥。如果是一个线程获取到读锁，每次上个读锁业务执行完毕前就续上另一个读锁线程，那期间产生的写锁就加不进去，造成类似于写死锁的现象。



semaphore

- 限流
- 