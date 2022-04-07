# 函数

Function 类型的对象可以直接声明，使用括号调用

```dart
void bluePrint(String str){
    print('\x1b[36m$str\x1b[39m');
}
bluePrint('你好');
```

参数默认都是位置参数，返回值默认是`null`

## 箭头函数

`{ return 表达式; }`可以写作`=> 表达式`

```dart
bool isEven(int n) => n % 2 == 0;
```

## 可选参数

位置参数使用[]包裹表示可选

可以使用等号给可选参数指定默认值

```dart
void bluePrint([String str='']){
    print('\x1b[36m$str\x1b[39m');
}
bluePrint();
```

如果不设置默认值，则类型后面需要加个`?`以允许 null 进入

## 命名参数

命名参数使用{}包裹，默认可选

命名参数默认就是可选参数，必传需要最前面加`required`

可以使用等号给可选参数指定默认值

```dart
void colorPrint(String str,{String color='blue'}){
    if(color=='blue'){
        print('\x1b[36m$str\x1b[39m');
    }
    if(color=='red'){
        print('\x1b[31m$str\x1b[39m');
    }
}
colorPrint('你好');
colorPrint('你好', color: 'red');
```

如果不设置默认值，则类型后面需要加个`?`以允许 null 进入

## 入口函数

顶层的 `void main()` 函数实际上接受一个 `List<String>` 类型的可选参数

## 匿名函数

也叫 Lambda 表达式。没有名字也没有箭头，可以在如 Collection.forEach 中使用

## 词法闭包

Dart 语言存在词法闭包，与 Python 一样。

## 可调用对象

实现类的 call 方法即可被调用
