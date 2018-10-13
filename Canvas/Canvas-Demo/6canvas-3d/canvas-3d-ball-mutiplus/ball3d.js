function Ball3d(radius,color){
    if(radius === undefined) {radius = 20;}
    if(color === undefined){ color = '#0000ff';}
    this.x = 0;
    this.y = 0;
    this.xpos = 0;
    this.ypos = 0;
    this.zpos = 0;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.radius = radius;
    this.color = color;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
    this.visible = true;
}

Ball3d.prototype.draw = function (context) {
    context.save();
    context.translate(this.x,this.y);   // 平移
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}
