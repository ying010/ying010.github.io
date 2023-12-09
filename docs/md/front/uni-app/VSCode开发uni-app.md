# VSCode开发uniapp

## 下载项目

### 通过 命令行创建 uni-app 项目

```bash
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

使用此命令创建的项目为以 typescript 开发的Vue3/Vite版，如需其他版本可参考[uniapp官网](https://uniapp.dcloud.net.cn/quickstart-cli.html)

::: warning 超时报错

使用命令行创建项目时会从线上拉取项目，没有科学上网时可能会出现超时错误，错误如下：

![超时](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/28/20231128151859.png)

cmd/gitbash等这种命令框不会自动使用系统代理，所以电脑设置了科学上网也会报错，需要对命令框单独设置。

以cmd为例，将cmd设置为系统的科学上网代理：

1. 使用netstat命令查看下端口(有些代理软件界面也可以查看端口)

![端口](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/28/20231128142526.png)

2. 使用`set https_proxy=http://127.0.0.1:7890` `set http_proxy=http://127.0.0.1:7890` 设置代理，使用`echo %http_proxy%`查看设置
3. 使用命令安装项目

:::

## 配置开发环境

使用VSCode打开下载的项目，此时缺少一定的代码提示和文档注释等，需要下载对应插件方便后期开发。

### uniapp开发插件

#### 创建页面、组件、分包

组件名：uni-create-view

![image-20231129101540898](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129101542.png)

功能：可以创建页面、组件、分包并将其自动加入到pages.json

![image-20231129101843000](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129101843.png)

设置：点击插件的小齿轮选择插件设置可以打开插件设置界面，选择合适自己的设置

![image-20231129102724084](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129102725.png)

使用：在需要创建文件的文件夹上右击发现多了新建uniapp页面、新建uniapp页面(分包)、新建uniapp组件选项，点击自己需要的选项，在屏幕正上方出现的输入框中输入页面名和pages.json中的标题名空格分隔，回车后会自动创建文件并自动加入到pages.json中。

![动画](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129111931.gif)

#### 语法提示

插件名：uni-helper。这是一组插件，里面包含了开发uniapp一众语法提示插件。

![image-20231129104113161](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129104114.png)

![image-20231129104129741](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/11/29/20231129104130.png)

使用：编写代码时会有提示信息。

![代码提示](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/12/01/20231201102948.gif)

#### 查看文档

插件名：uniapp小程序扩展

![小程序扩展搜索](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/12/01/20231201110353.gif)

使用：鼠标悬停组件上会显示文档，有官方文档按钮点击后跳转到该组件的官方文档。

![小程序扩展使用](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/12/01/20231201110638.gif)

### TS开发

#### 类型提示

- 安装[Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)插件并启用 [接管模式 Takeover Mode](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
- 安装依赖

```bash
npm i -D @uni-helper/uni-app-types
```

- 配置`tsconfig.json`，确保`compilerOptions.types`中包含`@dcloudio/types`和`@uni-helper/uni-app-types`，`include`中包含对应`vue`文件。同时`vueCompilerOptions`也应有一些配置，具体配置时根据`Vue Language Features (Volar)`和`vue-tsc`版本决定的，具体配置可以在[官方GitHub](https://github.com/uni-helper/uni-app-types)上查看。

```json
{
  "compilerOptions": {
    "types": [
      "@dcloudio/types",
      "@uni-helper/uni-app-types"
    ]
  },
  "vueCompilerOptions": {
    "nativeTags": [
      "block",
      "component",
      "template",
      "slot"
    ]
  },
  "include": [
    "src/**/*.vue"
  ]
}
```

- 重启后生效

::: tips

因为根据`Vue Language Features (Volar)`和`vue-tsc`版本搭配有多种不同的配置，实例中展示的配置只是文档编写时使用的`Vue Language Features (Volar) v1.8.24` 和`vue-tsc v1.8.22`所对应的配置。如果配置好之后组件没有提示需要根据自己的版本从[官方GitHub](https://github.com/uni-helper/uni-app-types)上查看对应的配置。下图为GitHub页面中的实例：

![image-20231201114236197](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/12/01/20231201114237.png)

:::