$(document).ready(function () {

    function detectmob() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || navigator.userAgent.match(/Opera Mini/i)
            || navigator.userAgent.match(/IEMobile/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }


    var boxInner = $('.box__inner'),
        carousel = $('.carousel'),
        dropdown = $(".dropdown"),
        collapseIn = $('.collapse.in'),
        accordion = $('.panel-collapse'),
        footerh4 = $('.footer h4'),
        body = $('html, body');


    footerh4.on('click', function (event) {
        event.preventDefault();
        var that = $(this);
        that.toggleClass('open');
        that.next("ul.footerNav").toggleClass("open");
        body.animate({scrollTop: that.offset().top}, 1500);
    });
    boxInner.matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    carousel.carousel();
    $(window).resize(function () {
        if ((Modernizr.touch || $(window).width() < 992) && detectmob()) {

            dropdown.click(
                function () {
                    $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                    $(this).toggleClass('open');
                }
            );

        } else {
            dropdown.hover(
                function (evt) {
                    evt.stopPropagation();
                    $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                    $(this).toggleClass('open');
                },
                function (evt) {
                    evt.stopPropagation();
                    $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                    $(this).toggleClass('open');
                }
            );

        }
    }).resize();

    collapseIn.prev('.panel-heading').addClass('active');
    accordion.on('shown.bs.collapse', function (e) {
        e.preventDefault();
        var $panel = $(this).closest('.panel');
        body.animate({
            scrollTop: $panel.offset().top
        }, 500);
        $(e.target).prev('.panel-heading').addClass('active');
    }).on('hide.bs.collapse', function(e) {
        $(e.target).prev('.panel-heading').removeClass('active');
    });


});