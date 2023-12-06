# 安装 Dart VM

其实不用单独装，Flutter SDK 里带了 Dart SDK，

如果只是需要一个全局 Dart VM ，则可以按照本内容按照

## Windows

先决条件 已经安装choco包管理器 参考[安装choco](/elixir/#choco)的安装

以下powershell命令都以管理员身份运行

利用choco安装dart SDK for windows：
```powershell
choco install dart-sdk
```
更新SDK：
```powershell
choco upgrade dart-sdk
```

## 验证安装成功

首次安装完成会这样显示

```powershell
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

```powershell
C:\Users\Administrator>dart --version
Dart SDK version: 2.17.1 (stable) (Tue May 17 17:58:21 2022 +0000) on "windows_x64"
```

## 运行helloworld脚本

创建helloworld.dart文件，在vscode中利用codeRunner插件运行 或 `dart ./helloworld.dart`，

```dart
main(){
    print('helloworld');
}
```

vscode会自己提示需要安装的插件，以提供提示、格式化
