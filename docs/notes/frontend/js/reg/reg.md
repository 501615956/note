
# RegExp(正则表达式)

## 描述

> 正则表达式是描述字符模式的对象。
>
> 正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。

有两种方法可以创建一个 RegExp 对象：一种是字面量，另一种是构造函数。

* 字面量: 由斜杠 (/) 包围而不是引号包围。

* 构造函数的字符串参数: 由引号而不是斜杠包围。

以下三种表达式都会创建相同的正则表达式：

```js
/ab+c/i; //字面量形式
new RegExp('ab+c', 'i'); // 首个参数为字符串模式的构造函数
new RegExp(/ab+c/, 'i'); // 首个参数为常规字面量的构造函数
```

## 修饰符

> 正则表达式有六个可选修饰符 (flags) 允许全局和不分大小写搜索等。这些参数既可以单独使用也能以任意顺序一起使用，并且被包含在正则表达式实例中。

| 修饰符 |                          描述                           |
| :----: | :-----------------------------------------------------: |
|  `g`   |                        全局匹配                         |
|  `i`   |                      不区分大小写                       |
|  `m`   |                        多行匹配                         |
|  `s`   |                   允许 `.` 匹配换行符                   |
|  `u`   |              使用 unicode 码的模式进行匹配              |
|  `y`   | 执行“粘性 (sticky)”搜索，匹配从目标字符串的当前位置开始 |

为了在正则表达式中包含标志，请使用以下语法：
```js
let re = /pattern/flags;
```
或者
```js
let re = new RegExp("pattern", "flags");
```

## 方法

### `test`
> `test()` 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 `true` 或 `false`。

#### 语法
```js
reg.test(str)
```
#### 参数
* `reg` : 匹配使用的正则表达式
* `str` : 要匹配正则表达式的字符串
#### 返回值
* 如果正则表达式与指定的字符串匹配，返回true；否则false。
#### 示例
```js
let str = 'hello world!'
let result = /^hello/.test(str)
console.log(result) // true
```

### `match`
> `match()` 方法检索返回一个字符串匹配正则表达式的结果，它返回一个数组，在未匹配到时会返回 `null`。 

#### 语法
```js
str.match(reg)
```
#### 参数
* `str` : 要匹配正则表达式的字符串
* `reg` : 匹配使用的正则表达式
#### 返回值
* 如果使用 `g` 标志，则将返回与完整正则表达式匹配的所有结果。
* 如果未使用 `g` 标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。
#### 示例

在下例中，使用 match 查找 "Chapter" 紧跟着 1 个或多个数值字符，再紧跟着一个小数点和数值字符 0 次或多次。正则表达式包含 i 标志，因此大小写会被忽略。
```js
let str = 'For more information, see Chapter 3.4.5.1'
let re = /see (chapter \d+(\.\d)*)/i
let found = str.match(re)

console.log(found)

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性 (22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。
```

下例展示了 `match` 使用 `global` 和 `ignore case` 标志。`A-E`、`a-e` 的所有字母将会作为一个数组的元素返回。
```js
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```
使用 `match()`，不传参数
```js
let str = "Nothing will come of nothing.";
str.match();   // returns [""]
```
当参数是一个字符串或一个数字，它会使用 new RegExp(obj) 来隐式转换成一个 RegExp。如果它是一个有正号的正数，RegExp() 方法将忽略正号。
```js
let str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript."
let str2 = "My grandfather is 65 years old and My grandmother is 63 years old."
let str3 = "The contract was declared null and void."
str1.match("number");   // "number" 是字符串。返回 ["number"]
str1.match(NaN);        // NaN 的类型是 number。返回 ["NaN"]
str1.match(Infinity);   // Infinity 的类型是 number。返回 ["Infinity"]
str1.match(+Infinity);  // 返回 ["Infinity"]
str1.match(-Infinity);  // 返回 ["-Infinity"]
str2.match(65);         // 返回 ["65"]
str2.match(+65);        // 有正号的 number。返回 ["65"]
str3.match(null);       // 返回 ["null"]
```

### `search`
> 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回 -1。
#### 语法
```js
str.match(reg)
```
#### 参数
* `str` : 要匹配正则表达式的字符串
* `reg` : 匹配使用的正则表达式
#### 返回值
* 如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。
#### 示例
下面的例子中用两个不同的正则表达式对同一个字符串执行搜索匹配，得到一个成功匹配（正数返回值）和一个失败匹配（-1）。
```js
var str = "hey JudE"
let re = /[A-Z]/g
let re2 = /[.]/g
console.log(str.search(re)); // 返回4，这是第一个大写字母"J"的索引
console.log(str.search(re2)); // 返回-1，找不到"."点标点符号
```

### `replace`
> 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。
>
> 原字符串不会改变。

#### 语法
```js
str.replace(reg|str, newStr|function)
```
#### 参数
* `reg` : 匹配使用的正则表达式
* `str` : 要被替换的字符串
* `newStr` : 替换的字符串
* `function` : 一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果
  下面是该函数的参数：
   |    变量名    |                                                                            代表的值                                                                             |
   | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
   |   `match`    |                                                                           匹配的子串                                                                            |
   | `p1,p2, ...` | 假如 replace() 方法的第一个参数是一个RegExp 对象，则代表第 n 个括号匹配的字符串。例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。 |
   |   `offset`   |                      匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 'abcd'，匹配到的子字符串是 'bc'，那么这个参数将会是 1）                       |
   |   `string`   |                                                                       被匹配的原字符串。                                                                        |

#### 返回值
* 一个部分或全部匹配由替代模式所取代的新的字符串。
#### 示例
在下面的例子中，replace() 中使用了正则表达式及忽略大小写标示。
```js
let str = 'Twas the night before Xmas...';
let newStr = str.replace(/xmas/i, 'Christmas');
console.log(newStr);  // Twas the night before Christmas...
```

### `split`
> 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法
#### 语法
```js
str.split([separator[, limit]])
```
#### 参数
* `separator` : 指定表示每个拆分应发生的点的字符串（分割字符串）
* `limit` : 一个整数，限定返回的分割片段数量，当提供此参数时，只会返回限制内数量的数组。
#### 返回值
* 返回源字符串以分隔符出现位置分隔而成的一个 `Array`
#### 示例
```js
let str = 'aaa,bbb,ccc,ddd'
// 没有第二个参数限制的情况
let arr = str.split(',')
console.log(arr) // "aaa","bbb","ccc","ddd"]
// 有第二个参数限制的情况
let arr = str.split(',', 3)
console.log(arr) // "aaa","bbb","ccc"]
```

### `exec`
> 一个在字符串中执行查找匹配的 `RegExp` 方法，它返回一个数组（未匹配到则返回 `null`）。

#### 语法
```js
reg.exec(str)
```
#### 参数
* `reg` : 匹配使用的正则表达式
* `str` : 要匹配正则表达式的字符串
#### 返回值
* 如果匹配失败，`exec()` 方法返回 `null`，并将正则表达式的 `lastIndex` 重置为 0。
* 如果匹配成功，`exec()` 方法返回一个数组，并更新正则表达式对象的 `lastIndex` 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应一个匹配的捕获组。

