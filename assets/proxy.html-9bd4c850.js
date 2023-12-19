import{_ as e,n,p as a,a0 as s}from"./framework-76e35361.js";const i={},d=s(`<h1 id="proxy-代理" tabindex="-1"><a class="header-anchor" href="#proxy-代理" aria-hidden="true">#</a> proxy：代理</h1><p>​ 扩展（增强）对象一些功能</p><h2 id="proxy作用-比如vue中的拦截" tabindex="-1"><a class="header-anchor" href="#proxy作用-比如vue中的拦截" aria-hidden="true">#</a> Proxy作用：比如vue中的拦截</h2><p>​ 预警、上报、扩展功能、统计、增强对象等</p><p>proxy是一种设计模式--&gt;代理模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;String&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 您访问了name</span>
obj<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h2><p>​ <code>new Proxy(target, handler);</code></p><p>​ <code>new Proxy(被代理的对象, 对代理的对象做什么操作)</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>handler:JSON

{
	set(){}, //设置的时候调用

	get(){},//获取的时候调用

	deleteProperty(){},//删除

	has(){},//判断有没有 &#39;xxx&#39; in obj

	apply(),//调用函数处理

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[d];function l(t,c){return n(),a("div",null,r)}const p=e(i,[["render",l],["__file","proxy.html.vue"]]);export{p as default};
