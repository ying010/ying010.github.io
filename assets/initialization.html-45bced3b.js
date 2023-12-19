import{_ as e,n,p as s,a0 as i}from"./framework-76e35361.js";const a={},d=i(`<h1 id="redis基本配置" tabindex="-1"><a class="header-anchor" href="#redis基本配置" aria-hidden="true">#</a> redis基本配置</h1><hr><h2 id="一、redis远程访问" tabindex="-1"><a class="header-anchor" href="#一、redis远程访问" aria-hidden="true">#</a> 一、redis远程访问</h2><p>redis远程访问需要修改<code>\${redis}/redis.conf</code>配置文件 配置文件的<code>NETWORK</code>部分规定了网络连接，</p><ul><li>其中<code>bind</code>设置了白名单列表，默认只有本地可以访问redis，如果需要全部外网可以访问可以把<code>bind 127.0.0.1</code>注释掉；如果需要有限的一些IP可以访问redis，可以设置bind列表，如：<code>bind 192.168.1.100 10.0.0.1</code></li><li><code>protected-mode</code>设置了保护模式，默认开启保护模式不允许白名单之外的IP访问，可以关掉保护模式把<code>protected-mode</code>设为<code>no</code></li><li><code>port</code>设置了端口号</li></ul><p>下边给出了配置文件的部分内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">################################## NETWORK #####################################</span>

<span class="token comment"># By default, if no &quot;bind&quot; configuration directive is specified, Redis listens</span>
<span class="token comment"># for connections from all the network interfaces available on the server.</span>
<span class="token comment"># It is possible to listen to just one or multiple selected interfaces using</span>
<span class="token comment"># the &quot;bind&quot; configuration directive, followed by one or more IP addresses.</span>
<span class="token comment">#</span>
<span class="token comment"># Examples:</span>
<span class="token comment">#</span>
<span class="token comment"># bind 192.168.1.100 10.0.0.1</span>
<span class="token comment"># bind 127.0.0.1 ::1</span>
<span class="token comment">#</span>
<span class="token comment"># ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the</span>
<span class="token comment"># internet, binding to all the interfaces is dangerous and will expose the</span>
<span class="token comment"># instance to everybody on the internet. So by default we uncomment the</span>
<span class="token comment"># following bind directive, that will force Redis to listen only into</span>
<span class="token comment"># the IPv4 loopback interface address (this means Redis will be able to</span>
<span class="token comment"># accept connections only from clients running into the same computer it</span>
<span class="token comment"># is running).</span>
<span class="token comment">#</span>
<span class="token comment"># IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES</span>
<span class="token comment"># JUST COMMENT THE FOLLOWING LINE.</span>
<span class="token comment"># ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span>
<span class="token comment">#bind 127.0.0.1</span>

<span class="token comment"># Protected mode is a layer of security protection, in order to avoid that</span>
<span class="token comment"># Redis instances left open on the internet are accessed and exploited.</span>
<span class="token comment">#</span>
<span class="token comment"># When protected mode is on and if:</span>
<span class="token comment">#</span>
<span class="token comment"># 1) The server is not binding explicitly to a set of addresses using the</span>
<span class="token comment">#    &quot;bind&quot; directive.</span>
<span class="token comment"># 2) No password is configured.</span>
<span class="token comment">#</span>
<span class="token comment"># The server only accepts connections from clients connecting from the</span>
<span class="token comment"># IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain</span>
<span class="token comment"># sockets.</span>
<span class="token comment">#</span>
<span class="token comment"># By default protected mode is enabled. You should disable it only if</span>
<span class="token comment"># you are sure you want clients from other hosts to connect to Redis</span>
<span class="token comment"># even if no authentication is configured, nor a specific set of interfaces</span>
<span class="token comment"># are explicitly listed using the &quot;bind&quot; directive.</span>
protected-mode no

<span class="token comment"># Accept connections on the specified port, default is 6379 (IANA #815344).</span>
<span class="token comment"># If port 0 is specified Redis will not listen on a TCP socket.</span>
port <span class="token number">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、开机自启动" tabindex="-1"><a class="header-anchor" href="#二、开机自启动" aria-hidden="true">#</a> 二、开机自启动</h2><h3 id="_1-开启守护线程" tabindex="-1"><a class="header-anchor" href="#_1-开启守护线程" aria-hidden="true">#</a> 1. 开启守护线程</h3><p>允许redis后台运行，可以修改<code>redis.conf</code>配置文件，将<code>daemonize</code>设置为<code>yes</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">################################# GENERAL #####################################</span>

<span class="token comment"># By default Redis does not run as a daemon. Use &#39;yes&#39; if you need it.</span>
<span class="token comment"># Note that Redis will write a pid file in /var/run/redis.pid when daemonized.</span>
daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-编辑自启动脚本" tabindex="-1"><a class="header-anchor" href="#_2-编辑自启动脚本" aria-hidden="true">#</a> 2. 编辑自启动脚本</h3><ul><li><p>将<code>\${redis}/utils/redis_init_script</code>文件复制到<code>/etc/init.d/redis</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /root/redis-5.0.4/utils/redis_init_script /etc/init.d/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>编辑配置文件,设置端口号与安装路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">REDISPORT</span><span class="token operator">=</span><span class="token number">6379</span>
<span class="token assign-left variable">EXEC</span><span class="token operator">=</span>/root/redis-5.0.4/src/redis-server
<span class="token assign-left variable">CLIEXEC</span><span class="token operator">=</span>/root/redis-5.0.4/src/redis-cli

<span class="token assign-left variable">PIDFILE</span><span class="token operator">=</span>/var/run/redis_<span class="token variable">\${REDISPORT}</span>.pid
<span class="token assign-left variable">CONF</span><span class="token operator">=</span><span class="token string">&quot;/etc/redis.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加redis启动脚本权限为可执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /etc/init.d/redis      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置开机自启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chkconfig --add redis
chkconfig redis on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-验证配置" tabindex="-1"><a class="header-anchor" href="#_3-验证配置" aria-hidden="true">#</a> 3.验证配置</h3><p>重启系统，如果redis已经启动说明设置成功</p></li></ul>`,13),c=[d];function t(l,o){return n(),s("div",null,c)}const m=e(a,[["render",t],["__file","initialization.html.vue"]]);export{m as default};
