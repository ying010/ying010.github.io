import{_ as n,n as s,p as a,a0 as e}from"./framework-76e35361.js";const t={},p=e(`<h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化" aria-hidden="true">#</a> 国际化</h1><p>Spring Boot的web starter中已经涵盖了所需的基础组件，所以使用Spring Boot的web项目无需另加依赖。</p><h2 id="快速实践" tabindex="-1"><a class="header-anchor" href="#快速实践" aria-hidden="true">#</a> 快速实践</h2><ul><li><p>创建语言包项目的<strong>源文件</strong>目录增加语言包。</p><p>目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--\\resources

	--\\i18n

		--messages.properties

		--messages_en_US.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置Spring Boot配置文件<code>application.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>  
  <span class="token key atrule">messages</span><span class="token punctuation">:</span>
  	<span class="token comment">#设置语言包路径，具体路径由自己设置的语言包决定</span>
    <span class="token key atrule">basename</span><span class="token punctuation">:</span> i18n/messages
    <span class="token key atrule">encoding</span><span class="token punctuation">:</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>
    <span class="token comment">#设置是否使用系统语言，设置为false时默认走messages.properties</span>
    <span class="token key atrule">fallback-to-system-locale</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置LocaleChangeInterceptor拦截器</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyWebConfigure</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 配置拦截器
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LocaleChangeInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocaleChangeInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      	<span class="token comment">// 修改语言的字段名</span>
        interceptor<span class="token punctuation">.</span><span class="token function">setParamName</span><span class="token punctuation">(</span><span class="token string">&quot;language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 生效的请求方法类型</span>
        interceptor<span class="token punctuation">.</span><span class="token function">setHttpMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置<code>LocaleResolver</code>解析器</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Locale解析器
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">LocaleResolver</span> <span class="token function">localeResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SessionLocaleResolver</span> slr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SessionLocaleResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        slr<span class="token punctuation">.</span><span class="token function">setDefaultLocale</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> slr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取Message</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">{</span>
  <span class="token comment">// Spring的MessageSource接口可以根据Locale获取Message；ApplicationContext实现了这个接口</span>
  <span class="token keyword">private</span> <span class="token class-name">MessageSource</span> messageSource<span class="token punctuation">;</span>
  
	<span class="token keyword">public</span> <span class="token class-name">MyService</span><span class="token punctuation">(</span><span class="token class-name">MessageSource</span> messageSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>messageSource <span class="token operator">=</span> messageSource<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**
  * 测试获取Message，实际使用时可以封装到工具类中，方便调用
  */</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessageI18N</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// LocaleContextHolder中保存有当前线程的Locale</span>
    <span class="token class-name">Locale</span> locale <span class="token operator">=</span> <span class="token class-name">LocaleContextHolder</span><span class="token punctuation">.</span><span class="token function">getLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> messageSource<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> args<span class="token punctuation">,</span> locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="语言包" tabindex="-1"><a class="header-anchor" href="#语言包" aria-hidden="true">#</a> 语言包</h2><p>在项目的源文件目录增加语言包目录，一般设置为<code>i18n/messages.properties</code>。增加语言时需要增加<code>messages_NewLanguage.properties</code>。</p><p>IDEA中可以将所有语言配置文件设置为一个资源包，这样编辑时可以同时修改，防止漏编辑。需要安装插件<code>Resource Bundle Editor</code></p><p>IDEA中设置完资源包后路径如下：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/02/24/20230224112205.png" alt="image-20230222193837733"></p><p>编辑时打开任意一个<code>.properties</code>文件，就可以选择编辑资源包，此时右侧会显示出当前条目在所有语言包中的设置：</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/02/24/20230224112212.png" alt="image-20230222194011412"></p>`,11),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","i18n-start.html.vue"]]);export{r as default};
