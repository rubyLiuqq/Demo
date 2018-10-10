[D3 API 中文版本](https://github.com/d3/d3/wiki/API--%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C)

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

-----------------
## update()、enter()、exit()
`update` 更新属性值
`enter` 添加元素后, 赋予属性值
`exit` 删除元素（remove）

-----------------
## 交互式操作
用户用于交互的工具一般有三种：鼠标、键盘、触屏。

1、鼠标常用的事件有
`click`：鼠标单击某元素时，相当于 mousedown 和 mouseup 组合在一起。
`mouseover`：光标放在某元素上。
`mouseout`：光标从某元素上移出来时。
`mousemove`：鼠标被移动的时候。
`mousedown`：鼠标按钮被按下。
`mouseup`：鼠标按钮被松开。
`dblclick`：鼠标双击。

2、键盘常用的事件有三个：
`keydown`：当用户按下任意键时触发，按住不放会重复触发此事件。该事件不会区分字母的大小写，例如“A”和“a”被视为一致。
`keypress`：当用户按下字符键（大小写字母、数字、加号、等号、回车等）时触发，按住不放会重复触发此事件。该事件区分字母的大小写。
`keyup`：当用户释放键时触发，不区分字母的大小写。 

3、触屏常用的事件有三个：
`touchstart`：当触摸点被放在触摸屏上时。
`touchmove`：当触摸点在触摸屏上移动时。
`touchend`：当触摸点从触摸屏上拿开时。 

当某个事件被监听到时，D3 会把当前的事件存到 d3.event 对象，里面保存了当前事件的各种参数.

-----------------
## 布局
布局的作用：将不适合用于绘图的数据转换成了适合用于绘图的数据。
D3 总共提供了 12 个布局：饼状图（Pie）、力导向图（Force）、弦图（Chord）、树状图（Tree）、集群图（Cluster）、捆图（Bundle）、打包图（Pack）、直方图（Histogram）、分区图（Partition）、堆栈图（Stack）、矩阵树图（Treemap）、层级图（Hierarchy）。

## 饼状图
```js
// 定义一个布局
var pie = d3.layout.pie();
// piedata 就是转换后的数据。
var piedata = pie(dataset);
// 每个对象都有变量起始角度（startAngle）和终止角度（endAngle），还有原数据（属性名称为 data）。
```

`d3.svg.arc()`    弧生成器
`arc(data)`       调用弧生成器，得到路径值
`arc.centroid(d)` 能算出弧线的中心

## 力导向图
```js
var force = d3.layout.force()
  .nodes(nodes) // 指定节点数组
  .links(edges) // 指定连线数组
  .size([width,height]) // 指定作用域范围
  .linkDistance(150) // 指定连线长度
  .charge([-400]); // 相互之间的作用力

force.start();    // 开始作用
console.log(nodes);
console.log(edges);
```

节点转换后，节点对象里多了一些变量。其意义如下：

`index`：节点的索引号
`px, py`：节点上一个时刻的坐标
`x, y`：节点的当前坐标
`weight`：节点的权重

由于力导向图是不断运动的，每一时刻都在发生更新，因此，必须不断更新节点和连线的位置。
力导向图布局 force 有一个事件 tick，每进行到一个时刻，都要调用它，更新的内容就写在它的监听器里。



