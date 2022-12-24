
<img src="" referrerpolicy='no-referrer'/>

![flex](https://img-blog.csdnimg.cn/731d32b8dcd342b283b6b5788e1b7fad.png)

## `flex-direction` 属性
> 用于控制子元素排列方向与顺序，默认row，即横向排列
  
#### 取值：
* `row`(默认)：横向排列
* `row-reverse`：从右侧开始
* `column`：纵向         
* `column-reverse`：纵向从底部开始排


## `flex-wrap` 属性
> 用于控制子元素是否换行，nowrap表示不换行；
#### 取值：
* `nowrap`：默认不换行，默认会缩放
* `wrap`：换行
* `wrap-reverse`：第一行在下方

## `flex-flow` 属性
> `flex-flow` 属性是 `flex-deriction` 与 `flex-wrap` 属性的简写集合，默认值为 `row nowrap`，即横向排列，且不换行，如果需要控制子元素排列与换行，推荐使用此属性，而非单独写两个。

## `justify-content` 属性
> 主轴上的对齐方式

#### 取值：
* `flex-start`：(默认)左对齐
* `flex-end`：右对齐
* `center`：居中
* `space-between`：左右段对齐，即左右两侧子元素都紧贴容器，且子元素之间间距相等。

![space-between](https://img-blog.csdnimg.cn/9a7da20e480c4f3bbfd993747e35e3f6.png)

* `space-around`：子元素之间间距为左右两侧子元素到容器间距的2倍，比较特别的布局，日常使用不太多

![space-around](https://img-blog.csdnimg.cn/3ff18b76ed934603869c10345425c467.png)

* `space-evenly`：为项目之间间距与项目与容器间距相等，相当于除去子元素宽度，平均分配了剩余宽度作为子元素左右margin

![space-evenly](https://img-blog.csdnimg.cn/a13ab2bf3058424185fe24627d6dc665.png)

## `align-items` 属性
> 侧轴上的对齐方式

#### 取值：
* `flex-start`：会让子元素在纵轴紧贴容器顶部

![flex-start](https://img-blog.csdnimg.cn/44adb67341ba436ba1e3544f538def94.png)

* `flex-end`：会让子元素在纵轴紧贴容器底部

![flex-end](https://img-blog.csdnimg.cn/0189e0b2219e4369a1e09d12bce35203.png)

* `center`：会让子元素在侧轴中心位置排列

![center](https://img-blog.csdnimg.cn/aa8efac5700f45be8706aa6d89f67199.png)

* `baseline`：比较特殊，它让子元素以第一行文字的基线为参照进项排列

![baseline](https://img-blog.csdnimg.cn/7bd25aa35f284cc29e88c6966d952a94.png)

* `stretch`(默认)：`stretch`即如果未设置高度，或高度为`auto`，则占满整个容器

![在这里插入图片描述](https://img-blog.csdnimg.cn/868ff41e1a78411b9bf1f8d5ece3e0e3.png)

## `align-content` 属性

> 定义了多根轴线的对齐方式

#### 取值：

* flex-start（效果）

![flex-start](https://img-blog.csdnimg.cn/6be389f24f4d4cc2bffd11d2f18dd7e9.png)

* flex-end（效果）

![flex-end](https://img-blog.csdnimg.cn/6e494aacf6fa46d0bc3c66f05473d620.png)

* center（效果）

![center](https://img-blog.csdnimg.cn/1b9eb2618806404591daf8178a5fd9fb.png)

* space-between（效果）

![space-between](https://img-blog.csdnimg.cn/ff73e2199869400c90fd68519eb047d8.png)

* flex-start（效果）
  
![flex-start](https://img-blog.csdnimg.cn/1acd4d192bb04d1686dcf6b00e81d040.png)

* stretch（效果）

![stretch](https://img-blog.csdnimg.cn/c3940d45fd384762a4702475fced736f.png)

## 元素的属性

* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

#### `order`

> 定义项目的排列顺序。数值越小，排列越靠前，默认为0

![order](https://img-blog.csdnimg.cn/6878813d0ae84079856094665f8257d9.png)

#### `flex-grow`

> `flex-grow`属性定义项目的放大比例，主要在父元素的宽度大于子元素的宽度之和时候起作用，它定义子元素如何分配父元素的剩余宽度，默认为0，这个时候不索取父元素的宽度。

![flex-grow](https://img-blog.csdnimg.cn/8e00501dddce420d84d133b03a11c0dd.png)

#### `flex-shrink`

> `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

#### `flex-basis`

> `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间(默认值为`auto`，即项目的本来大小)

#### `flex`

> `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。

#### `align-self`

> `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

![在这里插入图片描述](https://img-blog.csdnimg.cn/032d0d93920a4a789c88a76113df0a85.png)