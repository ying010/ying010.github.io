import{_ as e,n as a,p as s,a0 as n}from"./framework-76e35361.js";const r={},o=n(`<h1 id="linux安装rocketmq实战" tabindex="-1"><a class="header-anchor" href="#linux安装rocketmq实战" aria-hidden="true">#</a> Linux安装RocketMQ实战</h1><h2 id="一、-docker简介" tabindex="-1"><a class="header-anchor" href="#一、-docker简介" aria-hidden="true">#</a> 一、 docker简介</h2><p>在Linux上使用Docker获取安装源、安装启动软件会更加简单，所以本次安装将以Docker安装RocketMQ为例。下面简单介绍下本次使用到的一些Docker命令，以便不熟悉Docker的小伙伴也可以快速上手。</p><details class="custom-container details"><summary>Docker命令</summary><ul><li>docker search &lt;Image名称&gt; 查询docker中可用镜像</li><li>docker pull &lt;Image名称&gt;[:版本] 拉取docker中的镜像，如果不设置版本就是拉取最新版本lastest</li><li>docker run [配置信息] &lt;Image名称&gt;[:版本] 启动镜像</li></ul></details><p>Docker详细教程如：Docker本身的安装和各命令的详细介绍可自行搜索Docker使用教程。</p><h2 id="二、安装rocketmq" tabindex="-1"><a class="header-anchor" href="#二、安装rocketmq" aria-hidden="true">#</a> 二、安装RocketMQ</h2><h3 id="_1-安装rocketmq" tabindex="-1"><a class="header-anchor" href="#_1-安装rocketmq" aria-hidden="true">#</a> 1. 安装RocketMQ</h3><h4 id="查找镜像" tabindex="-1"><a class="header-anchor" href="#查找镜像" aria-hidden="true">#</a> 查找镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search rocketmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180217.png" alt="image-20230417180216975"></p><h4 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a> 拉取镜像</h4><p>从上面查询到的镜像中选一个拉取，在这选择STARS比较高的<code>apache/rocketmq </code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull apache/rocketmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180454.png" alt="image-20230417180453936"></p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180535.png" alt="image-20230417180534685"></p><p>上面两个分别是拉取中和拉取结束时的截图。拉取结束后可以查看docker的image发现已经有rocketmq了，使用的版本是最新版latest。由于最新版不是固定版本，可能会有不确定问题，不建议生成环境选择这个选项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417180717.png" alt="image-20230417180716825"></p><h3 id="_2、启动rocketmq" tabindex="-1"><a class="header-anchor" href="#_2、启动rocketmq" aria-hidden="true">#</a> 2、启动RocketMQ</h3><h4 id="启动namesrv服务" tabindex="-1"><a class="header-anchor" href="#启动namesrv服务" aria-hidden="true">#</a> 启动namesrv服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9876</span>:9876 <span class="token parameter variable">-v</span> /tmp/data/rocketmq/namesrv/logs:/root/logs <span class="token parameter variable">-v</span> /tmp/data/rocketmq/namesrv/store:/root/store <span class="token parameter variable">--name</span> rmqnamesrv <span class="token parameter variable">-e</span> <span class="token string">&quot;MAX_POSSIBLE_HEAP=134217728&quot;</span> apache/rocketmq <span class="token function">sh</span> mqnamesrv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417193902.png" alt="image-20230417193901663"></p><p>启动成功后会返回id，后面也可以使用<code>docker ps</code>查看</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/17/20230417193959.png" alt="image-20230417193958367"></p><details class="custom-container details"><summary>docker run命令解析</summary><p>docker run用来启动docker中的镜像。</p><ul><li><p>语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token operator">&lt;</span>IMAGE<span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比上面的启动namesrv命令，其中</p><ul><li><code>[OPTIONS]</code>是容器启动的参数设置，本示例用到的设置如下：<code>-d -p 9876:9876 -v /tmp/data/rocketmq/namesrv/logs:/root/logs -v /tmp/data/rocketmq/namesrv/store:/root/store --name rmqnamesrv -e &quot;MAX_POSSIBLE_HEAP=134217728&quot;</code></li><li><code>&lt;IMAGE&gt;</code> 是启动容器所使用的镜像，本次示例使用<code>apache/rocketmq</code>镜像</li><li><code>[COMMAND]</code> 是容器启动后执行的命令，<code>sh mqnamesrv</code>命令是启动namesrv服务</li><li><code>[ARG...]</code>是<code>[COMMAND]</code>的参数，<code>sh mqnamesrv</code>命令没用使用参数</li></ul><p>那么这条命令的含义就是使<code>[OPTIONS]</code>的配置来启动<code>apache/rocketmq</code>镜像，并运行镜像的<code>sh mqnamesrv</code>命令以启动namesrv。</p></li><li><p>[OPTIONS]部分参数的说明</p><ul><li><strong>-d:</strong> 后台运行容器，不打印启动日志，终端不阻塞等待启动，启动完成后返回容器ID；</li><li><strong>-p:</strong> 指定端口映射，格式为：<strong>主机(宿主)端口:容器端口</strong>；如果需要访问容器中的端口必须设置此参数，通过<code>主机IP:主机端口</code>的方式访问容器映射端口。在本机端口冲突或暴露外部不想用默认端口的情况下可设置主机端口与容器端口不同，例如：启动mqnamesrv时设置<code>-p 9886:9876</code>,那么就是通过<code>主机IP:9886</code>访问mqnamesrv而不是默认的<code>主机IP:9876</code>。</li><li><strong>--name=&quot;nginx-lb&quot;:</strong> 为容器指定一个名称；</li><li><strong>-e username=&quot;ritchie&quot;:</strong> 设置环境变量；<code>&quot;MAX_POSSIBLE_HEAP=134217728&quot;</code>设置了最大堆内存为128M。</li><li>**-m 😗*设置容器使用内存最大值；</li><li><strong>--link=[]:</strong> 添加链接到另一个容器；</li><li><strong>--volume , -v:</strong> 绑定一个卷，将本地文件映射到docker中</li></ul><p>对上面的启动命令简单解释下就是：启动<code>apache/rocketmq</code>容器并执行<code>sh mqnamesrv</code>命令以启动mqnamesrv，mqnamesrv设置了最大堆内存128M,启动后命名为rmqnamesrv，后面的容器想要使用此容器时可以通过这个名字调用。启动后容器的<code>/root/logs</code>文件和<code>/root/store</code>文件分别对应本机的<code>/tmp/data/rocketmq/namesrv/logs</code>和<code>/tmp/data/rocketmq/namesrv/store</code>。使用<code>主机IP:9876</code>方式访问mqnamesrv服务</p></li></ul></details><h4 id="启动broker服务" tabindex="-1"><a class="header-anchor" href="#启动broker服务" aria-hidden="true">#</a> 启动Broker服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">10911</span>:10911 <span class="token parameter variable">-p</span> <span class="token number">10909</span>:10909 <span class="token parameter variable">-v</span>  /tmp/data/rocketmq/broker/logs:/root/logs <span class="token parameter variable">-v</span>  /tmp/data/rocketmq/broker/store:/root/store <span class="token parameter variable">-v</span>  /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf <span class="token parameter variable">--name</span> rmqbroker <span class="token parameter variable">--link</span> rmqnamesrv:namesrv <span class="token parameter variable">-e</span> <span class="token string">&quot;NAMESRV_ADDR=namesrv:9876&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;MAX_POSSIBLE_HEAP=134217728&quot;</span> apache/rocketmq <span class="token function">sh</span> mqbroker <span class="token parameter variable">-c</span> /opt/rocketmq/conf/broker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418113546.png" alt="image-20230418113545671"></p><p>如果<code>docker ps</code>查看到docker中已经启动了namesrv服务和broker服务，那么就可以发送、接收消息了。需要注意的是broker的启动会有一些配置需要更改，为了每次启动都使用相同的配置而不是每次都敲入配置，我们选择使用配置文件的方式，即上面<code>-c /opt/rocketmq/conf/broker.conf</code>指定的文件，由于此参数是容器执行的命令所以文件也是容器中的文件，我们是不方便修改的，需要找到它的本地映射文件也就是<code>-v /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf</code>设置的本地映射，所以我们在本机<code>/tmp/etc/rocketmq/broker</code>目录下建一个<code>broker.conf</code>配置文件并键入如下配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">brokerClusterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">DefaultCluster</span>
<span class="token key attr-name">brokerName</span> <span class="token punctuation">=</span> <span class="token value attr-value">broker-a</span>
<span class="token key attr-name">brokerId</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">deleteWhen</span> <span class="token punctuation">=</span> <span class="token value attr-value">04</span>
<span class="token key attr-name">fileReservedTime</span> <span class="token punctuation">=</span> <span class="token value attr-value">48</span>
<span class="token key attr-name">brokerRole</span> <span class="token punctuation">=</span> <span class="token value attr-value">ASYNC_MASTER</span>
<span class="token key attr-name">flushDiskType</span> <span class="token punctuation">=</span> <span class="token value attr-value">ASYNC_FLUSH</span>
<span class="token comment"># 设置是否允许自动创建Topic，如果设置为false在使用前需要先手动增加对应的Topic</span>
<span class="token key attr-name">autoCreateTopicEnable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># 如果是本地程序调用云主机 mq，这个需要设置成 云主机 IP</span>
<span class="token comment"># 如果Docker环境需要设置成宿主机IP</span>
<span class="token key attr-name">brokerIP1</span> <span class="token punctuation">=</span> <span class="token value attr-value">[docker宿主机IP]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>根据docker run语法可知，镜像名前面的配置是启动容器的配置是docker中的配置用来设置容器的配置和处理宿主机和容器间的映射可以访问到宿主机的文件，镜像名后面是容器本身的命令和命令的参数，只能访问容器内的文件。如果想要访问容器的文件或设置容器配置文件可以使用<code>-v 宿主机文件:容器文件</code>的方式映射到宿主机再操作。</p></div><p>启动了namesrv服务和Broker服务之后RocketMQ就可以算部署完成正常使用了。不过出于方便管理的角度还可以部署一个控制台以便在网页中查看和管理RocketMQ。</p><h3 id="_3、部署访问控制台" tabindex="-1"><a class="header-anchor" href="#_3、部署访问控制台" aria-hidden="true">#</a> 3、部署访问控制台</h3><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418151602.png" alt="image-20230418151601625"></p><h4 id="安装控制台" tabindex="-1"><a class="header-anchor" href="#安装控制台" aria-hidden="true">#</a> 安装控制台</h4><ul><li><p><code>docker search rocketmq-consle</code>查找可用的控制台镜像，并选择其中Stars较多的一个安装；</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418152614.png" alt="image-20230418152613745"></p></li><li><p><code>docker pull styletang/rocketmq-console-ng</code>拉取其中一个镜像</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418152727.png" alt="image-20230418152726264"></p></li><li><p><code>docker run -d -p {8180}:8080 -e &quot;JAVA_OPTS=-Drocketmq.config.namesrvAddr={docker宿主机ip}:{9876} -Drocketmq.config.isVIPChannel=false&quot; styletang/rocketmq-console-ng</code>启动控制台。上面<code>{}</code>括起来的部分是需要去除大括号并修改为自己的配置。</p><p><img src="https://raw.githubusercontent.com/ying010/pic-repo/master/img/2023/04/18/20230418154352.png" alt="image-20230418154351196"></p></li></ul><div class="custom-container warning"><p class="custom-container-title">端口映射</p><p>控制台默认使用8080访问，如果宿主机的8080端口已经被占用，或出于其他考虑可以将容器的8080映射为宿主机的其他端口，然后在浏览器输入<code>http://{宿主机IP}:{映射的端口}/</code>。</p></div><h2 id="三、都是坑" tabindex="-1"><a class="header-anchor" href="#三、都是坑" aria-hidden="true">#</a> 三、都是坑</h2><h3 id="_1、准备工作得做好" tabindex="-1"><a class="header-anchor" href="#_1、准备工作得做好" aria-hidden="true">#</a> 1、准备工作得做好</h3><p><code>docker run </code>的<code>-v</code>指令映射宿主文件和容器文件时，如果是映射文件夹，容器运行过程中往里加文件如：<code>-v /tmp/data/rocketmq/broker/logs:/root/logs -v /tmp/data/rocketmq/broker/store:/root/store</code>等，宿主机是不用提前创建文件的。但是如果映射的是容器启动就要用的<strong>文件</strong>如：<code>-v /tmp/etc/rocketmq/broker/broker.conf:/opt/rocketmq/conf/broker.conf</code>，那么这个文件必须提前在宿主机的相应位置建好并编辑好配置。否则自动映射时会将其映射为文件夹导致启动异常。</p>`,40),t=[o];function c(i,p){return a(),s("div",null,t)}const d=e(r,[["render",c],["__file","Linux安装RocketMQ.html.vue"]]);export{d as default};
