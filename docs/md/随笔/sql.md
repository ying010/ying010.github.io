# 20-9-29 门店录入

```mysql
CREATE TABLE mambike_dealer.`t_inventory_entering` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_dealer_id` int(11) NOT NULL DEFAULT '0' COMMENT '一网Id',
  `first_dealer_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '一网名',
  `store_id` int(11) NOT NULL DEFAULT '0' COMMENT '门店Id',
  `store_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '门店名称',
  `creator_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '创建人姓名',
  `creator_phone` char(11) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '创建人手机号',
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '编号',
  `code_type` int(1) NOT NULL COMMENT '编号类型 0：车架号 1：电池SN号',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_state` int(1) NOT NULL DEFAULT '1' COMMENT '有效状态 0：无效  1：有效',
  `delete_time` datetime DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`),
  KEY `idx_first_dealer_id` (`first_dealer_id`),
  KEY `idx_store_id` (`store_id`),
  KEY `idx_code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='门店盘点，车架号、电池SN号录入接口';
```

```mysql
ALTER TABLE `mambike_dealer`.`t_inventory_entering` 
ADD COLUMN `batch_type` int(1) NULL COMMENT '0：无问题 1:问题批次';
```
