$(function () {
  $('.location-modal, .call-us-modal, .login-modal, .sorting-modal, .category-modal , .palette__modal,.color__modal, .filters-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 500, 
    midClick: true,
    modal: true,
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: 'my-mfp-zoom-in',
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$.magnificPopup.defaults.callbacks = {
    open: function() {
        $('body').addClass('modal');
    },
    close: function() {
        // Wait until overflow:hidden has been removed from the html tag
        setTimeout(function() {
            $('body').removeClass('modal');
        }, 100)
    }
};


$("body").on('focusin', "input[name='tel'], input[name='login_tel'], input[name='phone']", function () {
  $(this).inputmask('mask', { mask: "+7(999) 999-9999", greedy: false});
});



function slidersOnMainP(){
 $(".mainpage-news__inner").owlCarousel({
  responsive:{
    0:{
      items:1,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    480:{
      items:2,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    992:{
      items:3,
      stagePadding: 0,
      autoplay: true
    }
  },
  dots: false,
  items:3,
  autoplay: true,
  autoHeight: true,
  margin: 25,
  center: false,
});
 $(".all-products--pop").owlCarousel({
  responsive:{
    0:{
      items:1,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    480:{
      items:2,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    992:{
      items:4,
      stagePadding: 0,
      nav: true,
      autoplay: true,
    }
  },
  dots: false,
  items:4,
  autoplay: true,
  autoHeight: true,
  margin: 25,
  center: false,
  navText : ["<svg width='13' height='23' viewBox='0 0 13 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.867065 11.9966L10.7702 23.0001L13.0001 20.9932L4.90315 11.9966L13.0001 3.00006L10.7702 0.993164L0.867065 11.9966Z'/></svg>","<svg width='13' height='23' viewBox='0 0 13 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13 11.9966L3.0969 0.993107L0.867015 3L8.96391 11.9966L0.867015 20.9931L3.0969 23L13 11.9966Z' fill='#192C5A'/></svg>"]
});
 $(".all-products--new").owlCarousel({
  responsive:{
    0:{
      items:1,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    480:{
      items:2,
      stagePadding: 40,
      nav: false,
      autoplay: false,
    },
    992:{
      items:4,
      stagePadding: 0,
      nav: true,
      autoplay: true,
    }
  },
  items:4,
  dots: false,
  autoplay: true,
  autoHeight: true,
  margin: 25,
  center: false,
  navText : ["<svg width='13' height='23' viewBox='0 0 13 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.867065 11.9966L10.7702 23.0001L13.0001 20.9932L4.90315 11.9966L13.0001 3.00006L10.7702 0.993164L0.867065 11.9966Z'/></svg>","<svg width='13' height='23' viewBox='0 0 13 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M13 11.9966L3.0969 0.993107L0.867015 3L8.96391 11.9966L0.867015 20.9931L3.0969 23L13 11.9966Z' fill='#192C5A'/></svg>"]
});

}
$(function () {
    //slider on main page
    slidersOnMainP();

});


//toggle mobile menu
let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
    if (navBar.classList.contains('toggle')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', '');
    }
    
});

$(document).ready(function() {
    $('#product__carousel').owlCarousel({
        items: 1,
        dots: true,
        dotsContainer: '.slider-nav .thumbs',
    })
});
$('.thumb').click(function(){
    $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
});

$(document).ready(function(){
  $('.row__count-and-price__input').each(function(){
    let colunt = $(this).find('input').val();
    if (colunt == 0) {
      $(this).closest('.count-and-price__wrap').addClass('null');
    }
  });
});

$(document).on('click', '.row__count-and-price__input .minus', function(){
  var $input = $(this).closest('.row__count-and-price__input').find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 0 ? 0 : count;
  if (count == 0) {
    $(this).closest('.count-and-price__wrap').addClass('null');
  } else {
    $(this).closest('.count-and-price__wrap').removeClass('null');
  }
  $input.val(count);
  $input.change();
  return false;
});

$(document).on('click', '.row__count-and-price__input .plus', function(){
  var $input = $(this).closest('.row__count-and-price__input').find('input');
  $input.val(parseInt($input.val()) + 1);
  if ($input.val() > 0) {
    $(this).closest('.count-and-price__wrap').removeClass('null');
  }
  $input.change();
  return false;
});

$(document).ready(function() {
    $('.select-sort').select2({
      minimumResultsForSearch: -1,
      templateResult: function (item) {
        var $span = $("<img src='" + $(item.element).data('image') + "'/> <span>" + item.text + "</span>");
        return $span;
      },
      templateSelection: function (item) {
        //console.log(item.element.dataset.image);
        var $span = $("<img src='"+ item.element.dataset.image +"'/> <span>" + item.text + "</span>");
        return $span;
      }
    });
    $('.select-sort').change(function(){
      let val_select = $('.select-sort').find(":selected").val();
      let image_select = $('.select-sort').find(":selected").data('image');
      $('.sorting-selected-js span').text(val_select);
      $('.sorting-selected-js img').text(image_select);
    });
});

$(function () {
  $(document).on('click', '.mobile-sort-item-js' , function() {
    let sort_name = $(this).data('sortname');
    let sort_image = $(this).data('sortimage');
    //let sort_val = $(this).data('val');
    $('.sorting-selected-js span').text(sort_name);
    $('.sorting-selected-js img').attr('src' , sort_image);
    //console.log(sort_val);
    $('.select-sort').val(sort_name);
    $('.select-sort').trigger('change');
    $.magnificPopup.close();
  })
});
/*
$('body').on('swipeup swipedown', function(){
  if ($(window).width() < 993) {
    $.magnificPopup.close();
  }
});*/

(function () {
  // initializes touch and scroll events
      var supportTouch = $.support.touch,
          scrollEvent = "touchmove scroll",
          touchStartEvent = supportTouch ? "touchstart" : "mousedown",
          touchStopEvent = supportTouch ? "touchend" : "mouseup",
          touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
  
      // handles swipeup and swipedown
      $.event.special.swipeupdown = {
          setup: function () {
              var thisObject = this;
              var $this = $(thisObject);
  
              $this.bind(touchStartEvent, function (event) {
                  var data = event.originalEvent.touches ?
                          event.originalEvent.touches[ 0 ] :
                          event,
                      start = {
                          time: (new Date).getTime(),
                          coords: [ data.pageX, data.pageY ],
                          origin: $(event.target)
                      },
                      stop;
  
                  function moveHandler(event) {
                      if (!start) {
                          return;
                      }
  
                      var data = event.originalEvent.touches ?
                          event.originalEvent.touches[ 0 ] :
                          event;
                      stop = {
                          time: (new Date).getTime(),
                          coords: [ data.pageX, data.pageY ]
                      };
  
                      // prevent scrolling
                      if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
                          event.preventDefault();
                      }
                  }
  
                  $this
                      .bind(touchMoveEvent, moveHandler)
                      .one(touchStopEvent, function (event) {
                          $this.unbind(touchMoveEvent, moveHandler);
                          if (start && stop) {
                              if (stop.time - start.time < 1000 &&
                                  Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
                                  Math.abs(start.coords[0] - stop.coords[0]) < 75) {
                                  start.origin
                                      .trigger("swipeupdown")
                                      .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
                              }
                          }
                          start = stop = undefined;
                      });
              });
          }
      };
  
  //Adds the events to the jQuery events special collection
      $.each({
          swipedown: "swipeupdown",
          swipeup: "swipeupdown"
      }, function (event, sourceEvent) {
          $.event.special[event] = {
              setup: function () {
                  $(this).bind(sourceEvent, $.noop);
              }
          };
          //Adds new events shortcuts
          $.fn[ event ] = function( fn ) {
              return fn ? this.bind( event, fn ) : this.trigger( event );
          };
          // jQuery < 1.8
          if ( $.attrFn ) {
              $.attrFn[ event ] = true;
          }
      });
  
  })();

$(document).ready(function() {
    $(".color__items").each(function (indx, el) {
        $(".img__item", el).click(function () {
            let color__attribute = $(this).find(".item__name", el).text();
            let color__data = $(this).find(".cat__palette", el).data("color");
            $("#input__val").val(color__attribute);
            $("#color__style").css("background", color__data);
        });
    });
});

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

//palette hover class
$('.popup__color-item').hover(
    function(){$(this).toggleClass('active__palette');}
);

import  Slider from './slider';


$(() => {
    console.log('12345');
    Slider.getInstance('banner', '.banner .slider.owl-carousel');
});

//toggle product text
$(document).ready(function(){
    $(".button__close").click(function(){
        $('.content__text').toggleClass('content__close');
        $(this).text($(this).text() == 'Свернуть' ? 'Показать' : 'Свернуть');
    });
});






