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


## 运行helloworld脚本

创建helloworld.exs文件，在vscode中利用codeRunner插件运行 或 `elixir ./helloworld.exs`，

```elixir
IO.puts("Hello world")
```

vscode会自己提示需要安装的插件，但在中国大陆需要配置git代理
