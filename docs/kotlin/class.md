# 类

不需要额外的 constructor

实例化不需要 new

```kotlin
class Rectangle(val height: Double, val length: Double) {
    val perimeter = (height + length) * 2
}
val rectangle = Rectangle(5.0, 2.0)
println("The perimeter is ${rectangle.perimeter}")
```

## 实例判断

可以使用 `obj is type` 来判断是否属于这个类型实例（子类实例也支持）

`obj is! type` 是判断不属于实例

`obj as type` 可以把对象转换为特定的类型

## 继承

`open`修饰的类才能被继承

```kotlin
open class Shape

class Rectangle(val height: Double, val length: Double): Shape() {
    val perimeter = (height + length) * 2
}
```

重写方法或属性需要 `override` 修饰符。

## 私有类

只能在本包中实例化或继承的类

```kotlin
sealed class Mammal(val name: String)
```

## 数据类

```kotlin
data class Customer(val name: String, val email: String)
```

## 抽象类

```kotlin
abstract class MyAbstractClass {
    abstract fun doSomething()
    abstract fun sleep()
}

fun main() {
    val myObject = object : MyAbstractClass() {
        override fun doSomething() {
            // ...
        }

        override fun sleep() { // ...
        }
    }
    myObject.doSomething()
}
```

## 单例类

```kotlin
object Resource {
    val name = "Name"
}
```

## 泛型

```kotlin
class MutableStack<E>(vararg items: E) {

  private val elements = items.toMutableList()

  fun push(element: E) = elements.add(element)

  fun peek(): E = elements.last()

  fun pop(): E = elements.removeAt(elements.size - 1)

  fun isEmpty() = elements.isEmpty()

  fun size() = elements.size

  override fun toString() = "MutableStack(${elements.joinToString()})"
}
```

## 枚举类

```kotlin
enum class State {
    IDLE, RUNNING, FINISHED
}

val state = State.RUNNING
```
