# 数据类型

## 基本类型

- 数字 `Byte` `Short` `Int` `Long`
  - 数字类型加前缀 U 变成无符号的
- 布尔 `Boolean`
- 字符 `Char` 字面量单引号 转数字 `digitToInt('0') -> 0`
- 字符串 `String` 字面量双引号 支持：
  - `[]` 索引
  - `for in` 迭代
  - `+` 拼接
    多行字符串使用三个双引号

以上类型加后缀 Array 变成数组 相当于 java 的 `Int []` 或者 JavaScript 的 `Uint8Array`

- 数组 `Array` 永远是可变类型
  - 可以通过 `.toList()` `.toSet()` `.toMap()` 转成 Collections
  ```kotlin
  val pairArray = arrayOf(
      "apple" to 120,
      "banana" to 150,
      "cherry" to 90,
  )
  println(pairArray.toMap())
  ```

## Collections

以下创建的都是只读类型：

- List
  ```kotlin
  val list = listOf("a", "b", "c")
  val positives = list.filter { x -> x > 0 }
  val positives = list.filter { it > 0 }
  ```
- Set
  ```kotlin
  val tuple = setOf("a", "b", "c")
  ```
- Map
  ```kotlin
  val map = mapOf("a" to 1, "b" to 2, "c" to 3)
  println(map["key"])
  map["key"] = value
  for ((k, v) in map) {
      println("$k -> $v")
  }
  ```
  - `.getValue(key)` 获取 value 或默认 value 没有会抛出异常
  - `.withDefault(key -> defaultValue)` 根据 Map 创建一个有默认值的 Map

以上类型加前缀 mutable 变成可变类型

```kotlin
val openIssues: MutableSet<Int> = mutableSetOf(121, 276, 279)
```

每个 Collection 都有以下高阶函数：

- `.getOrElse(key,)` 安全访问 允许越界
- `.forEach()`, `.map()` `.filter()` `.fold(reduce,)`
- `.any()`, `.all()`, `.none()`
- `.find()`, `.findLast()` 找不到返回 null
- `.first()`, `.last()` 找不到抛出异常
- `.count()`
- `.partition()` 返回满足和不满足条件的两组 Collection
- `.associateBy(, getter)`, `.groupBy(, getter)`
- `.flatMap()`
- `.minOrNull()`, `.maxOrNull()`,
- `.sorted()`, `.zip()`,
