# 异步

## Future

相当于 JavaScript 中的 Promise

### 声明异步函数

```dart
String lookUpVersion() => '1.0.0';
Future<String> lookUpVersion() async => '1.0.0';
```

异步函数返回 Future

### 调用异步函数

```dart
void main() {
    lookUpVersion().then(print);
}
```

```dart
Future<void> main() async {
    Future<String> lookUpVersion() async => '1.0.0';
    print(await lookUpVersion());
    lookUpVersion().then(print);
}
```

`Future.then().catchError()` 组合是 `try-catch` 的异步版本。

## Stream

相当于 Python 中的 AsyncGenerator

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
    int k = 0;
    while (k < n) yield k++;
}

Future<void> main() async {
    await for (int i in asynchronousNaturalsTo(6)) {
        print(await i);
    }
}
```

`Stream.listen().onDone().onError()` 类似于`Future.then()`

除此之外还有`Stream.firstWhere()` `Stream.lastWhere()` 等
