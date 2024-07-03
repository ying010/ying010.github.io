import{_ as n,n as s,p as a,a0 as t}from"./framework-76e35361.js";const e={},o=t(`<h1 id="uni-app文件目录" tabindex="-1"><a class="header-anchor" href="#uni-app文件目录" aria-hidden="true">#</a> uni-app文件目录</h1><h2 id="文件目录总览" tabindex="-1"><a class="header-anchor" href="#文件目录总览" aria-hidden="true">#</a> 文件目录总览</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tree
├── pages ---------------------------- 页面文件目录
│   └── index
│       └── index.vue ---------------- index页
├── static --------------------------- 存放引用的本地静态资源(注意：静态资源只能存放于此)
├── unpackage ------------------------ 非工程代码。一般存放运行或发行的编译结果
├── App.vue -------------------------- 配置APP全局样式、监听应用生命周期
├── index.html ----------------------- H5端页面
├── main.js -------------------------- Vue初始化入口文件
├── manifest.json -------------------- 配置appid、应用名称、logo、版本等打包信息
├── pages.json ----------------------- 配置页面路由、导航栏、tabBar等页面类信息
└── uni.scss ------------------------- uni-app内置的常用样式变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件解读" tabindex="-1"><a class="header-anchor" href="#文件解读" aria-hidden="true">#</a> 文件解读</h2><h3 id="page-json" tabindex="-1"><a class="header-anchor" href="#page-json" aria-hidden="true">#</a> page.json</h3><p>配置项：</p><ul><li>pages 页面路由及窗口表现</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>globalStyle 默认窗口表现</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uni-app&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ffff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>tabBar 底下tab页 最少需要两项</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ffff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/logo.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/logo.png&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/logo.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/logo.png&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function i(l,u){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","文件目录结构.html.vue"]]);export{r as default};
