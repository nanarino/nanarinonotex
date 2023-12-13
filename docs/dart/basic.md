# 基本语法

假设你学习过python与JavaScript

笔记也只是记录一个大概，详细还是得看[官方文档](https://dart.dev/language)

## 注释

同JavaScript
```dart
// 单行注释

/**
 * 多行注释
 **/
```

## 变量声明

dart语言和Java一样要求类型前置😅

好在类型有自动推断

（修饰符 / 类型） 变量名（ = 变量值）;

```dart
//var 自动推断类型
var age = 42;
//const 编译时常量 不可修改 只能是基本类型
const age1 = 68;
//final 运行时常量 初始化后不可修改
final str;
str = 'helloworld';
//指定类型声明
bool flag = true;
//指定类型声明编译时常量
const String str1 = 'helloworld';
//指定非单一类型可以使用dynamic或Object类型
dynamic obj = '??'
//late修饰的变量可以在使用的时候才被初始化（即声明语句的等号右边执行）
//late和const新手不要尝试一起修饰
late String ip = getIP();
```
初始化之前变量为`null`

## 空安全

如果声明一个可能为null的变量，可以加上问号表示可以为null
```dart
int? a = 1;
a = null;
```

如果明确知道一个表达式不为空，但解释器认为可以为空，可以加上感叹号来断言
```dart
Map<String, double> map = {'1':1.0};
double a = map['1']!;
```

## 运算符

运算符与JavaScript的一样  
特别的:
`??` 和JavaScript里相似 左边为null返回右边

`?.` 和JavaScript里相似 左边没有右边这个attr时返回null

`??=` 左边为null时赋值

`%`是取模而不是取余。整除使用运算符`~/`

`..`级联运算符可以让对象链式操作

```dart
querySelector('#confirm') // Get an object.
    ?..text = 'Confirm' // Use its members.
    ..classes.add('important')
    ..onClick.listen((e) => window.alert('Confirmed!'));
```

`?[]`可以判空访问item

`...??`可以判空解包容器


## 模板字符串

```dart
const age = 18;
print('今年$age岁，明年${age+1}岁');
```


## 流程控制

流程控制使用
- `if`、`else if`、`else` if只能判断布尔类型
- `for`、`for in`
- `switch case`  case只能匹配静态字面量等编译时常量
- `while`、`do while`
- `break` 和 `continue`

基本与JavaScript一样，但没有`for of`循环

`var` 在for中具有词法作用域

可迭代对象都可以使用`.forEach` `.map` `.where(filter)` `.reduce` `.any(some)` `.every(all)`等

学多了容易混淆方法名😅：
- python：`all` `any`
- dart：`every` `any`
- js: `every` `some`


## 异常

抛出
```dart
throw FormatException('Expected at least 1 section');

throw 'Out of llamas!';
```

捕获
```dart
try {
    breedMoreLlamas();
} on OutOfLlamasException {
    // A specific exception
    buyMoreLlamas();
} on Exception catch (e) {
    // Anything else that is an exception
    print('Unknown exception: $e');
} catch (e) {
    // No specified type, handles all
    print('Something really unknown: $e');
    rethrow;
}
```

`rethrow`关键字可以将捕获的异常再次抛出

`finally`语句始终执行