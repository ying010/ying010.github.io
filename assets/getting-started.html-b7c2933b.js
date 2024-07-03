import{_ as p,L as i,n as u,p as d,Q as s,s as e,M as n,U as a,a0 as r}from"./framework-76e35361.js";const m={},h=s("h1",{id:"vuepress-搭建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-搭建","aria-hidden":"true"},"#"),e(" VuePress 搭建")],-1),g=s("h2",{id:"vuepress-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-介绍","aria-hidden":"true"},"#"),e(" VuePress 介绍")],-1),k={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。",-1),b={href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener noreferrer"},_={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},f=s("h2",{id:"依赖环境",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#依赖环境","aria-hidden":"true"},"#"),e(" 依赖环境")],-1),y={class:"custom-container tip"},x=s("p",{class:"custom-container-title"},"拓展",-1),w={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},V={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#markdown-anchor",target:"_blank",rel:"noopener noreferrer"},P=r('<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>从头搭建一个简单的 VuePress 文档网站。</p><h3 id="步骤0-新建文件" tabindex="-1"><a class="header-anchor" href="#步骤0-新建文件" aria-hidden="true">#</a> <strong>步骤0</strong>：新建文件</h3><p>进入需要生成VuePress文档的路径，新建的空文件夹或已有的项目；</p><details class="custom-container details"><summary>示例</summary><p>此时的文件夹是空的：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213001.png" alt="image-20220411212959790"></p></details><h3 id="步骤1-安装vuepress" tabindex="-1"><a class="header-anchor" href="#步骤1-安装vuepress" aria-hidden="true">#</a> <strong>步骤1</strong>：安装VuePress</h3><p>将 VuePress 安装为本地依赖，这里安装的是最新测试版本<code>vuepress@next</code>,如果安装最新的正式版本去除<code>@next</code>即可；</p>',7),j=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(),s("span",{class:"token function"},"install"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),C=r('<details class="custom-container details"><summary>示例</summary><p>以<code>yarn</code>为例：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213131.png" alt="image-20220411213129657"></p><p>执行完成后会生成：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213434.png" alt="image-20220411213433375"></p><p>其中依赖包和同步文件无需在意，配置文件在后面使用时需要修改。</p></details><h3 id="步骤2-增加启动配置" tabindex="-1"><a class="header-anchor" href="#步骤2-增加启动配置" aria-hidden="true">#</a> <strong>步骤2</strong>：增加启动配置</h3>',2),N=s("code",null,"package.json",-1),q={href:"https://classic.yarnpkg.com/en/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},M=r(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>示例</summary><p>此时的package.json:</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-213959.png" alt="image-20220411213958513"></p></details><h3 id="步骤3-添加md文件" tabindex="-1"><a class="header-anchor" href="#步骤3-添加md文件" aria-hidden="true">#</a> <strong>步骤3</strong>：添加md文件</h3><p>新建<code>docs</code>文件夹，并在文件夹中新建一个<code>README.md</code>文件，在建好的文件中随便输入些内容。编辑<code>.md</code>文件可以使用markdown编辑器<a href="">Typora(收费)</a>或<a href="">MarkText(开源)</a>；</p><details class="custom-container details"><summary>示例</summary><p>新建的文件夹和文件：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-214413.png" alt="image-20220411214412451"></p></details><h3 id="步骤4-启动" tabindex="-1"><a class="header-anchor" href="#步骤4-启动" aria-hidden="true">#</a> <strong>步骤4</strong>：启动</h3><p>在本地启动服务器来开发你的文档网站</p>`,7),A=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(` docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),z=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(` run docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),D={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},R=r('<details class="custom-container details"><summary>示例</summary><p>运行命令：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-215530.png" alt="image-20220411215528784"></p></details><div class="custom-container warning"><p class="custom-container-title">注意</p><p>当8080端口被占用时，会依次尝试+1的端口启动，实际的启动端口由回显信息确定：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-215907.png" alt="image-20220411215906228"></p></div><p>当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p><p>现在，你应该已经有了一个简单可用的 VuePress 文档网站。</p><details class="custom-container details"><summary>示例</summary><p>网站：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-220324.png" alt="image-20220411220322774"></p></details><details class="custom-container details"><summary>官网的异同</summary><p>官方文档中的</p><ul><li><p>步骤1：使用命令行创建文件</p></li><li><p>步骤2：初始化项目</p><ul><li><p>初始化git，测试项目并不需要git，项目上传git可以参见<a href="">git的使用</a></p></li><li><p>初始化yarn，初始化一些基础配置，这些配置可有可无，需要的也可以手动修改配置文件加上</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-221141.png" alt="image-20220411221139639"></p><p>生成的配置文件：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-221213.png" alt="image-20220411221211898"></p></li></ul></li><li><p>步骤5：添加git的忽略路径</p></li></ul><p>这三步并不必须，处于简易考虑，选择略去。</p></details>',6),T={class:"custom-container tip"},L=s("p",{class:"custom-container-title"},"拓展",-1),G={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/container.html",target:"_blank",rel:"noopener noreferrer"},I=s("p",null,[e("由于"),s("code",null,"container"),e("是官方插件，可以在默认主题配置中配置容器三个主要提示信息的默认显示信息：")],-1),S=s("p",null,[s("img",{src:"https://raw.githubusercontent.com/ying010/pic-repo/master/img/2022/04/11/20220411-235623.png",alt:"image-20220411235621715"})],-1),B=s("p",null,[e("如果需要自定义容器，可以参见"),s("a",{href:""},"container设置")],-1),U=r(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>如果没有任何配置， VuePress 站点仅有一些最基础的功能。为了更好地自定义网站，首先在文档目录下创建一个 <code>.vuepress</code> 目录，所有 VuePress 相关的文件都将会被放在这里。项目结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ├── docs
   |  ├── .vuepress
   |  |  └── config.ts
   |  └── README.md
   ├── package.json
   ├── tree.txt
   └── yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 站点必要的配置文件是 <code>.vuepress/config.js</code>，它应该导出一个 JavaScript 对象。如果使用 TypeScript ，可以将其替换为 <code>.vuepress/config.ts</code> ，以便让 VuePress 配置得到更好的类型提示。</p>`,4),Y=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),e(),s("span",{class:"token punctuation"},"{"),e(" defineUserConfig "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'vuepress'"),e(`
`),s("span",{class:"token keyword"},"import"),e(),s("span",{class:"token keyword"},"type"),e(),s("span",{class:"token punctuation"},"{"),e(" DefaultThemeOptions "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'vuepress'"),e(`

`),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token generic-function"},[s("span",{class:"token function"},"defineUserConfig"),s("span",{class:"token generic class-name"},[s("span",{class:"token operator"},"<"),e("DefaultThemeOptions"),s("span",{class:"token operator"},">")])]),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token comment"},"// 站点配置"),e(`
  lang`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),e(`
  title`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'Hello VuePress'"),s("span",{class:"token punctuation"},","),e(`
  description`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'Just playing around'"),s("span",{class:"token punctuation"},","),e(`

  `),s("span",{class:"token comment"},"// 主题和它的配置"),e(`
  theme`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'@vuepress/theme-default'"),s("span",{class:"token punctuation"},","),e(`
  themeConfig`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
    logo`),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'https://vuejs.org/images/logo.png'"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),J=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"language-javascript"},[s("code",null,[e("module"),s("span",{class:"token punctuation"},"."),e("exports "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token punctuation"},"{"),e(`
  `),s("span",{class:"token comment"},"// 站点配置"),e(`
  `),s("span",{class:"token literal-property property"},"lang"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token literal-property property"},"title"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'你好， VuePress ！'"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token literal-property property"},"description"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'这是我的第一个 VuePress 站点'"),s("span",{class:"token punctuation"},","),e(`

  `),s("span",{class:"token comment"},"// 主题和它的配置"),e(`
  `),s("span",{class:"token literal-property property"},"theme"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'@vuepress/theme-default'"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token literal-property property"},"themeConfig"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e(`
    `),s("span",{class:"token literal-property property"},"logo"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'https://vuejs.org/images/logo.png'"),s("span",{class:"token punctuation"},","),e(`
  `),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e(`
`),s("span",{class:"token punctuation"},"}"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1);function O(H,Q){const t=i("ExternalLinkIcon"),c=i("RouterLink"),o=i("CodeGroupItem"),l=i("CodeGroup");return u(),d("div",null,[h,g,s("p",null,[e("VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 "),s("a",k,[e("Markdown"),n(t)]),e(" 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。")]),v,s("blockquote",null,[s("p",null,[e("官方github: "),s("a",b,[e("VuePress2"),n(t)])]),s("p",null,[e("官方中文文档："),s("a",_,[e("VuePress文档"),n(t)])])]),f,s("ul",null,[s("li",null,[s("p",null,[n(c,{to:"/md/using/environment_configuration.html#%E5%AE%89%E8%A3%85Node-js"},{default:a(()=>[e("Node.js v12+")]),_:1})])]),s("li",null,[s("p",null,[n(c,{to:"/md/using/environment_configuration.html#%E5%AE%89%E8%A3%85yarn"},{default:a(()=>[e("Yarn v1")]),_:1}),e(" （可选）")]),s("div",y,[x,s("p",null,[e("标题锚点扩展由 "),s("a",w,[e("markdown-it-anchor"),n(t)]),e(" 支持。")]),s("p",null,[e("配置参考： "),s("a",V,[e("markdown.anchor"),n(t)])])])])]),P,n(l,null,{default:a(()=>[n(o,{title:"YARN",active:""},{default:a(()=>[j]),_:1}),n(o,{title:"NPM"},{default:a(()=>[E]),_:1})]),_:1}),C,s("p",null,[e("在 "),N,e(" 中添加一些 "),s("a",q,[e("scripts"),n(t)]),e("，运行/打包指令")]),M,n(l,null,{default:a(()=>[n(o,{title:"YARN",active:""},{default:a(()=>[A]),_:1}),n(o,{title:"NPM"},{default:a(()=>[z]),_:1})]),_:1}),s("p",null,[e("VuePress 会在 "),s("a",D,[e("http://localhost:8080"),n(t)]),e(" 启动一个热重载的开发服务器。")]),R,s("div",T,[L,s("p",null,[e("文档中使用的示例、注意、详情等是vuepress的官方插件，详细介绍参见"),s("a",G,[e("container"),n(t)]),e(";")]),I,S,B]),U,n(l,null,{default:a(()=>[n(o,{title:"ts"},{default:a(()=>[Y]),_:1}),n(o,{title:"js"},{default:a(()=>[J]),_:1})]),_:1})])}const K=p(m,[["render",O],["__file","getting-started.html.vue"]]);export{K as default};
