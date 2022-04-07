# 类

class 关键字可以在**顶层**声明一个类

```dart
class Point {
    double? x;
    double? y;

    Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    static fromDict(Map<String, double> map) {
        return Point(map["x"]!, map["y"]!);
    }

    @override
    String toString() {
        return 'Point<x=${this.x}, y=${this.y}>';
    }
}

main() {
    print(Point(1, 2));
    print(Point.fromDict({"x": 3.14, "y": 1}));
}
```

其中，声明一个和类名同名的方法即是默认构造方法（constructor）。

其他非默认构造方法是静态方法，很多以 from 开头的都是

实例化时 `new` 可以省略且推荐省略

## 静态

使用`static`修饰静态方法和属性，并且可以作为**编译时常量**

## 私有

`_`开头即为私有。JavaScript 是以#开头 😅

## 声明简化

简写：执行一个和类名同名的方法

构造方法不会被继承

上一段的简化写法，这个冒号后面官网叫**重定向构造函数**。

```dart
class Point {
    double x;
    double y;
    Point(this.x, this.y);
    Point.fromDict(Map<String, double> map): this(map['x']!, map['y']!);
    toString() => 'Point<x=$x, y=$y>';
}
```

也可简化为这样，这个冒号后面官网叫**初始化列表**。

```dart
class Point {
    double x;
    double y;
    Point(this.x, this.y);
    Point.fromDict(Map<String, double> map) : x = map['x']!, y = map['y']!;
    toString() => 'Point<x=$x, y=$y>';
}
```

非构造方法里使用属性是不需要`this.x`的，直接`x`，除非属性名重复。

## 常量构造

如果类生成的对象都是不变的，可以在生成这些对象时就将其变为**编译时常量**

```dart
class ImmutablePoint {

    // 静态属性，原点实例
    static const ImmutablePoint origin = ImmutablePoint(0, 0);

    // final 修饰的成员变量，实例化后的attr将不能再被修改
    final double x, y;

    // 静态的构造函数
    const ImmutablePoint(this.x, this.y);
}
main() {
    const ImmutablePoint x = const ImmutablePoint(1, 2); // 常量类型才可以用cosnt声明
    print(ImmutablePoint.origin);
    print(x);
}
```

`factory`关键字可以修饰一个工厂构造函数，它内部无法访问 `this`。究极糖，一键设计模式。

## 实例判断

`obj.runtimeType == Type` 可以判断是否是实例。

`obj is Type` 也可以，但是一般用来判断抽象类型。

## 继承

使用`extends`关键字单继承一个父类, super 指代父类，this 指代本类

```dart
class Point3D extends Point {
    double z;
    Point3D(double x, double y, this.z) : super(x, y);
    Point3D.fromDict(Map<String, double> map) : z = map['z']!, super.fromDict(map);
    toString() => 'Point<x=$x, y=$y, z=$z>';
}
```

除了`null`所有的类型都继承`Object`

重写父类的方法需要`@override`装饰

使用 extends 还可以限制范型继承，后面跟`?`允许 null 值 `class A<T extends Object>`

## 运算符重载

```dart
class Point {
    double x;
    double y;
    Point(this.x, this.y);
    Point operator +(Point p2) => Point(x + p2.x, y + p2.y);
    toString() => 'Point<x=$x, y=$y>';
}

main() {
    print(Point(1, 2) + Point(3, 2));
}
```

## getter setter

`get` `set`修饰的方法可以拦截变量读取和修改

## 抽象类

使用 `abstract` 修饰的 `class` 无法被实例化，只能被继承

直接使用分号代替方法体即为抽象方法，抽象方法只能定义在抽象类中。

使用 `implements` 代替 `extends` 可以实现抽象类却不继承，且支持一次实现多个抽象类

## 混入

使用 `with` 关键字并在其后跟上 Mixin 类的名字来使用 Mixin 模式

类似于 python 多继承

```dart
class Maestro extends Person with Musical, Aggressive, Demented {
  // ...
}
```

## 拓展方法

```dart
extension Dict<K, V> on Map<K, V>{
  List<MapEntry<K, V>> items(){
    final items = <MapEntry<K, V>>[];
    forEach((key, value) => items.add(MapEntry(key, value)));
    return items;
  }
}

main() {
  print({1: 2, 3: 4}.items());
}
```
