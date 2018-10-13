//水草类
function Aqu(color, num, amp){
    this.startPoint = [];
    this.endPointX = [];
    this.endPointY = [];
    this.amp = [];
    this.beta = 0;
    this.color = (color == undefined)?"#3b154e":color;
    this.num = (num == undefined)?80:num;
}
     
Aqu.prototype.init = function(){
    for(var i=0; i<this.num; i++){
         this.startPoint[i] = Math.random()*20 + i*10;
         this.endPointX[i] = this.startPoint[i];
         this.endPointY[i] = canvas.height/1.5 - Math.random()*50;
         this.amp[i] = Math.random()*10 + 40;
     }
 }

Aqu.prototype.draw = function(ctx, del){
     ctx.save();
     ctx.lineWidth = 14;
     ctx.lineCap = "round";
     ctx.globalAlpha = 0.8;
     ctx.strokeStyle =this.color;
     
     //Math.sin的应用
     this.beta += del * 0.0012;
     var l = Math.sin(this.beta);
     
     for(var i=0; i<this.num; i++){
        ctx.beginPath();
        ctx.moveTo(this.startPoint[i], canvas.height);
        
        //周期性改变水草的顶点X坐标
        this.endPointX[i] = this.startPoint[i] + l*this.amp[i]
        
        ctx.quadraticCurveTo(this.startPoint[i],canvas.height-120,this.endPointX[i],this.endPointY[i]);
        ctx.stroke();
    }
     ctx.restore();
 }