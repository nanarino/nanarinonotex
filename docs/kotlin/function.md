# 函数

函数体可以是表达式 返回类型可以自动推断
```kotlin
fun sum(a: Int, b: Int) = a + b
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}
printSum(1, 2) // sum of 1 and 2 is 3
```
参数默认都是位置参数，无返回值的`Unit`类型可以省略(自动推断)

函数可以返回函数 函数可以作为参数



## 可选参数

可以使用等号给可选参数指定默认值

参数类型带问号意味可以为`null`



## 重载

```kotlin
fun String.spaceToCamelCase() { ... }

"Convert this to camelcase".spaceToCamelCase()
```


## 匿名函数

也叫Lambda表达式

```kotlin
// All examples create a function object that performs upper-casing.
// So it's a function from String to String

val upperCase1: (String) -> String = { str: String -> str.uppercase() }

val upperCase2: (String) -> String = { str -> str.uppercase() }

val upperCase3 = { str: String -> str.uppercase() }

// val upperCase4 = { str -> str.uppercase() } // 无法推断类型

val upperCase5: (String) -> String = { it.uppercase() }

val upperCase6: (String) -> String = String::uppercase

println(upperCase1("hello"))
println(upperCase2("hello"))
println(upperCase3("hello"))
println(upperCase5("hello"))
println(upperCase6("hello"))
```


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

## 词法闭包

kotlin语言存在词法闭包，与Python一样。

## 可调用对象

重载对象的 `invoke()` 方法即可被调用 这也属于运算符重载

## 泛型
```kotlin
fun <E> mutableStackOf(vararg elements: E) = MutableStack(*elements)
```
