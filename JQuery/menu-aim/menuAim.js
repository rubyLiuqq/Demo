var $menu = $(".hovershow-menu");
// jQuery-menu-aim: <meaningful part of the example>
// Hook up events to be fired on menu row activation.
$menu.menuAim({
  activate: function (li) {
    var menuId = $(li).attr("data-submenu-id");
    $("#" + menuId).show();
  },
  deactivate: function () {
    $(".hs-item").hide();
  },
  enter: function () {
    this.activate();
  },
  exitMenu: function () {
    return true;
  }
});
$(".hs-item").mouseover(function () {
  $(this).show();
});
$(".hs-item").mouseleave(function () {
  $(this).hide();
});
