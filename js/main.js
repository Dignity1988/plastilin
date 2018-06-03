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
  arrows: false,
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true
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
      dots: true
    },

  }]  });
});
