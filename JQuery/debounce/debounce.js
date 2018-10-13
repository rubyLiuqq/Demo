function debounce(func, delay = 1000) {
  let timer = null;
  return function() {
    const that = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(that, args);
    }, delay);
  }
}
