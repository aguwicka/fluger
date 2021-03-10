$(function () {
  $('.location-modal, .call-us-modal, .login-modal, .sorting-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(function () {
  $('.basket__link').magnificPopup({
    type: 'inline',
    preloader: false,
    showCloseBtn: false,
    closeOnBgClick : true,
    mainClass : 'basket-bg'
  });
});

$("body").on('focusin', "input[name='tel'], input[name='login_tel']", function () {
  $(this).inputmask('mask', { mask: "+79{*}", greedy: false});
});

function slidersOnMainP(){
 $(".mainpage-carousel").owlCarousel({
  loop: false,
  items:1,
  center: true, 
  nav: false,
  dots: true,
  autoplay: true,
  autoHeight: true,
  margin: 20,
});
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
    $('.select').select2();
});