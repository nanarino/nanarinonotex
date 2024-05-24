# 数据类型

## 基本类型

- integer 支持 `0b` `0o` `0x`
- float 不支持 `.`开头
- boolean 除了 `false` 和 `nil` 之外所有的值都为真。
- atom 一种 symbol 类型 `:true == true` 模块名也是原子
- string 字面量 `"OP"` 或 `<<79,80>>` 前者是 utf8 且支持`\u`转义的。支持换行。单引号的字符列表的字面量表示标记弃用了
- list 字面量`[i,]` 实际上是用**链表**实现 获取长度是 O(n)
  - 使用 `++` 拼接两个列表
  - 使用 `[ head | list ]` 插入头尾
  - 使用 `--` 过滤（只过滤相同的数量）
  - `hd()` `tl()` 获取头元素和尾列 （第一个是头元素 剩下的都在尾列）
  - 使用 `[head | tail] = list` 解构头尾，头可以一次取出多个
- tuple 字面量`{i,}` 不可变数组 内存连续
  - 第一个元素是 atom 时也称 Record
- function

## COLLECTIONS/ENUMERABLES

### Associative

- Keyword 字面量：`[{k, v},]`，二元元组列表 用 ts 表达相当于 `obj.entries()` key可重复
  - `{:key, v}` 可以写成 `key:v` 但得后置 如 `[{:hello, "world"}, foo: "bar"]`
- Map 字面量：`%{k => v,}` 无序 键类型任意
  - `map.hello` 和 `map["hello"]` 获取值
  - `:key =>` 可以写成 `key:` 但得后置 如 `%{:hello => "world", foo: "bar"}`
  - `%{ map | **map }` 用 ts 表达相当于 `Object.assign(o1, o2)` 但键若不存在会 `KeyError`
  - `Map.put(map, key, value)` 添加新 key
- MapSet 没有字面量 使用 `MapSet.new([1, :two, {"three"}])` 创建

### Comprehensions

```elixir
# 关键字列表
iex> for {_key, val} <- [one: 1, two: 2, three: 3], do: val
[1, 2, 3]

# 映射
iex> for {k, v} <- %{"a" => "A", "b" => "B"}, do: {k, v}
[{"a", "A"}, {"b", "B"}]

# 二进制
iex> for <<c <- "hello">>, do: <<c>>
["h", "e", "l", "l", "o"]

# 过滤 可以多个
import Integer
iex> for x <- 1..10, is_even(x), do: x
[2, 4, 6, 8, 10]
```

#### `into`

```elixir
iex> for {k, v} <- [one: 1, two: 2, three: 3], into: %{}, do: {k, v}
%{one: 1, three: 3, two: 2}
iex> for c <- [72, 101, 108, 108, 111], into: "", do: <<c>>
"Hello"
```

### Range

语法 `first..last//step` 如 `1..10` `10..1//-1` 左闭右闭

不支持 `1..<10` 写法

### Enum

内置了 70 多个操作枚举类型的函数 `all` `any` `map` `filter` `reduce` 等

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
