import{_ as e,n as i,p as n,a0 as s}from"./framework-76e35361.js";const t={},r=s(`<p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/12/27/20231227102708.awebp" alt="image.png"></p><p>比如想把slf4j，适配/转换到log4j2。按照图上的路径，只需要引用<strong>log4j-slf4j-impl</strong>即可。</p><p>如果想把jcl，适配/转换到slf4j，只需要删除<strong>jcl</strong>包，然后引用<strong>jcl-over-slf4j</strong>即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SLF4J: Failed to load class &quot;org.slf4j.impl.StaticLoggerBinder&quot;.
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只引入了<code>slf4j-api</code>，没有引入日志实现。<code>slf4j-api</code>只是日志门面，不能单独工作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SLF4J: No SLF4J providers were found.
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See https://www.slf4j.org/codes.html#noProviders for further details.
SLF4J: Class path contains SLF4J bindings targeting slf4j-api versions 1.7.x or earlier.
SLF4J: Ignoring binding found at [jar:file:/C:/prod/james-server-spring-app-3.7.2/lib/log4j-slf4j-impl-2.17.1.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: See https://www.slf4j.org/codes.html#ignoredBindings for an explanation.
https://james.apache.org/server/monitor-logging.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SLF4J 没有找到针对 SLF4J 2.0.x 的提供程序，但找到针对 SLF4J 1.7 或更早版本的绑定。</p>`,7),l=[r];function o(a,d){return i(),n("div",null,l)}const g=e(t,[["render",o],["__file","日志冲突.html.vue"]]);export{g as default};
