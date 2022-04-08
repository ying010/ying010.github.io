## 1、function

```javascript
const aa = function() {
    
}
```

## 2、对象字面量定义

```javascript
const obj = {
    b: function() {
        
    },
    a() {
        
    }
}
```

## 3、ES6中的箭头函数

### 3.1. 函数定义

```javascript
// const obj = (参数列表) => {}
//无参箭头函数
const obj = () => {}
```

### 3.2. 放入多个参数

```javascript
const sum = (a,b) => {
    return a + b;
}
```

### 3.3. 只有一个参数

```js
const pow = a => {return a * a;}
```



### 3.4. 函数方法体内只有一行代码

```js
const sum = (a, b) => a + b
```

### 3.5. 箭头函数中this的使用

```js
// this是逐层向上查找，直到找到this的定义
```

