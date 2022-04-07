# 函数

函数体可以是表达式 返回类型可以自动推断

```kotlin
fun sum(a: Int, b: Int) = a + b
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}
printSum(1, 2) // sum of 1 and 2 is 3
```

参数默认都是位置参数，支持关键字参数

函数可以返回函数，函数可以作为参数

调用函数时，最后一个参数如果传入的是 lambda，可以放在小括号后面，此时小括号若是空的还可以省略

无返回值可以写 `return` `return Unit` 或者啥也不写

## 可选参数

可以使用等号给可选参数指定默认值

参数类型带问号意味可以为`null`

## 重载

```kotlin
fun String.spaceToCamelCase() { ... }

"Convert this to camelcase".spaceToCamelCase()
```

## Lambda

`->` 既可以用来指定函数的类型，也可以在 lambda 表达式中描述函数体

描述函数体时，一般不使用 `return`，而是以最后一行作为 return 的值，这类似于 vba

必要的时候应使用标记，如 `return@map`，这相当于循环里的 `continue`，否则相当于 `break` 了

这也类似 JavaScript 的 `() => (a,b,c)` 和 `function(){a;b;return c}` 效果一样

```kotlin
// All examples create a function object that performs upper-casing.
// So it's a function from String to String

val upperCase1: (String) -> String = { str: String -> str.uppercase() }

val upperCase2: (String) -> String = { str -> str.uppercase() }

val upperCase3 = { str: String -> str.uppercase() }

// val upperCase4 = { str -> str.uppercase() } // 无法推断类型

val upperCase5: (String) -> String = { it.uppercase() }

val upperCase6: (String) -> String = String::uppercase
```

`typealias` 用来修饰类型别名的声明

## 匿名函数

```kotlin
fun(s: String): Int { return s.toIntOrNull() ?: 0 }
```

匿名函数 和 lambda 表达式 都可以作为调用函数时的参数

## 入口函数

顶层的 `main()` 函数实际上接受一个 `Array<String>` 类型的可选参数

## 中缀函数

```kotlin
infix fun Int.times(str: String) = str.repeat(this)
println(2 times "Bye ")
```

## 运算符重载

一种更高级的中缀函数

```kotlin
operator fun Int.times(str: String) = str.repeat(this)
println(2 * "Bye ")
```

那些运算符对应的要重载的函数名得去[查表](https://kotlinlang.org/docs/operator-overloading.html)

## 词法闭包

kotlin 语言存在词法闭包，与 Python 一样。

## 可调用对象

重载对象的 `invoke()` 方法即可被调用 这也属于运算符重载

## 泛型

```kotlin
fun <E> mutableStackOf(vararg elements: E) = MutableStack(*elements)
```

## 内联

类似于 python 的上下文句柄 `with lock(l): foo()`

```kotlin
inline fun <T> lock(lock: Lock, body: () -> T): T { ... }
lock(l) { foo() }
```
