'use strict';
//Navigation
$(document).ready(function(){
    $('.nav__item-link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.nav__item'),
            id = $this.attr('href'),
            section = $(id),
            winPos = section.offset().top;
        item.addClass('active').siblings().removeClass('active');
        $('html,body').stop().animate({scrollTop: winPos},600);
    });

    // $('.offcanvas__item-link').on('click', function(e) {
    //     e.preventDefault();
    //     var $this = $(this),
    //         item = $this.closest('.offcanvas__item'),
    //         id = $this.attr('href'),
    //         section = $(id),
    //         winPos = section.offset().top;
    //     item.addClass('active').siblings().removeClass('active');
    //     $('html,body').stop().animate({scrollTop: winPos},600);
    // });
});



//Footer stucking
var wrapper = document.querySelector('.wrapper');
var footer = document.querySelector('.footer');
var wrapperHeight = wrapper.getBoundingClientRect().height;

if (wrapperHeight < 868) {
    footer.classList.toggle('active');
}

//Onscroll top-pannel hiding
// window.onscroll = function() {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     //var logo = document.getElementById('logo');
//     //var navItems = document.getElementById('nav-items');
//     var orderForm = document.querySelector('.order-form');
//     //var navMini = document.querySelector('.nav__mini');
//
//     if (scrolled == 0) {
//         //hamburger.classList.remove('nav__move');
//         //topBar.style.display = "";
//         //header.style.background = "";
//         //header.style.position = "";
//         //logo.style.margintop = "";
//         //navItems.style.margintop = "";
//         //navMini.style.top = "";
//         //orderForm.style.position = "";
//         //orderForm.style.top = "";
//         //orderForm.style.right = "";
//         //orderForm.classList.remove('active');
//     } else {
//         //navMini.classList.add('nav__move');
//         //topBar.style.display = "none";
//         //header.style.position = "fixed";
//         //logo.style.margintop = "-22px";
//         //navItems.style.margintop = "-30px";
//         //navMini.style.top = "22px";
//         //orderForm.classList.add('active');
//     }
// }

//Offcanvas
var hamburger = document.querySelector('.nav__mini');

hamburger.addEventListener('click', function () {
    var offcanvas = document.querySelector('.offcanvas');
    var orderForm = document.querySelector('.order-form');
    var headerRight = document.querySelector('.header__right');
    var socialIcons = document.querySelector('.social-icons');
    var userBlock = document.querySelector('.user-block');
    var topBarRight = document.querySelector('.top-bar__right');
    var sliderTogglerR = document.getElementById('#slider2');
    var sliderTogglerL = document.getElementById('#slider1');
    var closeX = document.querySelector('.nav__mini_close');

    closeX.classList.add('active');

    closeX.addEventListener('click', function() {
        hamburger.classList.remove('active');
        offcanvas.style.display = 'none';
        closeX.classList.remove('active');
        orderForm.style.zIndex = '';
    })

    hamburger.classList.add('active');
    if (hamburger.classList.contains('active')) {
        offcanvas.style.display = 'flex';
        offcanvas.style.zIndex = '999999';
        orderForm.style.zIndex = '-1';
        headerRight.style.zIndex = '-1';
        socialIcons.style.zIndex = '-1';
        userBlock.style.zIndex = '-1';
        topBarRight.style.zIndex = '-1';
        sliderTogglerR.style.display = 'none';
        sliderTogglerL.style.display = 'none';
    } else {
        hamburger.classList.remove('nav__move');
        offcanvas.style.right = '';
        offcanvas.style.zIndex = '';
        orderForm.style.zIndex = '';
        headerRight.style.zIndex = '1';
        socialIcons.style.zIndex = '999';
        userBlock.style.zIndex = '999';
        topBarRight.style.zIndex = '999';
        sliderTogglerR.style.display = '';
        sliderTogglerL.style.display = '';
    }
})


//Наши цены
// function funcTab(n) {
//     var NTab = document.getElementsByClassName('prices__item').length;
//     for (var i=1; i < NTab+1; i++) {
//         if (i != n){
//             document.getElementById('priceItem'+i).className = 'prices__item';
//             document.getElementById('priceBlock'+i).className = 'prices__block';
//         }
//     }
//     document.getElementById('priceItem'+n).className = 'prices__item active';
//     document.getElementById('priceBlock'+n).className = 'prices__block active';
// }


//Отзывы
function funcTab2(n) {
    var MTab = document.getElementsByClassName('masters__item').length;
    for (var i=1; i < MTab+1; i++) {
        if (i != n){
            document.getElementById('masterItem'+i).className = 'masters__item';
            document.getElementById('feedBlock'+i).className = 'feedbacks__list';
        }
    }
    document.getElementById('masterItem'+n).className = 'masters__item active';
    document.getElementById('feedBlock'+n).className = 'feedbacks__list active';
}



