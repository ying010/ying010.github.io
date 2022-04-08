# 一、 Vue CLI

## 1.1. 什么是CLI

* 脚手架是什么东西
* CLI依赖 webpack、node、npm
* 安装CLI3 ->拉取CLI2模块



## 1.2. CLI2初始化项目的过程



## 1.3. CLI2项目目录



### 1.4. runtime-compiler和runtime-only的区别

* runtime-compiler: template -> ast -> render -> virtual dom -> 真实DOM
* runtime-only: render:(h) => h, -> createElement
* runtime-only: 效率更高、文件更小

### 1.5. Vue CLI3

* 如何通过CLI3创建项目

  ``vue create 项目名``

* CLI3的目录结构

* 配置文件：

  * 1、Vue UI 
  * 2、隐藏的配置文件 
  * 3、自定义vue.config.js

## 三、 Vue-Router

### 3.1. 什么是前端路由

* 后端渲染/后端路由
* 前后端分离
* SPA/前端路由

### 3.2. 路由的基本配置

* 安装vue-router
* Vue.use -> 创建VueRouter对象 -> 挂载到Vue实例上
* 配置映射关系：1、创建组件 2、配置映射关系 3、使用router-ink/router-view

### 3.3. 细节处理

* 默认路由：redirect
* mode: history
* router-link -> tag/replace/active-class

### 3.4. 动态路由

* /user/:id
* this.$router.params.id

### 3.5. 参数的传递

* params
* query -> URL
* URL:
  * 协议://主机:端口/路径？查询
  * scheme://host:port/path?query#fragment

### 3.6. 路由嵌套

* children:[]

### 3.7. 导航守卫

* 全局导航守卫
* 路由独享守卫
* 组件类守卫

### 3.8. Kepp-alive



### 3.9. TabBar的封装过程



## 四、promise

### 4.1. Promise的基本使用

* 如何将异步操作放入到promise中
* (resolve, reject) => then/catch

### 4.2. promise的链式调用



### 4.3. Promise的all方法



## 五、Vuex

### 5.1. 什么是状态管理



### 5.2. Vuex的基本使用

* state -> 直接修改state(错误)
* mutations -> devtools

### 5.3. 核心概念

* state->单一状态树
* getters ->
* mutations ->
* actions ->异步操作(Promise)
* modules

### 5.4. 目录组织方式



## 六、 网络请求封装(axios)

### 6.1. 网络请求方式的选择



### 6.2. axios的基本使用



### 6.3. axios的相关配置



### 6.4. axios的创建实例



### 6.5. axios的封装

