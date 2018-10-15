## 小球闪烁运动

ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range;

改变小球的 scale属性，centerScale用于中和 sin为负数的情况
