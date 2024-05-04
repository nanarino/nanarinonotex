import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CBOo_3l2.js";const g=JSON.parse('{"title":"安装 Dart VM","description":"","frontmatter":{},"headers":[],"relativePath":"dart/index.md","filePath":"dart/index.md","lastUpdated":1714722160000}'),n={name:"dart/index.md"},l=t(`<h1 id="安装-dart-vm" tabindex="-1">安装 Dart VM <a class="header-anchor" href="#安装-dart-vm" aria-label="Permalink to &quot;安装 Dart VM&quot;">​</a></h1><p>其实不用单独装，Flutter SDK 里带了 Dart SDK，</p><p>如果只是需要一个全局 Dart VM ，则可以按照本内容按照</p><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><p>先决条件 已经安装 choco 包管理器 参考<a href="/nanarinonotex/elixir/#choco">安装 choco</a>的安装</p><p>以下 powershell 命令都以管理员身份运行</p><p>利用 choco 安装 dart SDK for windows：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">choco install dart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sdk</span></span></code></pre></div><p>更新 SDK：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">choco upgrade dart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sdk</span></span></code></pre></div><h2 id="验证安装成功" tabindex="-1">验证安装成功 <a class="header-anchor" href="#验证安装成功" aria-label="Permalink to &quot;验证安装成功&quot;">​</a></h2><p>首次安装完成会这样显示</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dart</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ╔════════════════════════════════════════════════════════════════════════╗</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║ The Dart tool uses Google Analytics to report feature usage statistics ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║ and to send basic crash reports. This </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is used to help improve the ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║ Dart platform and tools over time.                                     ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║                                                                        ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║ To disable reporting of analytics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> run:                                ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║                                                                        ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║   dart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">disable-analytics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                             ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ║                                                                        ║</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ╚════════════════════════════════════════════════════════════════════════╝</span></span></code></pre></div><p>或者直接显示版本</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dart </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Dart SDK version: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (stable) (Tue May </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">58</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2022</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> +0000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) on </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;windows_x64&quot;</span></span></code></pre></div><h2 id="运行-helloworld-脚本" tabindex="-1">运行 helloworld 脚本 <a class="header-anchor" href="#运行-helloworld-脚本" aria-label="Permalink to &quot;运行 helloworld 脚本&quot;">​</a></h2><p>创建 helloworld.dart 文件，在 vscode 中利用 codeRunner 插件运行 或 <code>dart ./helloworld.dart</code>，</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;helloworld&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>vscode 会自己提示需要安装的插件，以提供提示、格式化</p>`,19),e=[l];function h(p,k,r,d,o,E){return a(),i("div",null,e)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};
