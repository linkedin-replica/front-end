/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function () {

    var docElem = document.documentElement,
        header = document.querySelector('.inner-header'),
        didScroll = false,
        changeHeaderOn = 150,
        changeCartOn = 1;

    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 200);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'shrink');
        }
        else {
            classie.remove(header, 'shrink');
        }

        if($(window).width() >= 1200){
            if (sy >= changeCartOn ) {
                $(".search-types").addClass('isSticky');
                $(".cart").addClass('isSticky');
            } else {
                $(".cart").removeClass('isSticky');
                $(".search-types").removeClass('isSticky');
            }
        }


        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();