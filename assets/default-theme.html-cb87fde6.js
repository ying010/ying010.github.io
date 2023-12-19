import{_ as c,L as i,n as r,p,M as a,U as e,a0 as o,Q as n,s}from"./framework-76e35361.js";const d={},u=o('<h1 id="默认主题" tabindex="-1"><a class="header-anchor" href="#默认主题" aria-hidden="true">#</a> 默认主题</h1><h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2><h3 id="容器配置" tabindex="-1"><a class="header-anchor" href="#容器配置" aria-hidden="true">#</a> 容器配置</h3>',3),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineUserConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" DefaultThemeOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vuepress'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"defineUserConfig"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),s("DefaultThemeOptions"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'@vuepress/theme-default'"),n("span",{class:"token punctuation"},","),s(`
  themeConfig`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    tip`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'提示'"),n("span",{class:"token punctuation"},","),s(`
    warning`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'注意'"),n("span",{class:"token punctuation"},","),s(`
    danger`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'警告'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'@vuepress/theme-default'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"themeConfig"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"tip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'提示'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"warning"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'注意'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"danger"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'警告'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=o(`<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><ul><li>示例 1 （默认标题）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个 details 标签</p></details><ul><li>示例 2 （自定义标题）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>示例 3 （Code Group 别名）：</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>需要特别注意的是code-group使用的4个冒号</p></div><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
::: code-group-item BAR
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js language-js"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,20),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'foo'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function h(f,_){const t=i("CodeGroupItem"),l=i("CodeGroup");return r(),p("div",null,[u,a(l,null,{default:e(()=>[a(t,{title:"TS"},{default:e(()=>[v]),_:1}),a(t,{title:"JS"},{default:e(()=>[m]),_:1})]),_:1}),k,a(l,null,{default:e(()=>[a(t,{title:"FOO"},{default:e(()=>[g]),_:1}),a(t,{title:"BAR"},{default:e(()=>[b]),_:1})]),_:1})])}const w=c(d,[["render",h],["__file","default-theme.html.vue"]]);export{w as default};
