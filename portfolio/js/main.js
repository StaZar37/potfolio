$(document).ready(function() {

    $('.slider__item').hover(function() {
            let index = ($(this).index());
            $('.more').eq(index).show();
        },
        function() {
            let index = ($(this).index());
            $('.more').eq(index).hide();
        });

    /*
    $(window).scroll(function(e) {
        if (window.scrollY >= 100) {
            $('.nv-bg').fadeTo(200, .7);
        }
        if (window.scrollY < 100) {
            $('.nv-bg').fadeTo(200, 0);
        };
    })
    */

    $(window).on("scroll", function() {
        // Navbar bg
        let nv = $('.nv-bg');
        let wsY = window.scrollY;
        if (wsY > 0) {
            if (!nv.hasClass("active")) {
                $('.nv-bg').addClass("active");
            }
        } else {
            nv.removeClass("active");
        }
        // Navbar items underline
        let s1 = $("#square1").position().top;
        let s2 = $("#square2").position().top;
        let s3 = $("#square3").position().top;
        let s7 = $("#square7").position().top;
        let nth = 1;
        $(".nav-item .header-underline").removeClass("active");
        if (s1 >= wsY) {
            nth = 1;
        } else if (s2 >= wsY) {
            nth = 2;
        } else if (s3 >= wsY) {
            nth = 2;
        } else if (s7 >= wsY || wsY > s7 && $(document).height() != parseInt($(window).height() + window.scrollY)) {
            nth = 3;
        } else if ($(document).height() == parseInt($(window).height() + window.scrollY)) {
            nth = 4;
        }
        $(".nav-item:nth-child(" + nth.toString() + ") .header-underline").addClass("active");
    })

    // alert(($(".slider__item:first").width()) / ($(window).width()));

    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        // centerMode: true,
        variableWidth: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 577,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
            // {
            //     breakpoint: 768,
            //     settings: {
            //         slidesToShow: 1
            //     }
            // }
        ]
    });
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff" // #be0fc4
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": .8,
                    "color": "#be0fc4"
                },
                "polygon": {
                    "nb_sides": 1
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": .5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false, // true
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});