//Otzivi-block
$(document).on('click', ".otzivi__toggler_right", function(){
    var carusel = $(this).parents('.container');
    right_carusel(carusel);
    return false;
});
$(document).on('click',".otzivi__toggler_left", function(){
    var carusel = $(this).parents('.container');
    left_carusel(carusel);
    return false;
});

function left_carusel(carusel){
    var block_width = $(carusel).find('.otzivi__item').outerWidth();
    $(carusel).find(".otzivi__items .otzivi__item").eq(-1).clone().prependTo($(carusel).find(".otzivi__items"));
    $(carusel).find(".otzivi__items").css({"margin-left":"-"+block_width+"px"});
    $(carusel).find(".otzivi__items .otzivi__item").eq(-1).remove();
    $(carusel).find(".otzivi__items").animate({marginLeft: "0px"}, 800);

}
function right_carusel(carusel){
    var block_width = $(carusel).find('.otzivi__item').outerWidth();
    $(carusel).find(".otzivi__items").animate({marginLeft: "-"+ block_width +"px"}, 800, function(){
        $(carusel).find(".otzivi__items .otzivi__item").eq(0).clone().appendTo($(carusel).find(".otzivi__items"));
        $(carusel).find(".otzivi__items .otzivi__item").eq(0).remove();
        $(carusel).find(".otzivi__items").css({"margin-left":"0px"});
    });
}

