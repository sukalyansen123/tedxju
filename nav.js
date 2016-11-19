$(document).ready(function(){

    $('#navbar li').on('click', function(){
        //$(this).addClass('active').removeClass('off').siblings().addClass('off').removeClass('active'); // no need to add .off
        $(this).addClass('active').siblings().removeClass('active');

    });
})



var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('li').addClass('active');
    }
  });
});
