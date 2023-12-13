# 数据类型

## 基本类型

。。。

## Collections

创建只读类型：

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

加mutable 变成可变类型

```kotlin
val openIssues: MutableSet<String> = mutableSetOf("uniqueDescr1", "uniqueDescr2", "uniqueDescr3")
```