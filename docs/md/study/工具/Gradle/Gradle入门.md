```groovy
//println ("Hello Grovvy");

//grovvy 可以省略行尾分号和括号
//println "Hello Grovvy"

// grovvy使用def定义变量,是弱类型的
//def i = 100
//println i

//定义集合类型
//def list = ['a', 'b']
//往list中添加元素
//list << 'c'
//取第三个元素
//println list.get(2)

//定义map
//def map = ['k1':'v1', 'k2':'v2']
// 添加,修改map值
//map.k3 = 'v3'
//获取map值
//println map.k3

// grovvy中的闭包
// 闭包就是一个代码块,在gradle中闭包当作参数使用
// 定义一个闭包
def b1 = {
    println "hello b1"
}
// 定义一个方法,方法中需要闭包类型的参数
def method1 (Closure closure) {
    closure()
}
// 调用method1
//method1 (b1)

//定义一个带参闭包
def b2 = {
    v ->
        println "hello ${v}"
}
// 定义一个方法,方法中传递闭包使用的参数
def method2 (Closure closure) {
    closure("world")
}
method2(b2)
```

