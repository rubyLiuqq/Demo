const lazyLoad = (function () {
  var clock;

  function init() {
    $(window).on("scroll", function () {

      if (clock) {
        clearTimeout(clock);
      }
      clock = setTimeout(function () {
        checkShow();
      }, 200);
    })
    checkShow();
  }

  function checkShow() {
    $(".lazyload img").each(function () {
      const $cur = $(this);
      if ($cur.attr('isLoaded')) {
        return;
      }
      if (shouldShow($cur)) {
        showImg($cur);
      }
    })
  }

  /**
   * 检测节点是否需要展示
   * @param {*} $node
   */
  function shouldShow($node) {
    var scrollH = $(window).scrollTop(),
        winH = $(window).height(),
        top = $node.offset().top;
    console.log(top, winH, scrollH);
    return ((top < winH + scrollH) ?  true : false);
  }

  /**
   * 展示图片，设置src 和 isLoaded 值
   * @param {*} $node
   */
  function showImg($node) {
    $node.attr('src', $node.attr('data-img'));
    $node.attr('isLoaded', true);
  }

  return {
    init: init
  }
})();