$(function() {
    auto_right('.otzivi__container:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
    var timer = setInterval(function(){
        if (!$(carusel).is(':hover'))
            right_carusel(carusel);
    }, 8000)

    $('.otzivi__toggler_left, .otzivi__toggler_right').click(function(){
        clearTimeout(timer)
        timer = setInterval(function(){
            if (!$(carusel).is(':hover'))
                right_carusel(carusel);
        }, 8000)
    })
}


//Слайдер
//Обработка клика на стрелку вправо
// $(document).on('click', '.slider__toggler_right', function(){
//     var carusel2 = $(this).parents('.slider__block');
//     right_carusel2(carusel2);
//     return false;
// });
// //Обработка клика на стрелку влево
// $(document).on('click', '.slider__toggler_left', function(){
//     var carusel2 = $(this).parents('.slider__block');
//     left_carusel2(carusel2);
//     return false;
// });
//
// function left_carusel2(carusel2){
//     var block_width = $(carusel2).find('.slider__item').outerWidth();
//     $(carusel2).find(".slider__items .slider__item").eq(-1).clone().prependTo($(carusel2).find(".slider__items"));
//     $(carusel2).find(".slider__items").css({"margin-left":"-"+block_width+"px"});
//     $(carusel2).find(".slider__items .slider__item").eq(-1).remove();
//     $(carusel2).find(".slider__items").animate({marginLeft: "0px"}, 800);
//
// }
// function right_carusel2(carusel2){
//     var block_width = $(carusel2).find('.slider__item').outerWidth();
//     $(carusel2).find(".slider__items").animate({marginLeft: "-"+ block_width +"px"}, 800, function(){
//         $(carusel2).find(".slider__items .slider__item").eq(0).clone().appendTo($(carusel2).find(".slider__items"));
//         $(carusel2).find(".slider__items .slider__item").eq(0).remove();
//         $(carusel2).find(".slider__items").css({"margin-left":"0px"});
//     });
// }
//
// $(function() {
// //Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
//     auto_right2('.slider__container:first');
// })
//
// // Автоматическая прокрутка
// function auto_right2(carusel2){
//     var timer = setInterval(function(){
//         if (!$(carusel2).is(':hover'))
//             right_carusel2(carusel2);
//     }, 10000)
//
//     $('.slider__toggler_left, .slider__toggler_right').click(function(){
//         clearTimeout(timer)
//         timer = setInterval(function(){
//             if (!$(carusel2).is(':hover'))
//                 right_carusel2(carusel2);
//         }, 10000)
//     })
// }

//Addresses - дописать classList.toggle
var addressLink = document.querySelector('#addresses');
var contactsLink = document.querySelector('#contactsLink');
var addressLinkSmall = document.querySelector('#addresses-small');
var addresses = document.querySelector('.addresses');
var closer = addresses.querySelector('.addresses__closer');

addressLink.addEventListener('click', function() {
    addresses.style.display = 'block';
});

contactsLink.addEventListener('click', function() {
    addresses.style.display = 'block';
});

addressLinkSmall.addEventListener('click', function() {
    addresses.style.display = 'block';
});

closer.addEventListener('click', function() {
    addresses.style.display = 'none';
});



// //map
ymaps.ready(init);
var myMap,
    myPlacemark1,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4,
    myPlacemark5,
    myPlacemark6,
    myPlacemark7;

function init(){
    myMap = new ymaps.Map("map", {
        center: [58.59726106586301,49.60364949999996],
        zoom: 12,
        controls: ["default","smallMapDefaultSet"]
    }, {
        zoomControlSize: 'small'
    });

    myMap.controls
        .add("trafficControl","typeSelector")
    myMap.controls
        .get("trafficControl")
        //.showTraffic()
    myMap.controls
        .remove("geolocationControl")
        .remove("rulerControl")
        .remove("zoomControl")
        .remove("searchControl");

    myMap.behaviors.disable([
        //'scrollZoom', 'drag'
    ]);

    var myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/decor/map-point.svg',
        iconImageSize: [46, 58],
        iconImageOffset: [-23, -60]
    });


    myPlacemark1 = new ymaps.Placemark([58.613955, 49.667439], {
        balloonContentHeader: '<img src="assets/img/decor/map-logo.svg" alt="Сервисный центр Прометей" title="Сервисный центр Прометей" class="map__pic"><span class="map__red">Сервисный центр "Прометей"</span>',
        balloonContentBody: 'Киров, К. Маркса 18; т. 45-03-03',
        balloonContentFooter: 'Ремонт любой техники быстро и недорого',
        hintContent: 'Сервисный центр "Прометей"'
    });

    myPlacemark2 = new ymaps.Placemark([58.601429065873745,49.589958999999986], {
        balloonContentHeader: '<img src="assets/img/decor/map-logo.svg" alt="Сервисный центр Прометей" title="Сервисный центр Прометей" class="map__pic"><span class="map__red">Сервисный центр "Прометей"</span>',
        balloonContentBody: 'Киров, пр-т Строителей 1/а; т. 78-15-36',
        balloonContentFooter: 'Ремонт любой техники быстро и недорого',
        hintContent: 'Сервисный центр "Прометей"'
    });

    myPlacemark3 = new ymaps.Placemark([58.59726106586301,49.60364949999996], {
        balloonContentHeader: '<img src="assets/img/decor/map-logo.svg" alt="Сервисный центр Прометей" title="Сервисный центр Прометей" class="map__pic"><span class="map__red">Сервисный центр "Прометей"</span>',
        balloonContentBody: 'Киров, Воровского 133; т. 78-15-26',
        balloonContentFooter: 'Ремонт любой техники быстро и недорого',
        hintContent: 'Сервисный центр "Прометей"'
    });

    myPlacemark4 = new ymaps.Placemark([58.577978065874916,49.627185499999996], {
        balloonContentHeader: '<img src="assets/img/decor/titan-map-point.svg" alt="Ломбард ТИТАН" title="Ломбард ТИТАН" class="map__pic"><span class="map__red">Ломбард ТИТАН"</span>',
        balloonContentBody: 'Киров, Щорса 37; т. 73-15-27',
        balloonContentFooter: 'Ломбард Нового поколения',
        hintContent: 'Ломбард ТИТАН'
    });

    myPlacemark5 = new ymaps.Placemark([58.61020056586561,49.62014249999991], {
        balloonContentHeader: '<img src="assets/img/decor/titan-map-point.svg" alt="Ломбард ТИТАН" title="Ломбард ТИТАН" class="map__pic"><span class="map__red">Ломбард ТИТАН"</span>',
        balloonContentBody: 'Киров, Лепсе 54; т. 73-15-26',
        balloonContentFooter: 'Ломбард Нового поколения',
        hintContent: 'Ломбард ТИТАН'
    });

    myPlacemark6 = new ymaps.Placemark([58.62387606580841,49.644387999999964], {
        balloonContentHeader: '<img src="assets/img/decor/map-logo.svg" alt="Сервисный центр Прометей" title="Сервисный центр Прометей" class="map__pic"><span class="map__red">Сервисный центр "Прометей"</span>',
        balloonContentBody: 'Киров, Лепсе 5; т. 73-15-16',
        balloonContentFooter: 'Ремонт любой техники быстро и недорого',
        hintContent: 'Сервисный центр "Прометей"'
    });

    myPlacemark7 = new ymaps.Placemark([58.63765856581316,49.6153005], {
        balloonContentHeader: '<img src="assets/img/decor/titan-map-point.svg" alt="Ломбард ТИТАН" title="Ломбард ТИТАН" class="map__pic"><span class="map__red">Ломбард ТИТАН"</span>',
        balloonContentBody: 'Киров, Октябрьский пр-т 3; т. 77-78-59',
        balloonContentFooter: 'Ломбард Нового поколения',
        hintContent: 'Ломбард ТИТАН'
    });

    myPin.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4).add(myPlacemark5).add(myPlacemark6).add(myPlacemark7);
    myMap.geoObjects.add(myPin);
}
//
// //Accordion
// var promoItem = document.querySelectorAll('.promo-item');
//
// for (var i = 0; i < promoItem.length; i++) {
//     var pI = promoItem[i];
// }
// console.log(pI);
//
// promoItem.addEventListener('click', function() {
//     var textBlock = promoItem.querySelector('.promo-item__text');
//     textBlock.classList.toggle('open');
// })

