jQuery(document).ready(function(){
  jQuery(".slider-1").slick({

  // normal options...
  infinite: true,
        slidesToShow: 2,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  prevArrow: '',

  // the magic
  responsive: [{

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
          arrows: false,
      },

    }]  });


jQuery(".slider-2").slick({

// normal options...
infinite: true,
      slidesToShow: 2,
arrows: true,
nextArrow: '<button type="button" class="slick-next">Next</button>',
prevArrow: '',

// the magic
responsive: [{
arrows: false,
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
        arrows: false,
      dots: true
    },

  }]  });



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
    $('.heading-nav').click (function (e) {
        e.preventDefault();
  $('.slider-1').slick('slickGoTo', jQuery(this).attr('data-index'));
    });
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
    $('.heading-nav').click (function (e) {
        e.preventDefault();
  $('.slider-1').slick('slickGoTo', jQuery(this).attr('data-index'));
    });
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
