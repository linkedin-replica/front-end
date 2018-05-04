/* jshint ignore:start */
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    'use strict';
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    'use strict';
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
/* jshint ignore:end */

/* globals moment, Cookies */
'use strict';
var helpers = {};

helpers.addTeamMember = function(el) {
  var $template = $(el).closest('fieldset').find('.invitation-template:first').clone();
  $template.find('input').each(function(){
    $(this).val('');
  });
  $(el).closest('.cols').before($template);
};

/**
 * [tabs - Simple tabs.]
 * @param  {DOM Element} el [The element that received the change]
 * @events {none}
 * @return {none}
 * Note    The tabs activators are wrapped in an element with data-target giving
 *         the ID of the tabs content. The tab can be applied to lists and links
 *         and it will recognize the target using its index in the list or it can
 *          also be applied to the change event of radio buttons. The IDs of the
 *          radio buttons are used as class selectors to get the required tab.
 */

helpers.tabs = function(el, ev) {
  var target;
  if(ev !== undefined && $(ev.target).is('a')) {
    console.log(1);
    target = $(el).data('target');
    $(ev.target).closest('.tabs').find('.active').removeClass('active');
    $(ev.target).parent().addClass('active');
    var index = $(ev.target).parent().index();
    $('#' + target).find('.tab--active').removeClass('tab--active');
    $('#' + target).find('.tab:eq(' + index + ')').addClass('tab--active');
  } else if(ev !== undefined && $(ev.target).is('input')) {
    var id = $(el).attr('id');
    target = $(el).closest('[data-target]').data('target');
    $('#' + target).find('.tab--active').removeClass('tab--active');
    $('#' + target).find('.' + id).addClass('tab--active');
  } else {
    console.log(3);
    return
  }
};

/* globals helpers, Pikaday */
'use strict';
$(document).ready(function(){

  $('body > header').sticky();
  $('#cart-body').sticky({topSpacing:100});
  // Injecting SVG-sprite
  var svgPath = $('#svg_path').val();
  $.get(svgPath, function(data) {
    var $icons = $('<div class="icons"></div>').html(new XMLSerializer().serializeToString(data.documentElement));
    $('body').prepend($icons);
  });

  if ($('.subscription-choices').length > 0) {
    $('.subscription-choices').slick({
      infinite: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: '<button><svg><use xlink:href="#shape-prev" /></svg></button>',
      nextArrow: '<button><svg><use xlink:href="#shape-next" /></svg></button>'
    });
  }
  if ($('.head-slider').length > 0) {
    $('.head-slider').slick({
      infinite: false,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  //if($('.dishes-list').length > 0) {
  //  helpers.drawCart();
  //}
  if($(window).innerWidth() < 767) {
    var $mobileCart = $('.sign .cart-menu');
    $('.mobile-menu').after($mobileCart);
  }

  $(window).on('resize', function(){
    var $mobileCart = $('header .cart-menu');
    if($(window).innerWidth() < 767) {
      $('.mobile-menu').after($mobileCart);
    } else {
      if($('.cart-menu').parent().is('.with-menu')) {
        $('.menu-wrapper .sign').prepend($mobileCart);
      }
    }
  });

});
$(document).on('click', '[data-action]', function(ev){
  ev.preventDefault();
  var action = $(this).data('action');
  helpers[action](this, ev);
});
$(document).on('change', '[data-listen] input[type="radio"]', function(ev){
  var action = $(this).closest('[data-listen]').data('listen');
  helpers[action](this, ev);
});
var picker = new Pikaday({
  disableDayFn: function(date){
    // Disable Monday and Tuesday
    return (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5 || date.getDay() === 6 );
  },
  minDate: moment().add({days: 1}).toDate(),
  field: document.getElementById('start-date')
});
$(document).on('click', '.mobile-menu', function(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  if($('.mobile-overlay').length > 0) {
    $('.menu-opened').removeClass('menu-opened');
    $('.mobile-overlay').remove();
  } else {
    $('body header').addClass('menu-opened');
    $('body').append('<div class="mobile-overlay"></div>');
  }
  if($('.mobile-cart-overlay').length > 0) {
    $('.open-cart').removeClass('open-cart');
    $('.mobile-cart-overlay').remove();
  }
});
$(document).on('click', '.sticky-wrapper', function(){
  if($('.mobile-overlay').length > 0) {
    $('.menu-opened').removeClass('menu-opened');
    $('.mobile-overlay').remove();
    $('.settings').removeClass('opened');
  }
  if($('.mobile-cart-overlay').length > 0) {
    $('.open-cart').removeClass('open-cart');
    $('.mobile-cart-overlay').remove();
  }
});
$(document).on('click', '.mobile-overlay', function(ev){
  ev.preventDefault();
  $('.menu-opened').removeClass('menu-opened');
  $('.settings').removeClass('opened');
  $(this).remove();
});
$(document).on('click', '.mobile-cart-overlay', function(ev){
  ev.preventDefault();
  $('.open-cart').removeClass('open-cart');
  $(this).remove();
});
$( '#employees-number' ).change(function() {
  var noEmployees = $(this).val();

  var planPrice = $('#plan_price_'+   $('input[name="plan"]:checked').attr('id')).val();
  var totalMoney = planPrice * noEmployees ;
  $('#no-of-employees').html(noEmployees +' Employees');
  $('#total_price').html('EGP '+ totalMoney);
});

$( '.plan_select' ).change(function() {
  var noEmployees = $( '#employees-number option:selected').val();
  if(noEmployees) {
    var planPrice = $('#plan_price_' + $(this).attr('id')).val();
    var totalMoney = planPrice * noEmployees;
    $('#no-of-employees').html(noEmployees + ' Employees');
    $('#total_price').html('EGP ' + totalMoney);
  }
});
$(document).on('click', '.settings > a', function(ev) {
  ev.preventDefault();
  if($(window).innerWidth() < 767) {
    $('.settings').addClass('opened');
    $('body').append('<div class="mobile-overlay"></div>');
  }
});
$(document).on('click', '.cart-menu > a', function(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  if($(window).innerWidth() < 767) {
    if($('.mobile-cart-overlay').length > 0) {
      $('.open-cart').removeClass('open-cart');
      $('.mobile-cart-overlay').remove();
    } else {
      $(this).closest('header').toggleClass('open-cart');
      $('body').append('<div class="mobile-cart-overlay"></div>');
    }
    if($('.mobile-overlay').length > 0) {
      $('.menu-opened').removeClass('menu-opened');
      $('.mobile-overlay').remove();
    }
  }
});
$(document).on('click', '#cart-body .cart-widget h1', function(){
  if($(window).innerWidth() < 767) {
    $(this).closest('#cart-body-sticky-wrapper').toggleClass('expanded');
  }
});

$(".rate-order").rateYo({
  rating: 0,
  fullStar: !0,
  spacing: "20px",
  normalFill: "#ffaf83",
  ratedFill: "#ffff00",
  starWidth: "20px"
}),
    $(document).on("click", "[data-action]", function (a) {
      a.preventDefault();
      var b = $(this).data("action");
      helpers[b](this, a)
    }), $(document).on("change", '[data-listen] input[type="radio"]', function (a) {
  var b = $(this).closest("[data-listen]").data("listen");
  helpers[b](this, a)
});