# 安装dart SDK

## Windows

以下powershell命令都以管理员身份运行

利用choco安装dart SDK for windows：
```powershell
choco install dart-sdk
```
更新SDK：
```powershell
choco upgrade dart-sdk
```

若没有包管理器choco 需要先安装

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




## MacOS

利用brew安装dart SDK for Mac：

```bash
brew tap dart-lang/dart
brew install dart
```
没有brew需要另外安装，这里略过


## 验证安装成功

首次安装完成会这样显示

```bash
C:\Users\Administrator>dart
  ╔════════════════════════════════════════════════════════════════════════╗
  ║ The Dart tool uses Google Analytics to report feature usage statistics ║
  ║ and to send basic crash reports. This data is used to help improve the ║
  ║ Dart platform and tools over time.                                     ║
  ║                                                                        ║
  ║ To disable reporting of analytics, run:                                ║
  ║                                                                        ║
  ║   dart --disable-analytics                                             ║
  ║                                                                        ║
  ╚════════════════════════════════════════════════════════════════════════╝
```

或者直接显示版本

```bash
C:\Users\Administrator>dart --version
Dart SDK version: 2.17.1 (stable) (Tue May 17 17:58:21 2022 +0000) on "windows_x64"
```

## 运行helloworld

创建helloworld.dart文件，在vscode中利用codeRunner插件运行

```dart
main(){
    print('helloworld');
}
```

vscode会自己提示需要安装的插件，以提供提示、格式化
