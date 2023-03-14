# CSS

## 一、css实现三角形—border法

### 1.1 border的本质

border四边在边框交接处，是一边占用一半的面积；一个较简单的验证方式是border四边框设置为不同的颜色即可：

```css
.boder{
    width:0;
    height:0;
    border-top:50px solid black;
    border-right:50px solid red;
    border-bottom:50px solid green;
    border-left:50px solid blue;
}
```

结果将如下所示：

![image-20220408104914640](https://raw.githubusercontent.com/ying010/pic-repo/master/img/20220408104915.png)

### 1.2 基本三角形

当我们把其他三边隐藏(颜色设为透明)后就会获得一个三角形

```css
.boder{
    width:0;
    height:0;
    border:50px solid;
    border-color:transparent transparent blue;
}
```

