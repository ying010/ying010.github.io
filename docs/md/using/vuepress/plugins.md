# 插件

## 容器container

> 节选自官网文档[container](https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html)，保留了基本使用方法，增加了简易实用的自定义容器；忽略了官网中配置[markdown-it-container](https://github.com/markdown-it/markdown-it-container#api)的配置项，这些配置项更倾向于开发VuePress插件，使用时很少用到。

### 容器语法

```md
::: <type> [info]
[content]
:::
```

- `type` 是必需的，应通过 [type](#type) 配置项来指定。
- `info` 是可选的，其默认值可以通过 [locales](#locales) 的 `defaultInfo` 配置项来指定，作用是容器的标题。
- `content` 可是任何合法的 Markdown 内容。

::: tip
  该插件可以被多次使用，以便支持不同类型的容器。
:::

### 配置项

#### type

- 类型： `String`
- 详情：容器的类型
- VuePress默认主题中定义的类型有，详细用法见[默认容器](./default-theme.md#自定义容器)：
  - tip
  - warning
  - danger
  - details
  - [CodeGroup](./components.md#codegroup) 和 [CodeGroupItem](./components.md#codegroupitem) 的别名：
    - `code-group`
    - `code-group-item`

::: warning

​	下面的配置项是自定义容器才需要的配置，如果使用过程中不需要自定义容器可以忽略掉。

​	tip、warning、danger的默认显示文本可以在默认主题的配置中简易配置，见[默认主题中容器的配置](./defalut-theme.md#容器配置)

:::

#### locales

- 类型： `Record<string, { defaultInfo: string }>`

- 详情：

  容器在不同 locales 下的默认 `info` 。

  如果没有指定该配置项，默认 `info` 会使用大写的 [type](#type) 。

- 示例：

```js
module.exports = {
  plugins: [
    [
      '@vuepress/container',
      {
        type: 'tip',
        locales: {
          '/': {
            defaultInfo: 'TIP',
          },
          '/zh/': {
            defaultInfo: '提示',
          },
        },
      },
    ],
  ],
}
```

- 参考：
  - [指南 > 多语言支持](./i18n.md)

#### before

- 类型： `(info: string) => string`

- 默认值：

```ts
(info: string): string =>
  `<div class="custom-container ${type}">${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`
```

- 详情：

  一个用于渲染容器起始标签的函数。

  第一个参数是 [容器语法](#容器语法) 的 `info` 部分。


#### after

- 类型： `(info: string) => string`

- 默认值：

```ts
(): string => '</div>\n'
```

- 详情：

  一个用于渲染容器结束标签的函数。

  第一个参数是 [容器语法](#容器语法) 的 `info` 部分。


::: warning 

before和after两个配置必须同时配置，after主要负责before中定义标签的关闭

:::
