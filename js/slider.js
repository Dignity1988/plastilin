jQuery(document).ready(function(){
  /* the non-finished logic of handmade slider
var slides=$(".slides ").length();
var slideWidth=$(".slide").height();
Jquery('arrow-right').on('click', function(e){
$('slide').position(left+slidewidth);
  /*count all elements in slider*/
/* width+() outer width of the next node element within list
if click counter is reached the last element of the node list reset counter and start it with first outer width multiply value.

var dot="<li class="dot"></li>";
var arrow="<div class="arrow"></div>";*/
/*if browser width is less than 768px*/
if (window.matchMedia('(max-width:768px)').matches){
/*add the dots*/
$('.full').attr('src', './img/build/top_mobile.png');
$('.mobile').css('display', 'block');
$('h1').css('display', 'block');
}
else{
$('.full').attr('src', './img/build/top_row.png');
$('.mobile').css('display', 'none');
$('h1').css('display', 'none');
}
jQuery(window).resize(function(){
if (window.matchMedia('(max-width:768px)').matches){
/*add the dots*/
$('.full').attr('src', './img/build/top_mobile.png');
$('.mobile').css('display', 'block');
$('h1').css('display', 'block');
}
else{
$('.full').attr('src', './img/build/top_row.png');
$('.mobile').css('display', 'none');
$('h1').css('display', 'none');
}
});
});
