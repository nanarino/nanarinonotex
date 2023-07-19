# 安装elixir环境

## Windows

请先确保电脑安装了包管理器choco，参考[安装dart SDK for windows](/dart/#windows)的安装

需要以管理员身份运行命令

```powershell
choco install elixir -y
```

完成后还需要手动设置环境变量

```powershell
$elixirPath = "C:\ProgramData\chocolatey\lib\Elixir\tools\bin"
$erlangPath = "C:\Program Files\Erlang OTP\bin"
$envPath = [System.Environment]::GetEnvironmentVariable("PATH", "Machine")
$envPath += ";$elixirPath;$erlangPath"
[System.Environment]::SetEnvironmentVariable("PATH", $envPath, "Machine")
```


## 验证安装成功

使用命令直接显示版本

```bash
C:\Users\Administrator> elixir -v
Erlang/OTP 25 [erts-13.2.2.1] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [jit:ns]

Elixir 1.14.4 (compiled with Erlang/OTP 25)
```


## 运行helloworld

创建helloworld.exs文件，在vscode中利用codeRunner插件运行

```elixir
IO.puts("Hello world")
```

vscode会自己提示需要安装的插件
