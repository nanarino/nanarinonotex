# 函数

## 匿名

```elixir
iex> sum = fn (a, b) -> a + b end
iex> sum.(2, 3)
5
```

```elixir
iex> sum = &(&1 + &2)
iex> sum.(2, 3)
5
```

多个签名根据参数匹配

```elixir
iex> handle_result = fn
...>     {:ok, result} -> IO.puts "Handling result..."
...>     {:ok, _} -> IO.puts "This would be never run as previous will be matched beforehand."
...>     {:error} -> IO.puts "An error has occurred!"
...> end
iex> handle_result.({:ok, "hello"})
Handling result...
:ok
```

## 具名

定义在模块内

```elixir
defmodule Greeter do
  def hello(name) do
    "Hello, " <> name
  end
end

iex> Greeter.hello("Sean")
"Hello, Sean"
```

模块内的具名函数直接写同名的即可多个签名根据参数匹配

`defp` 定义私有函数

`do` 之前支持 `when` 条件

`\\` 参数设置默认值 但由于签名匹配基本没必要

## 递归

```elixir
defmodule Length do
  def of([]), do: 0
  def of([_ | tail]), do: 1 + of(tail)
end

Length.of []
0
Length.of [1, 2, 3]
3
```

## 参数解构

参数是 map 等时支持结构，结构失败算参数匹配失败转走其他签名

`=` 左右顺序无关

```elixir
defmodule Greeter do
  def hello(%{name: person_name} = person) do
    IO.puts "Hello, " <> person_name
    IO.inspect person
  end
end
```

## 管道

```elixir
foo(bar(:a))

:a |> bar() |> foo()

:a |> bar |> foo
```

具名函数只有一个参数能省略括号

## 结构体

```elixir
defmodule Example.User do
  defstruct name: "Sean", roles: []
end

iex> %Example.User{name: "Steve"}
```

可以和 map 相互匹配

可以用`alias` 继承另一个结构体

## sigils

类似 JavaScript 等语言的字符串模板的 tag，如 `` `<p>${var}</p>` ``

或者 python 内置的 f-string，r-string，如 `f"{var}"`

### 内置

- `~C` 创建一个不处理插值和转义字符的字符列表
- `~c` 创建一个处理插值和转义字符的字符列表
- `~R` 创建一个不处理插值和转义字符的正则表达式
- `~r` 创建一个处理插值和转义字符的正则表达式
- `~S` 创建一个不处理插值和转义字符的字符串
- `~s` 创建一个处理插值和转义字符的字符串
- `~W` 创建一个不处理插值和转义字符的单词列表
- `~w` 创建一个处理插值和转义字符的单词列表
- `~N` 创建一个 `NaiveDateTime` 数据结构
- `~U` 创建一个 `DateTime` 数据结构

### 自定义

```elixir
defmodule MySigils do
  def sigil_p(string, []), do: String.upcase(string)
end

iex> import MySigils
nil

iex>  ~p/elixir school/
ELIXIR SCHOOL
```

## 宏

可以用 `import` 解构整个模块的函数和宏

可以用 `require` 解构整个模块的宏

可以用 `use` 调用模块的`__using__`宏函数钩子
