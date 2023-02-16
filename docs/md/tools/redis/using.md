# Redis实用

## 雪崩

### 1、什么是缓存雪崩

如果缓在某一个时刻出现大规模的key失效，那么就会导致大量的请求打在了数据库上面，导致数据库压力巨大，如果在高并发的情况下，可能瞬间就会导致数据库宕机。这就是缓存雪崩。

### 2、原因分析

- Redis宕机
- 采用了相同的过期时间