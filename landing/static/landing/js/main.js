$(document).ready(function () {

    var $sliderFor = $('.slider-for');
    var $sliderNav = $('.slider-nav');

    if ($sliderFor.length && $sliderFor.children().length > 0) {

        // 1. Верхний слайдер (БЕЗ СТРЕЛОК)
        $sliderFor.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,      // <-- Убрали стрелки сверху
            fade: true,
            asNavFor: '.slider-nav',
            adaptiveHeight: true
        });

        // 2. Нижняя карусель (5 фото + СТРЕЛКИ)
        $sliderNav.slick({
            slidesToShow: 5,    // <-- 5 фото
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: true,       // <-- Включили стрелки снизу
            dots: false,
            focusOnSelect: true,
            centerMode: false,  // Выключили центрирование, чтобы шли ровно
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 4 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 480,
                    settings: { slidesToShow: 2 }
                }
            ]
        });
    }

    // Fullscreen Gallery
    $sliderFor.on('click', '.slick-slide:not(.slick-cloned)', function (e) {
        e.preventDefault();
        var index = $(this).data('slick-index') || 0;
        var gallery = [];

        $sliderFor.find('.slick-slide:not(.slick-cloned) img').each(function () {
            gallery.push({
                src: $(this).attr('src'),
                type: 'image',
                opts: { caption: $(this).attr('alt') || '' }
            });
        });

        $.fancybox.open(gallery, {
            loop: true,
            buttons: ['close'],
            animationEffect: 'zoom',
            transitionEffect: 'slide'
        }, index);
    });

    // Smooth Scroll
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
    });
});