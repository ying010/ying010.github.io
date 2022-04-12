# 默认主题

## 自定义容器
### 容器配置

:::: code-group

::: code-group-item TS
```ts
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  theme: '@vuepress/theme-default',
  themeConfig: {
    tip: '提示',
    warning: '注意',
    danger: '警告',
  },
})
```
:::

::: code-group-item JS
```js
module.exports = {
  theme: '@vuepress/theme-default',
  themeConfig: {
    tip: '提示',
    warning: '注意',
    danger: '警告',
  },
}
```
:::

::::


### 使用示例

- 示例 1 （默认标题）：

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

**输出**

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

- 示例 2 （自定义标题）：

**输入**

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
````

**输出**

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

- 示例 3 （Code Group 别名）：

::: warning
需要特别注意的是code-group使用的4个冒号
:::

**输入**

````md
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::
````

**输出**

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::
