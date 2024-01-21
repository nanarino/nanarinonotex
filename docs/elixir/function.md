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

`\\` 参数设置默认值 但由于签名匹配没必要

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

参数是map等时支持结构，结构失败算参数匹配失败转走其他签名

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

可以和map 相互匹配

可以用`alias` 继承另一个结构体

## 宏

可以用 `import` 解构整个模块的函数和宏

可以用 `require` 解构整个模块的宏

可以用 `use` 调用模块的`__using__`宏函数钩子

