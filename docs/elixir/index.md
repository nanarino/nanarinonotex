# 安装 ErlangVM 和 Elixir

## Windows

### choco

Windows 请先确保电脑安装了包管理器 choco 如果没有 按照以下命令安装

```powershell
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

如果报错：`因为在此系统上禁止运行脚本`，可以查看是否是没有运行 ps1 权限

```powershell
get-executionpolicy
```

输出若为默认值：`Restricted` 可以使用以下命令：

```powershell
set-ExecutionPolicy RemoteSigned
```

届时删除`C:\ProgramData\chocolatey`后再次安装即可

### 安装和设置环境变量

需要以管理员身份运行命令来安装：

```powershell
choco install elixir -y
```

或者更新：

```powershell
choco upgrade elixir
```

更新 elixir 时会连带更新 erlang

安装或更新后会提示：

```powershell
------------------------------------------------------------------------
NOTE:

The Elixir commands have been installed to:

C:\ProgramData\chocolatey\lib\Elixir\tools\bin

Please add this directory to your PATH,
then your shell session to access these commands:

elixir
elixirc
mix
iex
------------------------------------------------------------------------
```

erlang 的环境变量已经自动设置，但是 elixir 还需要按照上面提示的路径**手动**设置：

```powershell
$elixirPath = "C:\ProgramData\chocolatey\lib\Elixir\tools\bin"
$env:Path = [System.Environment]::GetEnvironmentVariable("PATH", "Machine")
$env:Path += ";$elixirPath"
[System.Environment]::SetEnvironmentVariable("PATH", $env:Path, "Machine")
```

后续你可以方便使用 choco 安裝 git vscode pgsql redis 等，

### 安裝包

安裝包安裝也是可以的：

- [erlang](https://erlang.org/download/)
- [elixir](https://github.com/elixir-lang/elixir/releases)

elixir 依然需要设置环境变量

## 验证安装成功

使用命令直接显示版本

```powershell
PS C:\Users\Administrator> elixir -v
Erlang/OTP 26 [erts-14.2.2] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [jit:ns]

Elixir 1.16.1 (compiled with Erlang/OTP 26)

```

在 cmd 中使用 `iex` 可以进入交互式环境，powershell 里不可以进，因为 iex 是 powershell 的内置命令。

在 iex 中使用 `clear` 回车可以清空输入

## 运行 helloworld 脚本

创建 helloworld.exs 文件，在 vscode 中利用 codeRunner 插件运行 或 `elixir ./helloworld.exs`，

```elixir
"Hello world!" |> IO.puts
```

vscode 会自己提示需要安装的插件，但在中国大陆需要配置 git 代理

## 使用 mix 创建项目

```powershell
mix --help
```

::: danger `size_object: matchstate term not allowed`
mix发布了使用不匹配的erlang/OTP版本所编译而导致
降低elixir到上一个中版本即可 比如1.17.x会报错
在GitHub上查询到1.16的最后一个版本后安装：
`choco install elixir --allow-downgrade -version 1.16.3`
:::

### 初始化空项目

使用 `mix new MyProject` 命令创建新的项目，里面有一些样板代码

进入生成的项目根目录后 使用 `iex -S mix` 进入交互式环境，且自动导入了项目的主函数（java 项目是一个主类，elixir 的项目是一个函数）

在 iex 中使用 `recompile` 回车可以重新编译项目

在 iex 中使用 `c` 可以编译某个 ex 文件

### 依赖管理

使用 hex 来管理依赖包

使用 `mix local.hex --force` 命令安装或尝试升级它

使用 `mix compile` 编译项目

使用 `mix deps.get` 安装项目依赖

使用 `mix deps.compile` 编译项目依赖

使用 `mix format` 格式化项目代码

使用 `mix test` 运行所有\_test 结尾的 .exs 文件里的测试用例

### 使用目标框架的脚手架创建空项目

hex 安装好是前提。

使用 `mix archive.install hex Framework_new` 安装需要的脚手架

使用 `mix Framework.new MyProject` 命令创建新的目标框架项目，里面有目标框架的样板结构和代码

### 设置镜像

默认的 [hex](https://repo.hex.pm) 的 S3 服务器在中国大陆稍逊

```powershell
mix hex.repo set hexpm --url https://hexpm.upyun.com
```

### vscode

有的版本会不适用 ElixirLS（语言服务器）需要降低或提高版本：

> Erlang OTP 26.0 and 26.1 have critical bugs on Windows. Please make sure OTP 26.2 or greater is installed
