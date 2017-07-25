$(document).ready(function(){
  $('ul.tabs').tabs();
})

$('.background').hide();

function test() {
  $("#bg img").first().appendTo('#bg').fadeOut(5000);
  $("#bg img").first().fadeIn(5000);

  setTimeout(test, 7000);
}
test();
