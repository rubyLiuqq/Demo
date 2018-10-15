## 百分比加载

### save()和restore()

save表示保存save函数之前的状态，
restore表示获取save保存的状态
```js
const ctx = wx.createCanvasContext('canvas')
ctx.save() 
ctx.setFillStyle('red') 
ctx.scale(2, 2)
ctx.fillRect(10, 10, 150, 100)  // 红色矩形一
ctx.restore()
ctx.fillRect(50, 50, 150, 100)  // 黑色矩形二
ctx.draw()

// save保存的是：scale默认是1，fillstyle 默认是黑色；而scale 为2和fillstyle 为red并不属于save了，因为它们是save函数之后发生的改变
```

### ctx.arc
`ctx.arc(x, y, r, sAngle, eAngle, counterclockwise);`

sAngle：起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
eAngle：结束角，以弧度计。
counterclockwise：规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针
