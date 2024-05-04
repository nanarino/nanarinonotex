import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.CBOo_3l2.js";const y=JSON.parse('{"title":"安装 JDK 和 Gradle","description":"","frontmatter":{},"headers":[],"relativePath":"kotlin/index.md","filePath":"kotlin/index.md","lastUpdated":1714722160000}'),n={name:"kotlin/index.md"},h=l(`<h1 id="安装-jdk-和-gradle" tabindex="-1">安装 JDK 和 Gradle <a class="header-anchor" href="#安装-jdk-和-gradle" aria-label="Permalink to &quot;安装 JDK 和 Gradle&quot;">​</a></h1><p>其实不用自己装，直接使用 IntelliJ IDEA 来创建项目即可</p><p>这里只是为了全局的命令行操作和 kotlinc，它能让项目或单独文件在 vscode 运行</p><h2 id="jdk" tabindex="-1">JDK <a class="header-anchor" href="#jdk" aria-label="Permalink to &quot;JDK&quot;">​</a></h2><p>安装最高 LTS 版本即可。有多种发行可选。</p><ul><li><a href="https://www.azul.com/downloads/?package=jdk#zulu" target="_blank" rel="noreferrer">Azul Zule</a></li><li><a href="https://www.oracle.com/cn/java/technologies/downloads/#graalvmjava21" target="_blank" rel="noreferrer">Oracle GraalVM</a></li></ul><h3 id="验证安装成功" tabindex="-1">验证安装成功 <a class="header-anchor" href="#验证安装成功" aria-label="Permalink to &quot;验证安装成功&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">openjdk </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LTS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OpenJDK Runtime Environment Zulu21.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CA (build </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LTS)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OpenJDK </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bit Server VM Zulu21.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CA (build </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mixed mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sharing)</span></span></code></pre></div><h2 id="gradle" tabindex="-1">Gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;Gradle&quot;">​</a></h2><p><a href="https://gradle.org/install/" target="_blank" rel="noreferrer">下载 Gradle</a> 需要先安装 JDK8+</p><p>选择同 JDK 版本符合它最低要求的最高版本，下载后按指示解压和<strong>手动</strong>设置环境变量</p><h3 id="验证安装成功-1" tabindex="-1">验证安装成功 <a class="header-anchor" href="#验证安装成功-1" aria-label="Permalink to &quot;验证安装成功&quot;">​</a></h3><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gradle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Welcome to Gradle </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Here are the highlights of this release:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Support </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> running on Java </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Faster first use with Kotlin DSL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Improved error and warning messages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">For</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> more details see https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">docs.gradle.org</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">release</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">notes.html</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Gradle </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Build time:   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">08</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">57</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UTC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Revision:     28aca86a7180baa17117e0e5ba01d8ea9feca598</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Kotlin:       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Groovy:       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Ant:          Apache Ant(TM) version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> compiled on January </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2023</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">JVM:          </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Azul Systems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Inc. </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LTS)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OS:           Windows </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> amd64</span></span></code></pre></div><p>输出的 Gradle 8.5 匹配的 kotlin 版本为 1.9.20</p><h2 id="kotlinc" tabindex="-1">Kotlinc <a class="header-anchor" href="#kotlinc" aria-label="Permalink to &quot;Kotlinc&quot;">​</a></h2><p>不同于 gradle 项目里的 <code>src/helloworld.kt</code> 会编译成 <code>helloworld.jar</code> 包，</p><p>kt/kts 文件在项目以外是可以直接运行的，但这需要借助单独安装 JDK 和<a href="https://github.com/JetBrains/kotlin/releases" target="_blank" rel="noreferrer">kotlinc</a></p><p>最好和 Gradle 里的版本一致。下载解压后<strong>手动</strong>设置环境变量即可</p><h3 id="验证安装成功-2" tabindex="-1">验证安装成功 <a class="header-anchor" href="#验证安装成功-2" aria-label="Permalink to &quot;验证安装成功&quot;">​</a></h3><p>进入交互式环境</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kotlin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Welcome to Kotlin version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (JRE </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LTS)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type :help </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> help</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :quit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> quit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;&gt;</span></span></code></pre></div><p>和 python 一样使用<code>^Z</code>退出</p><h3 id="运行-helloworld-脚本" tabindex="-1">运行 helloworld 脚本 <a class="header-anchor" href="#运行-helloworld-脚本" aria-label="Permalink to &quot;运行 helloworld 脚本&quot;">​</a></h3><p>创建 helloworld.kts 文件，在 vscode 中利用 codeRunner 插件运行 或命令行运行以下命令之一：</p><ul><li><code>kotlin ./helloworld.kts</code></li><li><code>kotlin -script ./helloworld.kts</code></li></ul><p>这有点类似于 <code>ts-node</code> 单独运行 ts 文件，脚本不需要 main 方法以及文件名称相同的 class</p><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// helloworld.kts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>vscode 会自己提示需要安装的插件，但在中国大陆需要配置 git 代理</p><h3 id="编译为-class-jar" tabindex="-1">编译为 class/jar <a class="header-anchor" href="#编译为-class-jar" aria-label="Permalink to &quot;编译为 class/jar&quot;">​</a></h3><p>创建 helloworld.kt 文件，命令行运行以下命令分别编译为 class/jar 并运行：</p><ul><li><code>kotlinc ./helloworld.kt -include-runtime -d ./ &amp;&amp; java HelloworldKt</code></li><li><code>kotlinc ./helloworld.kt -include-runtime -d helloworld.jar &amp;&amp; java -jar helloworld.jar</code></li></ul><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// helloworld.kt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>kt 相比 kts 文件相比要多一个 main 函数；</p><p>在 vscode 中利用 codeRunner 插件运行 kt 文件时默认是第二条命令（编译成 jar）；</p><p>第一条命令编译出的 class 文件名会变成驼峰+Kt 后缀；</p><p><code>-include-runtime</code> 是 kotlin 运行时，如果是 kotlin 包 给其他 kotlin 引入的 那么不需要；</p>`,36),t=[h];function k(p,e,r,d,E,o){return a(),i("div",null,t)}const c=s(n,[["render",k]]);export{y as __pageData,c as default};
