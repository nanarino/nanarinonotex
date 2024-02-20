# 安装 ErlangVM 和 Elixir

## Windows

### choco

Windows请先确保电脑安装了包管理器choco 如果没有 按照以下命令安装

```powershell
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

如果报错：`因为在此系统上禁止运行脚本`，可以查看是否是没有运行ps1权限

```powershell
get-executionpolicy
```

输出若为默认值：`Restricted` 可以使用以下命令：

```powershell
set-ExecutionPolicy RemoteSigned
```

届时删除`C:\ProgramData\chocolatey`后再次安装即可

### 安装和设置环境变量

需要以管理员身份运行命令

```powershell
choco install elixir -y
```

完成后还需要**手动**设置环境变量

```powershell
$elixirPath = "C:\ProgramData\chocolatey\lib\Elixir\tools\bin"
$erlangPath = "C:\Program Files\Erlang OTP\bin"
$envPath = [System.Environment]::GetEnvironmentVariable("PATH", "Machine")
$envPath += ";$elixirPath;$erlangPath"
[System.Environment]::SetEnvironmentVariable("PATH", $envPath, "Machine")
```


## 验证安装成功

使用命令直接显示版本

```powershell
C:\Users\Administrator> elixir -v
Erlang/OTP 25 [erts-13.2.2.1] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [jit:ns]

Elixir 1.14.4 (compiled with Erlang/OTP 25)
```

在cmd中使用 `iex` 可以进入交互式环境，powershell里不可以进，因为iex是powershell的内置命令。

在iex中使用 `clear` 回车可以清空输入


## 运行helloworld脚本

创建helloworld.exs文件，在vscode中利用codeRunner插件运行 或 `elixir ./helloworld.exs`，

```elixir
"Hello world!" |> IO.puts
```

vscode会自己提示需要安装的插件，但在中国大陆需要配置git代理



## 使用mix创建项目


### 初始化空项目

使用 `mix new MyProject` 命令创建新的项目，里面有一些样板代码

进入生成的项目根目录后 使用 `iex -S mix` 进入交互式环境，且自动导入了项目的主函数（java项目是一个主类，elixir的项目是一个函数）

在iex中使用 `recompile` 回车可以重新编译项目


### 依赖管理

使用hex来管理依赖包

使用 `mix local.hex --force` 命令安装或尝试升级它

使用 `mix compile` 编译项目

使用 `mix deps.get` 安装项目依赖

使用 `mix deps.compile` 编译项目依赖


### 使用目标框架的脚手架创建空项目

hex安装好是前提。

使用 `mix archive.install hex Framework_new` 安装需要的脚手架

使用 `mix Framework.new MyProject` 命令创建新的目标框架项目，里面有目标框架的样板结构和代码

### 设置镜像

默认的hex的S3服务器在中国大陆稍逊

```powershell
mix hex.repo set hexpm --url https://hexpm.upyun.com
```
