import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CBOo_3l2.js";const E=JSON.parse('{"title":"基本语法","description":"","frontmatter":{},"headers":[],"relativePath":"elixir/basic.md","filePath":"elixir/basic.md","lastUpdated":1714761656000}'),e={name:"elixir/basic.md"},l=t(`<h1 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h1><p>笔记也只是记录一个大概，详细还是得看官方文档</p><ul><li><a href="https://hexdocs.pm/elixir/basic-types.html" target="_blank" rel="noreferrer">docs</a></li><li><a href="https://elixirschool.com/zh-hans/lessons/basics/basics" target="_blank" rel="noreferrer">elixirschool</a></li></ul><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>同 python</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># hello</span></span></code></pre></div><h2 id="定义赋值-重新分配" tabindex="-1">定义赋值/重新分配 <a class="header-anchor" href="#定义赋值-重新分配" aria-label="Permalink to &quot;定义赋值/重新分配&quot;">​</a></h2><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {x, ^x} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span></code></pre></div><p><code>^</code> 匹配已被赋值的常量名</p><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><p>运算符与 JavaScript 的一样 特别的:</p><p><code>===</code> 才能区分浮点和整数</p><p><code>&lt;&gt;</code> 字符串拼接</p><p><code>and</code> <code>or</code> <code>not</code> 用于布尔值（第一个参数）</p><h2 id="模板字符串" tabindex="-1">模板字符串 <a class="header-anchor" href="#模板字符串" aria-label="Permalink to &quot;模板字符串&quot;">​</a></h2><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#{name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h2 id="流程控制" tabindex="-1">流程控制 <a class="header-anchor" href="#流程控制" aria-label="Permalink to &quot;流程控制&quot;">​</a></h2><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valid?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Valid string!&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Invalid string.&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><code>unless</code> 相当于其他语言 if not</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:ok</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Uh oh!&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  _</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Catch all&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><code>_</code> 用来兜底</p><p><code>-&gt;</code> 前支持 <code>when</code> 条件</p><p>嵌套时可能可以用 <code>with</code> 优化</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cond</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Incorrect&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Catch all&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p><code>cond</code> 相当于其他语言的 <code>match</code></p><h2 id="缩进" tabindex="-1">缩进 <a class="header-anchor" href="#缩进" aria-label="Permalink to &quot;缩进&quot;">​</a></h2><p>官方推荐 2 空格缩进，如果</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fun</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  :todo</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>中 缩进的 <code>:todo</code> 只有一行 那么也可以简写为</p><div class="language-elixir vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">elixir</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fun</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> do:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :todo</span></span></code></pre></div><h2 id="异常" tabindex="-1">异常 <a class="header-anchor" href="#异常" aria-label="Permalink to &quot;异常&quot;">​</a></h2><p>抛出</p><p>捕获</p>`,33),n=[l];function h(p,k,d,r,o,c){return a(),i("div",null,n)}const y=s(e,[["render",h]]);export{E as __pageData,y as default};
