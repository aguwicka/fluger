$(function () {
  $('.location-modal, .call-us-modal, .login-modal').magnificPopup({
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

function customSelect(){
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("select-wrap");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            $(this).parent().parent().find('select').focus();
            $(this).parent().parent().find('select').trigger('focusout');
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      // closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}

//toggle mobile menu
let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});

$(function () {
    //slider on main page
    slidersOnMainP();
    //custom select
    customSelect();
  });
