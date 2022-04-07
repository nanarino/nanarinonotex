# 基本语法

笔记也只是记录一个大概，详细还是得看官方文档：

- [Basics](https://kotlinlang.org/docs/basic-syntax.html)
- [Example](https://play.kotlinlang.org/byExample/overview)
- [API reference](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/)

## 注释

同 JavaScript

```kotlin
// 单行注释

/**
 * 多行注释
 **/
```

## 变量声明

修饰符前置 类型后置 可自动推断

（修饰符）变量名：类型（ = 变量值）

```kotlin
val b = 2 // 只读变量
val c: Int // 只读变量
c = 3
var x = 5 // 可重新分配的变量
x += 1
```

如果变量值不为 `null` 执行的代码块

```kotlin
val value = ...

value?.let {
    ... // execute this block if not null
}
```

它也是个表达式 默认会返回 `null`

## 空安全

如果声明一个可能为 null 的变量，可以加上问号表示可以为 null

```kotlin
var b: String? = "abc"
b = null
print(b)
```

如果明确知道一个表达式不为空，但解释器认为可以为空，可以加上 2 个感叹号来断言

在它真的为 null 时会抛出异常

```kotlin
val l = b!!.length
```

## 运算符

运算符与 JavaScript 的一样 特别的:

`?:` 和 JavaScript 里的`??`相似 左边为 null 返回右边

`?.` 和 JavaScript 里相似 左边没有右边这个 attr 时返回 null

`in`, `!in` 和 JavaScript 里的`in` `not in`相似，判断是否存在

`===` 和 `!==` 可以判断两个对象是否是同一个 不可重载

## 模板字符串

```kotlin
val age = 18;
println("今 年 $age 岁，明 年 ${age+1} 岁");
```

`$变量` 由于 jvm 的字符串实现 后面不能是中文 这是和 dart 模板字符串语法的唯一区别

## 流程控制

流程控制使用

- `if`、`else if`、`else` 可以使用 `if (a > b) a else b` 表达式
- `for in` 遍历对象 范围是左闭右闭 rust 的语法一致
  ```kotlin
  for (i in 1..3) {
      println(i)
  }
  for (i in 1..<3) {
      println(i)
  }
  for (i in 6 downTo 0 step 2) {
      println(i)
  }
  ```
- `when` 优于 case break 的匹配
  ```kotlin
  when (x) {
      0, 1 -> print("x == 0 or x == 1")
      else -> print("otherwise")
  }
  ```
- `while` `do while` 条件循环
- `break` 和 `continue` 支持标签
  ```kotlin
  loop@ for (i in 1..100) {
      for (j in 1..100) {
          if (...) break@loop
      }
  }
  ```

## 异常

抛出 和 dart 语法一致

```kotlin
throw HttpException(response.status)
```

捕获

```kotlin
fun test() {
    val result = try {
        count()
    } catch (e: ArithmeticException) {
        throw IllegalStateException(e)
    } finally {
        // cleanup
    }

    // Working with result
}
```

它们都是表达式
