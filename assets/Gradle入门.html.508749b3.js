import{_ as n,o as s,c as a,d as p}from"./app.f4f3479c.js";const e={},l={class:"language-groovy ext-groovy line-numbers-mode"},t=p(`<pre class="language-groovy"><code><span class="token comment">//println (&quot;Hello Grovvy&quot;);</span>

<span class="token comment">//grovvy \u53EF\u4EE5\u7701\u7565\u884C\u5C3E\u5206\u53F7\u548C\u62EC\u53F7</span>
<span class="token comment">//println &quot;Hello Grovvy&quot;</span>

<span class="token comment">// grovvy\u4F7F\u7528def\u5B9A\u4E49\u53D8\u91CF,\u662F\u5F31\u7C7B\u578B\u7684</span>
<span class="token comment">//def i = 100</span>
<span class="token comment">//println i</span>

<span class="token comment">//\u5B9A\u4E49\u96C6\u5408\u7C7B\u578B</span>
<span class="token comment">//def list = [&#39;a&#39;, &#39;b&#39;]</span>
<span class="token comment">//\u5F80list\u4E2D\u6DFB\u52A0\u5143\u7D20</span>
<span class="token comment">//list &lt;&lt; &#39;c&#39;</span>
<span class="token comment">//\u53D6\u7B2C\u4E09\u4E2A\u5143\u7D20</span>
<span class="token comment">//println list.get(2)</span>

<span class="token comment">//\u5B9A\u4E49map</span>
<span class="token comment">//def map = [&#39;k1&#39;:&#39;v1&#39;, &#39;k2&#39;:&#39;v2&#39;]</span>
<span class="token comment">// \u6DFB\u52A0,\u4FEE\u6539map\u503C</span>
<span class="token comment">//map.k3 = &#39;v3&#39;</span>
<span class="token comment">//\u83B7\u53D6map\u503C</span>
<span class="token comment">//println map.k3</span>

<span class="token comment">// grovvy\u4E2D\u7684\u95ED\u5305</span>
<span class="token comment">// \u95ED\u5305\u5C31\u662F\u4E00\u4E2A\u4EE3\u7801\u5757,\u5728gradle\u4E2D\u95ED\u5305\u5F53\u4F5C\u53C2\u6570\u4F7F\u7528</span>
<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u95ED\u5305</span>
<span class="token keyword">def</span> b1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    println <span class="token string gstring">&quot;hello b1&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5,\u65B9\u6CD5\u4E2D\u9700\u8981\u95ED\u5305\u7C7B\u578B\u7684\u53C2\u6570</span>
<span class="token keyword">def</span> method1 <span class="token punctuation">(</span>Closure closure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8C03\u7528method1</span>
<span class="token comment">//method1 (b1)</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u5E26\u53C2\u95ED\u5305</span>
<span class="token keyword">def</span> b2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    v <span class="token operator">-&gt;</span>
        println <span class="token string gstring">&quot;hello <span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>v<span class="token punctuation">}</span></span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5,\u65B9\u6CD5\u4E2D\u4F20\u9012\u95ED\u5305\u4F7F\u7528\u7684\u53C2\u6570</span>
<span class="token keyword">def</span> method2 <span class="token punctuation">(</span>Closure closure<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">closure</span><span class="token punctuation">(</span><span class="token string gstring">&quot;world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">method2</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div>`,2),c=[t];function o(r,m){return s(),a("div",l,c)}var i=n(e,[["render",o],["__file","Gradle\u5165\u95E8.html.vue"]]);export{i as default};
