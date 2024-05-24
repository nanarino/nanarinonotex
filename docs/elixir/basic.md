# 基本语法

笔记也只是记录一个大概，详细还是得看官方文档

- [docs](https://hexdocs.pm/elixir/basic-types.html)
- [elixirschool](https://elixirschool.com/zh-hans/lessons/basics/basics)

## 注释

同 python

```elixir
# hello
```

## 运算符

运算符与 JavaScript 的一样 特别的:

`===` 才能区分浮点和整数

`<>` 字符串拼接

`and` `or` `not` 用于布尔值（第一个参数）

## 模式匹配 `=`

相当于 定义赋值/重新分配

```elixir
iex> x = 1
1
iex> {x, ^x} = {2, 1}
{2, 1}
iex> x
2

iex> s = "www"
"www"
iex> "w" <> s = s
"www"
iex> s
"ww"

iex> li = [1, 2, 3]
[1, 2, 3]
iex> [_, _| li] = li
[1, 2, 3]
iex> li
[3]
```

- `^` 匹配已被赋值的常量名
- `—` 是通配符
- `|` 将列表分成前几个和剩余部分

## 模板字符串

```elixir
"Hello #{name}"
```

## 流程控制

```elixir
if String.valid?("Hello") do
  "Valid string!"
else
  "Invalid string."
end
```

`unless` 相当于其他语言 if not

```elixir
case {:ok, "Hello World"} do
  {:ok, result} -> result
  {:error} -> "Uh oh!"
  _ -> "Catch all"
end
```

- `_` 用来兜底
- 和 `=` 和 具名函数 一样的模式匹配规则
- `->` 前支持 `when` 条件
- 嵌套时可能可以用 `with` 优化

```elixir
cond do
  7 + 1 == 0 -> "Incorrect"
  true -> "Catch all"
end
```

`cond` 相当于其他语言的 `match`

## 缩进

官方推荐 2 空格缩进，如果

```elixir
def fun do
  :todo
end
```

中 缩进的 `:todo` 只有一行 那么也可以简写为

```elixir
def fun do: :todo
```
