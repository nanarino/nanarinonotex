# 安装 JDK 和 Gradle

其实不用自己装，直接使用 IntelliJ IDEA 来创建项目即可

这里只是为了全局的命令行操作和kotlinc，它能让项目或单独文件在vscode运行

## JDK

安装最高LTS版本即可。有多种发行可选。

- [Azul Zule](https://www.azul.com/downloads/?package=jdk#zulu)
- [Oracle GraalVM](https://www.oracle.com/cn/java/technologies/downloads/#graalvmjava21)

### 验证安装成功

```powershell
C:\Users\Administrator> java --version
openjdk 21.0.1 2023-10-17 LTS
OpenJDK Runtime Environment Zulu21.30+15-CA (build 21.0.1+12-LTS)
OpenJDK 64-Bit Server VM Zulu21.30+15-CA (build 21.0.1+12-LTS, mixed mode, sharing)
```

## Gradle

[下载 Gradle](https://gradle.org/install/) 需要先安装JDK8+

选择同JDK版本符合它最低要求的最高版本，下载后按指示解压和**手动**设置环境变量

### 验证安装成功

```powershell
C:\Users\Administrator> gradle -v

Welcome to Gradle 8.5!

Here are the highlights of this release:
 - Support for running on Java 21
 - Faster first use with Kotlin DSL
 - Improved error and warning messages

For more details see https://docs.gradle.org/8.5/release-notes.html


------------------------------------------------------------
Gradle 8.5
------------------------------------------------------------

Build time:   2023-11-29 14:08:57 UTC
Revision:     28aca86a7180baa17117e0e5ba01d8ea9feca598

Kotlin:       1.9.20
Groovy:       3.0.17
Ant:          Apache Ant(TM) version 1.10.13 compiled on January 4 2023
JVM:          21.0.1 (Azul Systems, Inc. 21.0.1+12-LTS)
OS:           Windows 11 10.0 amd64
```

输出的 Gradle 8.5 匹配的 kotlin 版本为 1.9.20



## Kotlinc

不同于gradle项目里的 `src/helloworld.kt` 会编译成 `helloworld.jar` 包，

kt/kts文件在项目以外是可以直接运行的，但这需要借助单独安装JDK和[kotlinc](https://github.com/JetBrains/kotlin/releases)

最好和 Gradle 里的版本一致。下载解压后**手动**设置环境变量即可

### 验证安装成功

进入交互式环境

```powershell
C:\Users\Administrator> kotlin
Welcome to Kotlin version 1.9.20 (JRE 21.0.1+12-LTS)
Type :help for help, :quit for quit
>>>
```

和python一样使用`^Z`退出


### 运行helloworld脚本

创建helloworld.kts文件，在vscode中利用codeRunner插件运行 或命令行运行以下命令之一：

- `kotlin ./helloworld.kts`
- `kotlin -script ./helloworld.kts`

这有点类似于 `ts-node` 单独运行ts文件，脚本不需要main方法以及文件名称相同的class


```kotlin
// helloworld.kts
println("Hello, world!")
```

vscode会自己提示需要安装的插件，但在中国大陆需要配置git代理


### 编译为class/jar

创建helloworld.kt文件，命令行运行以下命令分别编译为class/jar并运行：

- `kotlinc ./helloworld.kt -include-runtime -d helloworld && java HelloworldKt`
- `kotlinc ./helloworld.kt -include-runtime -d helloworld.jar && java helloworld.jar`

```kotlin
// helloworld.kt
fun main(){
    println("Hello, world!")
}
```

kt相比kts文件相比要多一个main函数；

编译出的class名会变成驼峰+Kt后缀；

`-include-runtime` 是kotlin运行时，如果是kotlin包 给其他kotlin引入的 那么不需要；
