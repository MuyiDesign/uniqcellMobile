(function($) {
  // 'use strict';

  $(document).ready(function () {
    $('#footer').load('footer.html');
    $("body").addClass("complete");
      $(".loader").addClass("complete");
    setTimeout(function() {
      
    },0)
    setTimeout(function() {
      $("#banner").addClass("complete")
    },500)
  });

  


  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $("header").addClass("fixed")
    }else {
      $("header").removeClass("fixed")
    }

    // 根据滚动距离设置透明度
    var cc = 1 - $(window).scrollTop()/$(window).height()
    // console.log(1 - $(window).scrollTop()/$(window).height())
    $("#banner").css("opacity",cc)
  });

})(jQuery);
