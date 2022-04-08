# proxy：代理

​	扩展（增强）对象一些功能



## Proxy作用：比如vue中的拦截

​	预警、上报、扩展功能、统计、增强对象等



proxy是一种设计模式-->代理模式



```js
let obj = {
    name:'String'
}
// 您访问了name
obj.name
```

## 语法：

​	new Proxy(target, handler);

​	new Proxy(被代理的对象, 对代理的对象做什么操作)

handler:JSON

{

​	set(){}, //设置的时候调用

​	get(){},//获取的时候调用

​	deleteProperty(){},//删除

​	has(){},//判断有没有 'xxx' in obj

​	apply(),//调用函数处理

}



