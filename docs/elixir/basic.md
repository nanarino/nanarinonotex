# 基本语法

笔记也只是记录一个大概，详细还是得看官方文档

- [docs](https://hexdocs.pm/elixir/basic-types.html)
- [elixirschool](https://elixirschool.com/zh-hans/lessons/basics/basics)
- [phoenix](https://hexdocs.pm/phoenix/Phoenix.html)

## 注释

同 python

```elixir
# hello
```

## 定义赋值/重新分配

```elixir
iex> x = 1
1
iex> {x, ^x} = {2, 1}
{2, 1}
iex> x
2
```

`^` 匹配已被赋值的常量名

## 运算符

运算符与 JavaScript 的一样 特别的:

`===` 才能区分浮点和整数

`<>` 字符串拼接

`and` `or` `not` 用于布尔值（第一个参数）

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

`_` 用来兜底

`->` 前支持 `when` 条件

嵌套时可能可以用 `with` 优化

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


## 异常

抛出

捕获
