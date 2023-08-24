# VUE概览
## 一、计算属性

### 1.1. 计算属性的本质

* fullname：{set(), get()}

### 1.2. 计算属性和methods对比

* 计算属性多次使用时，只会调用一次
* 有缓存

## 二、 事件监听

### 2.1 事件监听基本使用



### 2.2. 参数问题

- btnClick
- btnClick(event)
- btnClick(abc, event) -> $event

### 2.3. 修饰符

* stop
* prevent
* .enter
* .once
* .native

## 三、 条件判断

### 3.1 v-if/v-else-if/v-else



### 3.2 登录小案例



### 3.3 v-show

* v-show和v-if的区别

## 四、循环遍历

### 4.1 遍历数组



### 4.2 遍历对象

* value
* value, key
* value, key, index

### 4.3. 数组那些方法是响应式的



### 4.4 作业完成



## 五、书籍案例



## 六、 v-model的使用

### 6.1 v-model的基本使用

* v-model => v-bind: value v-on: input

### 6.2 v-model和radio/checkbox/select



### 6.3 修饰符

* lazy
* number
* trim



## 七、组件化开发

### 7.1 认识组件化



### 7.2 组件的基本使用



### 7.3 全局组件和局部组件



### 7.4 父组件和子组件



### 7.5 注册的语法糖



### 7.6 模板的分类写法

* script
* template

### 7.7 数据的存放

* 子组件不能直接访问父组件
* 子组件中有自己的data，而且必须是一个函数
* 为什么必须是一个函数

### 7.8 父子组件的通信

* 父传子：props
* 子传父：$emit

### 7.9 项目

* npm install
* npm run serve

### 7.10 父子组件的访问

* children/refs
* parent/root

### 7.11 slot的使用

* 基本使用
* 具名插槽
* 编译的作用域
* 作用域插槽



## 八、前端模块化

### 8.1 为什么要使用模块化

* 简单写js代码带来的问题
* 闭包引起代码不可复用
* 自己实现了简单的模块话
* AMD/CMD/CommonJS



### 8.2 ES6中模块化的使用

* export
* import



## 九、webpack

### 9.1 什么是webpack

* webpack和gulp的区别
* webpack依赖环境

### 9.2 webpack的起步

* webpack命令
* webpack配置：webpack.config.js/package.json(scripts)



### 9.3 webpack的loader

* css-loader/style-loader
* less-loader/less
* url-loader/file-loader
* babel-loader

### 9.4 webpack中配置VUE

* vue-loader



### 9.5 webpack 的plugin



### 9.6 搭建本地服务器

* webpack-dev-server



### 9.7 配置文件的分离



