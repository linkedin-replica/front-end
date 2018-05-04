/*$('.radio > label > input').change(function(){
 if ($(this).is(':checked')) {
 // append goes here
 $('.radio > label > input').css('background-color','#cccccc');
 $(this).css('background-color','#ef5b2e');
 }
 });*/
var cart = $(".cart-full-item-order");
$(".add-comment")
$(".cart-setting .add-comment-btn").click(function () {
    $(".txt-comment").removeClass("hidden")
});
$(document).scroll(function () {
    if ($('#search_result').offset() !== undefined) {
        var top = $('.meals').offset().top - $(document).scrollTop();
        if (top < 5) {
            //$(".search-types").addClass('isSticky');
            $(".cart").addClass('isSticky');
            //$("#filter_menu").addClass('isSticky');
        }
        else if (top > 5) {
            $(".cart").removeClass('isSticky');
            //$("#filter_menu").removeClass('isSticky');
            //$(".search-types").removeClass('isSticky');
        }
    }
});
//
$(document).ready(function() {
    var item = $(window.location.hash.replace('#', '#i'));
    $('#'+window.location.hash.replace('#','i')).addClass('active');
    if (item.length > 0) {
        $('html, body').animate({
            scrollTop: item.offset().top - 60
        }, 2000);
    }
    /*setTimeout(removeActiveClass, 5000);*/
});

function removeActiveClass(){
    var item = $(window.location.hash.replace('#', '#i'));
    $('#'+window.location.hash.replace('#','i')).removeClass('active');
}


 jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').slideToggle('expand');
    	     })
        });
		
		jQuery(function($){
    	     $( '.search-btn' ).click(function(){
    	     $('.responsive-srch').slideToggle('expand');
    	     })
        })

     