//Gitcore
(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//prometey.gincore.net/widget.php?ajax=&w=state&jquery='+('jQuery' in window?1:0);
    document.getElementsByTagName('head')[0].appendChild(s);
})();

var checkStat = document.querySelector('.check-stat');

checkStat.addEventListener('click', function() {
    document.querySelector('.gcw_title').dispatchEvent(new Event('click'))
})

//Openup window
var artCloser = document.querySelector('.article__closer');
var openMob = document.querySelector('.openup__mobile');
var openApple = document.querySelector('.openup__apple');
var openComp = document.querySelector('.openup__comp');
var openEsig = document.querySelector('.openup__esig');
var openGiro = document.querySelector('.openup__giro');
var openBit = document.querySelector('.openup__bit');
var services1 = document.querySelector('.service__link1');
var services2 = document.querySelector('.service__link2');
var services3 = document.querySelector('.service__link3');
var services4 = document.querySelector('.service__link4');
var services5 = document.querySelector('.service__link5');
var services6 = document.querySelector('.service__link6');


services1.addEventListener('click', function() {
    openMob.classList.add('active');
    artCloser.classList.add('active');
})

services2.addEventListener('click', function() {
    openApple.classList.add('active');
    artCloser.classList.add('active');
})

services3.addEventListener('click', function() {
    openComp.classList.add('active');
    artCloser.classList.add('active');
})

services4.addEventListener('click', function() {
    openEsig.classList.add('active');
    artCloser.classList.add('active');
})

services5.addEventListener('click', function() {
    openGiro.classList.add('active');
    artCloser.classList.add('active');
})

services6.addEventListener('click', function() {
    openBit.classList.add('active');
    artCloser.classList.add('active');
})

artCloser.addEventListener('click', function() {
    openBit.classList.remove('active');
    openGiro.classList.remove('active');
    openEsig.classList.remove('active');
    openComp.classList.remove('active');
    openApple.classList.remove('active');
    openMob.classList.remove('active');
    artCloser.classList.remove('active');
})

//Form
var callMaster = document.querySelector('#callMaster');
var orderParts = document.querySelector('#orderParts');
var masterWindow = document.querySelector('.form1');
var partsWindow = document.querySelector('.form2');
var masterCloser = document.querySelector('.form1__closer');
var partsCloser = document.querySelector('.form2__closer');

callMaster.addEventListener('click', function() {
    masterWindow.classList.add('active');
})

orderParts.addEventListener('click', function() {
    partsWindow.classList.add('active');
})

masterCloser.addEventListener('click', function() {
    masterWindow.classList.remove('active');
})

partsCloser.addEventListener('click', function() {
    partsWindow.classList.remove('active');
})

//form master
$(".order-form-master").submit(function(e) {
    e.preventDefault();
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "assets/php/mail.php",
        data: str,
        success: function(res) {
            var ans = $.parseJSON(res);
            console.log(ans);

            if ( ans.success ) {
                masterWindow.classList.remove('active');
                alert('Ваше сообщение отправлено!');
            } else {
                //masterWindow.classList.remove('active');
                alert('Пожалуйста, введите реальные данные!');
            }
        }
    });
});

//form parts
$(".order-form-parts").submit(function(e) {
    e.preventDefault();
    var str = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "assets/php/mailer.php",
        data: str,
        success: function(res) {
            var ans = $.parseJSON(res);
            console.log(ans);

            if ( ans.success ) {
                partsWindow.classList.remove('active');
                alert('Ваше сообщение отправлено!');
            } else {
                //masterWindow.classList.remove('active');
                alert('Пожалуйста, введите реальные данные!');
            }
        }
    });
});

//slick slider
// $(document).ready(function(){
//     $(".slider__items").slick({
//         autoplay: 'true',
//         adaptiveHeight: 'true',
//         accessibility: 'true',
//         arrows: 'true'
//     });
// });
