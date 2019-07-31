import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import slick from 'slick-carousel';
// import mask from "jquery-mask-plugin";
// import LazyLoad from "vanilla-lazyload";

(function ($) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #82B93C',
        'color: #fff',
        'display: inline-block',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
        'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
        'line-height: 1.56',
        'text-align: left',
        'font-size: 16px',
        'font-weight: 400'
    ].join(';');

    console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

    let lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    $(function () {

        // Banner slider

        let $photoSlider = $('.photo__slider');
        let $photoThumbs = $('.photo__thumbs');


        if ( $photoSlider.length > 0 ) {
            $photoSlider.slick({
                mobileFirst: true,
                dots: false,
                arrows: true,
                // lazyLoad: 'ondemand',
                infinite: true,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                adaptiveHeight: true,
                asNavFor: '.photo__thumbs'
            });
        }

        if ( $photoThumbs.length > 0 ) {
            $photoThumbs.slick({
                mobileFirst: true,
                dots: false,
                // lazyLoad: 'ondemand',
                arrows: false,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                focusOnSelect: true,
                speed: 300,
                centerMode: false,
                centerPadding: '0',
                adaptiveHeight: false,
                asNavFor: '.photo__slider',
                responsive: [{
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6
                    }
                }]
            });
        }


        /*
            Scroll to element
        */

        $('.header__button, .footer__button').on( 'click', function(e) {
            e.preventDefault();
            let _scroll = $(this).attr('href');
            if (_scroll != '#' && $(_scroll).length) {
                $('html, body').animate({ scrollTop: $(_scroll).offset().top  }, 300);
            }
        });


        /*
         Phone Mask
        */

        $('.form__field_phone input').mask("+ 7(999)999-99-99", {
            placeholder: "+7(___)___-__-__"
        });


        // Map

        let myMap;

        // Дождёмся загрузки API и готовности DOM.
        ymaps.ready(init);

        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map").
            myMap = new ymaps.Map('map', {
                // При инициализации карты обязательно нужно указать
                // её центр и коэффициент масштабирования.
                center: [56.8519, 60.6122], // Москва
                zoom: 10
            }, {
                searchControlProvider: ''
            });

            document.getElementById('destroyButton').onclick = function () {
                // Для уничтожения используется метод destroy.
                myMap.destroy();
            };

        }


    });


})(jQuery);
