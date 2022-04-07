# 数据类型

可以使用 `obj is type` 来判断是否属于这个类型实例（子类实例也支持）

`obj is! type` 是判断不属于实例

`obj as type` 可以把对象转换为特定的类型

## 内置类型

- num(int/double)
- String
- bool(true/false)
- List
- Set(LinkedHashSet)
- Map(LinkedHashMap)
- Runes
- Symbol
- null

## 字面量

- double 字面量可以使用整数

- String 字面量的引号支持单双三引，且支持和 python 一样的`r'字符串'`

  插值无需`f'字符串'`，而是直接在字符串中使用类似于 JavaScript 的`${表达式}` ，或`$变量名`

  const 定义的字符串字面量中初始化插值时只能插`$常量名`

- bool 字面量只有`true`和`false`

- List 字面量使用中括号，末尾的逗号可有可无

  List 字面量前添加 const 关键字会冻结，变成编译时常量

  List 字面量中使用拓展运算符`...`和`...?`

  同时支持类似 python 里的列表生成式如`[ for(var i in arr) if(i%2==0) i ]`

- Set 字面量使用花括号，末尾的逗号可有可无

  字面量前加 const 会冻结，变成编译时常量

- Map 字面量使用花括号，空花括号指的是 Map 而不是 Set

  获取不存在 key 值时返回`null`

  字面量前加 const 会冻结，变成编译时常量

- List/Set/Map 的字面量前可以紧贴`<T>` 和 `<T,T>`表示成员类型

  你可以`Map<String, String> map = {'木曜日':'星期四'};`

  也可以`var map = <String, String>{'木曜日':'星期四'};`

## 类型转换

调用`toString()` 可以转为字符串

调用类型的静态构造方法`.parse()` 可以转换为该类型

## 枚举

```dart
enum HTTPMethod {
    get('GET'),
    post('POST'),
    put('PUT'),
    delete('DELETE');
    final String methodName;
    const HTTPMethod(this.methodName);
    @override
    String toString() => methodName;
}

void main() {
    print(HTTPMethod.post);
}
```
