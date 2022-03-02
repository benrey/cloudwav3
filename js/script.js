$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('transparent');
    $('con').addClass('transparent')
  } else {
    $('nav').removeClass('transparent');
    $('con').removeClass('transparent');
  }
});
$('.navbar-collapse').on('show.bs.collapse', function (e) {
  $('con').addClass('height');
})
$('.navbar-collapse').on('hide.bs.collapse', function (e) {
  $('con').removeClass('height');
})
var icon = document.getElementsByClassName("icon-bars");
var pushDown = document.getElementById("push");

$(document).ready(function(){
  $(icon[0]).click(function(){
    if($(pushDown).hasClass("push")){
      pushDown.className = "pushUp";
    }
    else{
      pushDown.className = "push";
    }
  })
});