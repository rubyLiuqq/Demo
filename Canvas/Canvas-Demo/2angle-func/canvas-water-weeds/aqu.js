//水草类
function Aqu(color = '#3b154e', num = 80) {
  this.startPoint = [];
  this.endPointX = [];
  this.endPointY = [];
  this.amp = [];
  this.beta = 0;
  this.color = color;
  this.num = num;
}

Aqu.prototype.init = function() {
  for(let i = 0; i < this.num; i++) {
    this.startPoint[i] = Math.random() * 20 + i * 10;
    this.endPointX[i] = this.startPoint[i];
    this.endPointY[i] = canvas.height / 2 - Math.random() * 80;
    this.amp[i] = Math.random() * 10 + 40;
  }
}

Aqu.prototype.draw = function(ctx, del) {
  ctx.save();
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.8;
  ctx.strokeStyle = this.color;

  // Math.sin的应用
  this.beta += del * 0.0012;

  for(let i = 0; i < this.num; i++) {
    ctx.beginPath();
    ctx.moveTo(this.startPoint[i], canvas.height);

    // 周期性改变水草的顶点X坐标
    this.endPointX[i] = this.startPoint[i] + Math.sin(this.beta) * this.amp[i];

    ctx.quadraticCurveTo(this.startPoint[i], canvas.height - 200, this.endPointX[i], this.endPointY[i]);
    ctx.stroke();
  }
  ctx.restore();
}
