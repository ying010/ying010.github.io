# Redis命令

[TOC]

## 语法

- ***大写字母*** 表示命令名 
- ***\<options>*** 表示必传参数
- ***[options]*** 表示可选参数

## 通用命令

- `DEL <key>` 用于删除key
- `DUMP <key>` 序列化key，并返回被序列化的值
- `EXISTS <key>` 检查key是否存在
- `KEYS <pattern>` 查找所有符合给定模式的key
- `MOVE <key> <db>` 将当前数据库中的key移动到db数据库中
- `RANDOMKEY` 从当前数据库随机返回一个key
- `RENAME <key> <newkey>` 将key重命名
- `RENAMENX <key> <newkey>` 当newkey不存在时，将key重命名
- `TYPE <key>` 返回key所存储的值的类型

## 键过期命令

- `PERSIST <key>` 移除键的过期时间
- `TTL <key>` 查看键过期时间(单位：秒)
- `PTTL <key>` 查看键过期时间(单位：毫秒)，redis2.6及以上版本可用
- `EXPIRE <key> <seconds> ` 给定过期时间(单位：秒)
- `PEXPIRE <key> <milliseconds> ` 给定过期时间(单位：毫秒)，redis2.6及以上版本可用
- `EXPIREAT <key> <timetamp> ` 设置键过期的时间戳
- `PEXPIREAT <key> <timetamp> ` 设置键过期的时间戳,毫秒级经度，redis2.6及以上版本可用
