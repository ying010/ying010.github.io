import{_ as n,d as e}from"./app.f4f3479c.js";const a={},s=e(`<h2 id="\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a> \u767B\u5F55</h2><p>\u6570\u636E\u5E93\u8868\uFF1A<code>chargerlink_erp.base_user</code></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>create table base_user
(
    id        int auto_increment comment &#39;ID&#39; primary key,
    username  varchar(16) collate utf8_bin not null comment &#39;\u767B\u5F55\u540D&#39;,
    password  varchar(60)                  null,
    nickname  varchar(64) collate utf8_bin null comment &#39;\u6635\u79F0&#39;,
    status    int default 0                not null comment &#39;\u72B6\u6001 0\uFF1A\u4F7F\u7528\uFF0C1\uFF1A\u7981\u7528&#39;,
    type      int default 0                not null comment &#39;\u8D26\u53F7\u7C7B\u578B 0:\u7CFB\u7EDF\u7BA1\u7406\u5458\uFF1B1\uFF1A\u5206\u4ED3\uFF0C2\uFF1A\u5546\u52A1\u4EBA\u5458&#39;,
    warehouse int(32)                      null comment &#39;\u6240\u5C5E\u5206\u4ED3\u4ED3\u5E93id \uFF1B\u82E5\u662F\u5546\u52A1\u4EBA\u5458\u9ED8\u8BA4\u4E3A1&#39;
)
    comment &#39;\u7528\u6237\u4FE1\u606F\u8868&#39; charset = utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8BBF\u95EE\u8DEF\u5F84\uFF1A <code>/erp/api/login</code></p><p>\u6D41\u7A0B\uFF1A</p>`,5);function r(l,c){return s}var i=n(a,[["render",r],["__file","\u6D41\u7A0B.html.vue"]]);export{i as default};
