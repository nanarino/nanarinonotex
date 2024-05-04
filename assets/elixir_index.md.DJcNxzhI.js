import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.CBOo_3l2.js";const g=JSON.parse('{"title":"安装 ErlangVM 和 Elixir","description":"","frontmatter":{},"headers":[],"relativePath":"elixir/index.md","filePath":"elixir/index.md","lastUpdated":1714642537000}'),l={name:"elixir/index.md"},h=e(`<h1 id="安装-erlangvm-和-elixir" tabindex="-1">安装 ErlangVM 和 Elixir <a class="header-anchor" href="#安装-erlangvm-和-elixir" aria-label="Permalink to &quot;安装 ErlangVM 和 Elixir&quot;">​</a></h1><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><h3 id="choco" tabindex="-1">choco <a class="header-anchor" href="#choco" aria-label="Permalink to &quot;choco&quot;">​</a></h3><p>Windows 请先确保电脑安装了包管理器 choco 如果没有 按照以下命令安装</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iwr https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chocolatey.org</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">install.ps1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UseBasicParsing </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> iex</span></span></code></pre></div><p>如果报错：<code>因为在此系统上禁止运行脚本</code>，可以查看是否是没有运行 ps1 权限</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get-executionpolicy</span></span></code></pre></div><p>输出若为默认值：<code>Restricted</code> 可以使用以下命令：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-ExecutionPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RemoteSigned</span></span></code></pre></div><p>届时删除<code>C:\\ProgramData\\chocolatey</code>后再次安装即可</p><h3 id="安装和设置环境变量" tabindex="-1">安装和设置环境变量 <a class="header-anchor" href="#安装和设置环境变量" aria-label="Permalink to &quot;安装和设置环境变量&quot;">​</a></h3><p>需要以管理员身份运行命令来安装：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">choco install elixir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span></span></code></pre></div><p>或者更新：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">choco upgrade elixir</span></span></code></pre></div><p>更新 elixir 时会连带更新 erlang</p><p>安装或更新后会提示：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NOTE:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The Elixir commands have been installed to:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">C:\\ProgramData\\chocolatey\\lib\\Elixir\\tools\\bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Please add this directory to your PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">then your shell session to access these commands:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">elixir</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">elixirc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mix</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iex</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">------------------------------------------------------------------------</span></span></code></pre></div><p>按照上面提示的路径<strong>手动</strong>设置环境变量，下面脚本顺带也设置了 erlang 的环境变量：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$elixirPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C:\\ProgramData\\chocolatey\\lib\\Elixir\\tools\\bin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$erlangPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;C:\\Program Files\\Erlang OTP\\bin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$envPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">System.Environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::GetEnvironmentVariable(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Machine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$envPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$elixirPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$erlangPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">System.Environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]::SetEnvironmentVariable(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $envPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Machine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="验证安装成功" tabindex="-1">验证安装成功 <a class="header-anchor" href="#验证安装成功" aria-label="Permalink to &quot;验证安装成功&quot;">​</a></h2><p>使用命令直接显示版本</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PS C:\\Users\\Administrator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> elixir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Erlang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OTP </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">erts-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">smp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async-threads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">jit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Elixir </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (compiled with Erlang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OTP </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>在 cmd 中使用 <code>iex</code> 可以进入交互式环境，powershell 里不可以进，因为 iex 是 powershell 的内置命令。</p><p>在 iex 中使用 <code>clear</code> 回车可以清空输入</p><h2 id="运行-helloworld-脚本" tabindex="-1">运行 helloworld 脚本 <a class="header-anchor" href="#运行-helloworld-脚本" aria-label="Permalink to &quot;运行 helloworld 脚本&quot;">​</a></h2><p>创建 helloworld.exs 文件，在 vscode 中利用 codeRunner 插件运行 或 <code>elixir ./helloworld.exs</code>，</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world!&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">puts</span></span></code></pre></div><p>vscode 会自己提示需要安装的插件，但在中国大陆需要配置 git 代理</p><h2 id="使用-mix-创建项目" tabindex="-1">使用 mix 创建项目 <a class="header-anchor" href="#使用-mix-创建项目" aria-label="Permalink to &quot;使用 mix 创建项目&quot;">​</a></h2><h3 id="初始化空项目" tabindex="-1">初始化空项目 <a class="header-anchor" href="#初始化空项目" aria-label="Permalink to &quot;初始化空项目&quot;">​</a></h3><p>使用 <code>mix new MyProject</code> 命令创建新的项目，里面有一些样板代码</p><p>进入生成的项目根目录后 使用 <code>iex -S mix</code> 进入交互式环境，且自动导入了项目的主函数（java 项目是一个主类，elixir 的项目是一个函数）</p><p>在 iex 中使用 <code>recompile</code> 回车可以重新编译项目</p><h3 id="依赖管理" tabindex="-1">依赖管理 <a class="header-anchor" href="#依赖管理" aria-label="Permalink to &quot;依赖管理&quot;">​</a></h3><p>使用 hex 来管理依赖包</p><p>使用 <code>mix local.hex --force</code> 命令安装或尝试升级它</p><p>使用 <code>mix compile</code> 编译项目</p><p>使用 <code>mix deps.get</code> 安装项目依赖</p><p>使用 <code>mix deps.compile</code> 编译项目依赖</p><p>使用 <code>mix format</code> 格式化项目代码</p><p>使用 <code>mix test</code> 运行所有_test 结尾的 .exs 文件里的测试用例</p><h3 id="使用目标框架的脚手架创建空项目" tabindex="-1">使用目标框架的脚手架创建空项目 <a class="header-anchor" href="#使用目标框架的脚手架创建空项目" aria-label="Permalink to &quot;使用目标框架的脚手架创建空项目&quot;">​</a></h3><p>hex 安装好是前提。</p><p>使用 <code>mix archive.install hex Framework_new</code> 安装需要的脚手架</p><p>使用 <code>mix Framework.new MyProject</code> 命令创建新的目标框架项目，里面有目标框架的样板结构和代码</p><h3 id="设置镜像" tabindex="-1">设置镜像 <a class="header-anchor" href="#设置镜像" aria-label="Permalink to &quot;设置镜像&quot;">​</a></h3><p>默认的 <a href="https://repo.hex.pm" target="_blank" rel="noreferrer">hex</a> 的 S3 服务器在中国大陆稍逊</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mix hex.repo set hexpm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">url https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hexpm.upyun.com</span></span></code></pre></div><h3 id="vscode" tabindex="-1">vscode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;vscode&quot;">​</a></h3><p>有的版本会不适用 ElixirLS（语言服务器）需要降低或提高版本：</p><blockquote><p>Erlang OTP 26.0 and 26.1 have critical bugs on Windows. Please make sure OTP 26.2 or greater is installed</p></blockquote>`,52),n=[h];function t(p,k,r,d,o,E){return a(),i("div",null,n)}const y=s(l,[["render",t]]);export{g as __pageData,y as default};
