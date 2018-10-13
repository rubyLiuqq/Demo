/**
 * 检测 defineProperty 属性，可以在console的地方做文章
 */
const obj = {};

let val = 'ceshi';
Object.defineProperty(obj, 'name', {
  get() {
    console.log('劫持了你的取值操作啦');
    return val;
  },
  set(newVal) {
    console.log('劫持了你的赋值操作啦');
    val = newVal;
  }
});

console.log(obj.name);
obj.name = 'ceshi1';
console.log(obj.name);

/**

劫持了你的取值操作啦
ceshi
劫持了你的赋值操作啦
劫持了你的取值操作啦
ceshi1

 */
