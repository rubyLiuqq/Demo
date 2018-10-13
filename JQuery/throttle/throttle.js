function throttle(func, wait = 100) {
  let timer = {};
  let previous;

  return function() {
    const context = this;  // 保存函数调用时的上下文和参数，传递给 fn
    const args = arguments;
    const now = +new Date();
    console.log(timer, previous, now);

    // 还在周期之中
    if (previous && now < previous + wait) {
      clearTimeout(timer);

      timer = setTimeout(function () {
        previous = now;
        func.apply(context, args);
      }, wait);
    } else {
      previous = now;
      func.apply(context, args);
    }
  }
}
