### 1、选择元素: 
`d3.select()`：选择所有指定元素的第一个
`d3.selectAll()`：选择指定元素的全部
eg: #helloworld.html

```js
var body = d3.select("body"); //选择文档中的body元素
var p1 = body.select("p");      //选择body中的第一个p元素
var p = body.selectAll("p");    //选择body中的所有p元素
var svg = body.select("svg");   //选择body中的svg元素
var rects = svg.selectAll("rect");  //选择svg中所有的svg元素
```

### 2、绑定数据: 
`datum()`：绑定一个数据到选择集上
`data()`：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
eg: #datum&data.html

### 3、插入元素:
`append()`：在选择集末尾插入元素
`insert()`：在选择集前面插入元素
eg: #selectAll&append&insert&remove.html

### 4、删除元素:
`remove()`
eg: #selectAll&append&insert&remove.html

-----------------
## 比例尺的使用
eg: #column.html
**将某一区域的值映射到另一区域，其大小关系不变。**
D3 中的比例尺，也有定义域和值域，分别被称为 `domain` 和 `range`

### 1、线性比例尺
线性比例尺，能将一个连续的区间，映射到另一区间。
`d3.scale.linear()` 返回一个线性比例尺, 可当做函数来使用
```js
var dataset = [1.2, 2.3, 0.9, 1.5, 3.3];
var min = d3.min(dataset);
var max = d3.max(dataset);

var linear = d3.scale.linear()
  .domain([min, max])
  .range([0, 300]);

linear(0.9);    //返回 0
linear(2.3);    //返回 175
linear(3.3);    //返回 300
```

###  2、序数比例尺
定义域和值域不一定是连续，离散的
```js
var index = [0, 1, 2, 3, 4];
var color = ["red", "blue", "green", "yellow", "black"];
var ordinal = d3.scale.ordinal()
  .domain(index)
  .range(color);

ordinal(0); //返回 red
ordinal(2); //返回 green
ordinal(4); //返回 black
```

### 3、给柱形图添加比例尺
eg: #domain&range.html

-----------------
## 坐标轴
本可以使用`<axis x1="" x2="" ...></axis>`实现坐标轴

`d3.svg.axis()`: D3 中坐标轴的组件，能够在 SVG 中生成组成坐标轴的元素
`scale()`：指定比例尺。
`orient()`：指定刻度的朝向，bottom 表示在坐标轴的下方显示。
`ticks()`：指定刻度的数量。
