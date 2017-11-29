

// Establishing Global Variables

var menuActive = false;



// Hamburger Menu Triggers and code

$(document).ready(function(){
  menuActive = false;
  $('.menu-wrap').css('display','none');
});

$('.hamburger-menu').on('click', function() {
  if (menuActive === false) {
    $('.menu-wrap').css('display','block');
    menuActive = true;
  } else if (menuActive === true) {
    $('.menu-wrap').css('display','none');
    menuActive = false;
  } {

  }
  $('.bar').toggleClass('animate');
});
