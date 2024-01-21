# 数据类型

## 基本类型

- integer 支持 `0b` `0o` `0x`
- float 不支持 `.`开头
- boolean 除了 `false` 和 `nil` 之外所有的值都为真。
- atom 一种symbol类型 `:true == true` 模块名也是原子
- string 使用双引号 支持换行 单引号的字符列表被弃用了
- list 字面量`[i,]` 链表实现 获取长度是O(n)
    - 使用 `++` 拼接两个列表
    - 使用 `[ head | list ]` 插入头
    - 使用 `--` 过滤（只过滤相同的数量）
    - `hd()` `tl()` 获取头元素和尾列 （第一个是头元素 剩下的都在尾列）
    - 使用 `[head | tail] = list` 解构头尾
- tuple 字面量`{i,}` 不可变数组 内存连续

## Associative

- keyword list 二元元组列表 用ts表达相当于 `[atom, any][]` 有2种字面量：
    - `[foo: "bar", hello: "world"]`
    - `[{:foo, "bar"}, {:hello, "world"}]`
- map 字面量 `%{k => v}` 无序 键类型任意
    - `map.hello` 和 `map["hello"]` 获取值
    - `:key =>` 可以写成 `key:`
    - `%{ map | **map }` 用ts表达相当于 `Object.assign(o1, o2)` 但键若不存在会 `KeyError`
    - `Map.put(map, key, value)` 添加新key

## Enum

内置了70多个操作枚举类型的函数 `all` `any` `map` `filter` `reduce` 等

```elixir
iex> Enum.map([1, 2, 3, 4, 5], fn(x) -> x ** 2 end)
[1, 4, 9, 16, 25]

iex> Enum.map([1, 2, 3, 4, 5], &(&1 ** 2))
[1, 4, 9, 16, 25]

iex> Enum.map([1,2,3], &:math.sqrt(&1))
[1.0, 1.4142135623730951, 1.7320508075688772]

iex> Enum.map([1,2,3], &:math.sqrt/1)
[1.0, 1.4142135623730951, 1.7320508075688772]
```
