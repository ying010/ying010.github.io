# VuePress 搭建

## VuePress 介绍

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

> 官方github: [VuePress2](https://github.com/vuepress/vuepress-next)
>
> 官方中文文档：[VuePress文档](https://v2.vuepress.vuejs.org/zh/)

## 依赖环境

- [Node.js v12+](/md/using/environment_configuration.md#安装Node.js)
- [Yarn v1](/md/using/environment_configuration.md#安装yarn) （可选）

## 手动初始化项目

从头搭建一个简单的 VuePress 文档网站。

- **步骤0**：进入需要生成VuePress文档的路径，新建的空文件夹或已有的项目；

  ::: tip
  
  此时的文件夹是空的：
  
  ![image-20220411212959790](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213001.png)
  
  :::


- **步骤1**: 将 VuePress 安装为本地依赖，这里安装的是最新测试版本`vuepress@next`,如果安装最新的正式版本去除`@next`即可；

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

::: tip 

以`yarn`为例：

![image-20220411213129657](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213131.png)

执行完成后会生成：

![image-20220411213433375](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213434.png)

其中依赖包和同步文件无需在意，配置文件在后面使用时需要修改。

:::

- **步骤2**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts)，运行/打包指令

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

::: tip

此时的package.json:

![image-20220411213958513](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213959.png)

:::

- **步骤3**: 新建`docs`文件夹，并在文件夹中新建一个`README.md`文件，在建好的文件中随便输入些内容，编辑`.md`文件可以使用markdown编辑器[Typora(收费)]()或[MarkText(开源)]()；
  - 如果使用命令行操作，可以使用如下命令完成操作：

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

::: tip 

新建的文件夹和文件：

 ![image-20220411214412451](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-214413.png)

:::

- **步骤4**: 在本地启动服务器来开发你的文档网站

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

  VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。

::: tip

运行命令：

![image-20220411215528784](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-215530.png)

:::

::: warn

当8080端口被占用时，会依次尝试+1的端口启动，实际的启动端口由回显信息确定：

![image-20220411215906228](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-215907.png)

:::

当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress [配置](./configuration.md) 相关的内容。

::: tip

网站：

![image-20220411220322774](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-220324.png)

:::

> 引用自[VuePress 官方文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)

::: tip

官方文档中的

- 步骤1：使用命令行创建文件

- 步骤2：初始化项目

  - 初始化git，测试项目并不需要git，项目上传git可以参见[git的使用]()

  - 初始化yarn，初始化一些基础配置，这些配置可有可无，需要的也可以手动修改配置文件加上

    ![image-20220411221139639](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-221141.png)

    生成的配置文件：

    ![image-20220411221211898](https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-221213.png)

- 步骤5：添加git的忽略路径

这三步并不必须，处于简易考虑，选择略去。

:::