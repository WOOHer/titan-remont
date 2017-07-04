'use strict';

//map
ymaps.ready(init);
var myMap,
    myPlacemark1,
    myPlacemark2;

function init(){
    myMap = new ymaps.Map("map", {
        center: [58.605717, 49.665167],
        zoom: 12,
        controls: ["default","routeEditor","smallMapDefaultSet"],
    });

    myMap.controls
        .add("trafficControl","typeSelector")
    myMap.controls
        .get("trafficControl")
        .showTraffic()
    myMap.controls
        .remove("geolocationControl")
        .remove("rulerControl")
        .remove("searchControl");

    myMap.behaviors.disable([
        'scrollZoom', 'drag'
    ]);

    myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/icons/map-marker.svg',
        iconImageSize: [46, 58],
        iconImageOffset: [-23, -70]
    });


    myPlacemark1 = new ymaps.Placemark([58.605717, 49.665167], {
        balloonContentHeader: '<img src="img/icons/favic.ico" alt="Офис" title="Офис" class="map__pic"><span class="map__red">Киров</span>',
        balloonContentBody: 'К.Либкнехта 68',
        balloonContentFooter: 'Офис компании',
        hintContent: 'Ломбард ТИТАН',
    });

    myPlacemark2 = new ymaps.Placemark([58.635717, 49.635167], {
        balloonContentHeader: '<img src="img/icons/favic.ico" alt="Офис" title="Офис" class="map__pic"><span class="map__red">Киров</span>',
        balloonContentBody: 'К.Либкнехта 68',
        balloonContentFooter: 'Офис компании',
        hintContent: 'Ломбард ТИТАН',
    });

    myPlacemark3 = new ymaps.Placemark([58.644549, 49.618414], {
        balloonContentHeader: '<img src="img/icons/favic.ico" alt="Офис" title="Офис" class="map__pic"><span class="map__red">Киров</span>',
        balloonContentBody: 'К.Либкнехта 68',
        balloonContentFooter: 'Офис компании',
        hintContent: 'Ломбард ТИТАН',
    });

    myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
    myMap.geoObjects.add(myPin);
}

//preloader
var preloader = (function(){
  var percentsTotal = 0,
      preloader = $('.preloader');

      var imgPath = $('*').map(function(ndx, element){
        var background = $(element).css('background-image'),
            img = $(element).is('img'),
            path = '';

            if (background != 'none') {
              path = background.replace('url("', '').replace('")', '');
            }

            if (img) {
              path = $(element).attr('src');
            }

            if (path) return path
      });

            var setPercents = function (total, current) {
              var percents = Math.ceil(current / total * 100);

              $('.preloader__percents').text(percents + '%');

              if (percents >= 100) {
                preloader.fadeOut();
              }
            }

            var loadImages = function (images) {
              if (!images.length) preloader.fadeout();

              images.forEach(function (img, i, images) {
                var fakeImage = $('<img>', {
                  attr : {
                    src : img
                  }
                });

                fakeImage.on('load error', function() {
                  percentsTotal++;
                  setPercents(images.length, percentsTotal);
                });
              });
            }

      return {
        init: function () {
          var imgs = imgPath.toArray();

          loadImages(imgs);
        }
      }
}());
/*
var slider = (function () {
    var counter = 1,
        duration = 300,
        inProcess = false;

    var moveSlide = function (container, direction) {
        var items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            direction = direction == 'down' ? 100 : -100;

        if (counter >= items.length) counter = 0;

        var reqItem = items.eq(counter);

        activeItem.animate({
            'top': direction + '%'
        }, duration);

        reqItem.animate({
            'top': 0
        }, duration, function () {
            activeItem.removeClass('active')
                .css('top', '-' + direction + '%');
            $(this).addClass('active');

            inProcess = false;
        });
    }

    return {
        init: function () {
            $('.slider__controls-top').on('click', function (e) {
                e.preventDefault();

                if (!inProcess) {
                    inProcess = true;

                    moveSlide($('.slider_first'), 'down');
                    moveSlide($('.slider_opposite'), 'up');

                    counter++;
                }
            });
        }
    }
}());
*/
var slideShow = (function () {
    return {
        init: function () {
            $('.move-arrow').on('click', function (e) {
                e.preventDefault();

                var $this = $(this),
                    container = $this.closest('.slider').find('.slider__section'),
                    link = $this.closest('.thumbnail__bg').siblings('.slideshow__link'),
                    path = link.attr('href'),
                    display = container.find('.slider__section_pic'),
                    preloader = $('#preloader'),
                    fadedOut = $.Deferred(),
                    loaded = $.Deferred();
                display.hide();

                display.fadeOut(function() {
                    fadedOut.resolve();
                });

                fadedOut.done(function () {
                    preloader.show();

                    display.attr('src', path).on('load', function(){
                        loaded.resolve();
                    });
                });

                loaded.done(function(){
                    preloader.hide();
                    display.show();
                });
            });
        }
    }
}());

$(function () {
    preloader.init();
    slideShow.init();

    var deferred = $.Deferred();
    var deferred2 = $.Deferred();

    $('.res').on('click', function (e) {
        e.preventDefault();

        setTimeout(function(){
            deferred.resolve();
        }, 2000);

    });

    $('.rej').on('click', function (e) {
        e.preventDefault();

        setTimeout(function(){
            deferred2.resolve();
        }, 3000);

    });

    deferred.done(function() {
        console.log('deferref is done!!');
    });

    deferred2.fail(function() {
        console.log('deferred is failed!!');
    });

    $.when(deferred, deferred2).done(function(){
        console.log('Оба объекта в состоянии resolve');
    });

});

//flip
// $(document).ready(function(){
//     $('.auth-btn').on('click', function(e){
//         e.preventDefault();
//         $('.flipper').addClass('.flipper__back');
//     });
// });

var button_log = document.querySelector('.auth-btn');

if(button_log) {
    button_log.onclick = function(e) {
        let flipper = document.querySelector('.flipper');
        let button  = document.querySelector('.auth-btn');
        let main    = document.querySelector('.main-btn');
        flipper.classList.add("flip-active");
        button.style.display = 'none';
        main.onclick = function(e) {
            flipper.classList.remove("flip-active");
            button.style.display = 'block';
        };
    };
};

//hamburger
$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        $('body').toggleClass('fixed');
    });
    $('.menu__picker').on('click', function(){
        $('.blog__menu').toggleClass('shown');
    });
    $('.blog-menu__item').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.blog__menu').toggleClass('shown');
    });
});

//form
$(function () {
    $('#order-form').on('submit', function(e) {
        e.preventDefault();

        var
            form = $(this),
            formData = form.serialize();

        $.ajax({
            url: './assets/php/mail.php',
            type: 'POST',
            data: formData
            // success: function (data) {
            //
            //     var popup = data.status ? '#success' : '#error';
            //
            //     $.fancybox.open({
            //         src  : popup,
            //         type : 'inline',
            //         opts : {
            //             afterClose: function () {
            //                 form.trigger('reset');
            //             }
            //         }
            //     });
            // }
        });
    });

    // $('.popup__close').on('click', function (e) {
    //     e.preventDefault();
    //     $.fancybox.close();
    // });
});
