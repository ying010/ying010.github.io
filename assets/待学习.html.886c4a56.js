import{_ as r,r as i,o as t,c as l,a as n,b as c,F as p,d as a,e}from"./app.f4f3479c.js";const o={},b=a('<h1 id="\u4E00\u3001\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u96C6\u5408" aria-hidden="true">#</a> \u4E00\u3001\u96C6\u5408</h1><h2 id="_1-1-map" tabindex="-1"><a class="header-anchor" href="#_1-1-map" aria-hidden="true">#</a> 1.1 Map</h2><p>ConcurrentHashMap</p><h1 id="\u4E8C\u3001\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u8BBE\u8BA1\u6A21\u5F0F</h1><h2 id="_2-1-\u6A21\u677F\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6A21\u677F\u6A21\u5F0F" aria-hidden="true">#</a> 2.1 \u6A21\u677F\u6A21\u5F0F</h2>',5),d=e("[^\u5F15\u7528]: \u5F15\u7528\u81EA\u5FAE\u4FE1\u5C0F\u5085\u54E5 "),h={href:"https://mp.weixin.qq.com/s/fiWX6abSCiUKHAUa-HKg4A",target:"_blank",rel:"noopener noreferrer"},u=e("bugstack\u866B\u6D1E\u6808"),m=a(`<p><img src="http://www.plantuml.com/plantuml/png/SoWkIImgAStDuN9AJSnpIKtBpCiioSpFKx3HqrC02Rab9fVa5rLQAJpPD_V5rcbSN4Y22ZQwkWgE1PaXgSKb2a0LU_S_dxA2Yoiv9x6uM07Dl6ek1Ls59A0OKA5_KbPgSWbNBLmfmaYGEgX2X6RVn0AWBY1f4rnIb9cNheDck1rGZxP2Uce9I5W3eaOJRWzOiYWrFREu9BK8LQC6TlD0UiloCrFWBeHxiXfiM0cG6O_aQ0qa3GwfUId0u0G0" alt="\u5355\u4F8B\u6A21\u5F0F(\u901A\u7528\u7C7B\u56FE)"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;details&gt;
@startuml
Title Spring \u6784\u5EFA
BeanDefinition &lt;.. BeanFactory: \u4F9D\u8D56
BeanFactory &lt;-- ApiTest : \u4F7F\u7528
class BeanDefinition {
 - bean : Object
}
class BeanFactory {
  - beanDefinitionMap : Map\\&lt;String, BeanDefinition&gt;
  + getBean(String) : Object
  + registerBeanDefinition(String, BeanDefinition) : void
}
class ApiTest {
  + test_BeanFactory() : void
}
@enduml
&lt;/details&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h1 id="\u4E09\u3001\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u53CD\u5C04" aria-hidden="true">#</a> \u4E09\u3001\u53CD\u5C04</h1><h2 id="_3-1-cglib" tabindex="-1"><a class="header-anchor" href="#_3-1-cglib" aria-hidden="true">#</a> 3.1 Cglib</h2>`,4);function _(f,g){const s=i("ExternalLinkIcon");return t(),l(p,null,[b,n("p",null,[d,n("a",h,[u,c(s)])]),m],64)}var B=r(o,[["render",_],["__file","\u5F85\u5B66\u4E60.html.vue"]]);export{B as default};
