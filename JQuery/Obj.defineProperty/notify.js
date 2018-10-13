/**
 * 发布订阅模式
 */
class Dep {
  constructor() {
    this.subs = [];
  }
  // 增加订阅者
  addSub(sub) {
    if (this.subs.indexOf(sub) < 0) {
      this.subs.push(sub);
    }
  }

  // 通知订阅者
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

const dep = new Dep();
const sub1 = {
  update() {
    console.log('sub1 update');
  }
}
const sub2 = {
  update() {
    console.log('sub2 update');
  }
}

dep.addSub(sub1);
dep.addSub(sub2);
dep.notify();  // 通知订阅者事件发生，触发他们的更新函数
