import{_ as n,d as s}from"./app.f4f3479c.js";const e={},a=s(`<h1 id="redis\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#redis\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> redis\u57FA\u672C\u914D\u7F6E</h1><p>[TOC]</p><hr><h2 id="\u4E00\u3001redis\u8FDC\u7A0B\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001redis\u8FDC\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a> \u4E00\u3001redis\u8FDC\u7A0B\u8BBF\u95EE</h2><p>redis\u8FDC\u7A0B\u8BBF\u95EE\u9700\u8981\u4FEE\u6539<code>\${redis}/redis.conf</code>\u914D\u7F6E\u6587\u4EF6 \u914D\u7F6E\u6587\u4EF6\u7684<code>NETWORK</code>\u90E8\u5206\u89C4\u5B9A\u4E86\u7F51\u7EDC\u8FDE\u63A5\uFF0C</p><ul><li>\u5176\u4E2D<code>bind</code>\u8BBE\u7F6E\u4E86\u767D\u540D\u5355\u5217\u8868\uFF0C\u9ED8\u8BA4\u53EA\u6709\u672C\u5730\u53EF\u4EE5\u8BBF\u95EEredis\uFF0C\u5982\u679C\u9700\u8981\u5168\u90E8\u5916\u7F51\u53EF\u4EE5\u8BBF\u95EE\u53EF\u4EE5\u628A<code>bind 127.0.0.1</code>\u6CE8\u91CA\u6389\uFF1B\u5982\u679C\u9700\u8981\u6709\u9650\u7684\u4E00\u4E9BIP\u53EF\u4EE5\u8BBF\u95EEredis\uFF0C\u53EF\u4EE5\u8BBE\u7F6Ebind\u5217\u8868\uFF0C\u5982\uFF1A<code>bind 192.168.1.100 10.0.0.1</code></li><li><code>protected-mode</code>\u8BBE\u7F6E\u4E86\u4FDD\u62A4\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u5F00\u542F\u4FDD\u62A4\u6A21\u5F0F\u4E0D\u5141\u8BB8\u767D\u540D\u5355\u4E4B\u5916\u7684IP\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u5173\u6389\u4FDD\u62A4\u6A21\u5F0F\u628A<code>protected-mode</code>\u8BBE\u4E3A<code>no</code></li><li><code>port</code>\u8BBE\u7F6E\u4E86\u7AEF\u53E3\u53F7</li></ul><p>\u4E0B\u8FB9\u7ED9\u51FA\u4E86\u914D\u7F6E\u6587\u4EF6\u7684\u90E8\u5206\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">################################## NETWORK #####################################</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="\u4E8C\u3001\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u4E8C\u3001\u5F00\u673A\u81EA\u542F\u52A8</h2><h3 id="_1-\u5F00\u542F\u5B88\u62A4\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-\u5F00\u542F\u5B88\u62A4\u7EBF\u7A0B" aria-hidden="true">#</a> 1. \u5F00\u542F\u5B88\u62A4\u7EBF\u7A0B</h3><p>\u5141\u8BB8redis\u540E\u53F0\u8FD0\u884C\uFF0C\u53EF\u4EE5\u4FEE\u6539<code>redis.conf</code>\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C06<code>daemonize</code>\u8BBE\u7F6E\u4E3A<code>yes</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">################################# GENERAL #####################################</span>

<span class="token comment"># By default Redis does not run as a daemon. Use &#39;yes&#39; if you need it.</span>
<span class="token comment"># Note that Redis will write a pid file in /var/run/redis.pid when daemonized.</span>
daemonize <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-\u7F16\u8F91\u81EA\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u8F91\u81EA\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> 2. \u7F16\u8F91\u81EA\u542F\u52A8\u811A\u672C</h3><ul><li><p>\u5C06<code>\${redis}/utils/redis_init_script</code>\u6587\u4EF6\u590D\u5236\u5230<code>/etc/init.d/redis</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> /root/redis-5.0.4/utils/redis_init_script /etc/init.d/redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6,\u8BBE\u7F6E\u7AEF\u53E3\u53F7\u4E0E\u5B89\u88C5\u8DEF\u5F84</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">REDISPORT</span><span class="token operator">=</span><span class="token number">6379</span>
<span class="token assign-left variable">EXEC</span><span class="token operator">=</span>/root/redis-5.0.4/src/redis-server
<span class="token assign-left variable">CLIEXEC</span><span class="token operator">=</span>/root/redis-5.0.4/src/redis-cli

<span class="token assign-left variable">PIDFILE</span><span class="token operator">=</span>/var/run/redis_<span class="token variable">\${REDISPORT}</span>.pid
<span class="token assign-left variable">CONF</span><span class="token operator">=</span><span class="token string">&quot;/etc/redis.conf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u6DFB\u52A0redis\u542F\u52A8\u811A\u672C\u6743\u9650\u4E3A\u53EF\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x /etc/init.d/redis      
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chkconfig --add redis
chkconfig redis on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-\u9A8C\u8BC1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u9A8C\u8BC1\u914D\u7F6E" aria-hidden="true">#</a> 3.\u9A8C\u8BC1\u914D\u7F6E</h3><p>\u91CD\u542F\u7CFB\u7EDF\uFF0C\u5982\u679Credis\u5DF2\u7ECF\u542F\u52A8\u8BF4\u660E\u8BBE\u7F6E\u6210\u529F</p></li></ul>`,14);function i(r,c){return a}var o=n(e,[["render",i],["__file","\u521D\u59CB\u5316\u914D\u7F6E.html.vue"]]);export{o as default};
