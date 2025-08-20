import $ from "jquery";

window.$ = window.jQuery = $;

import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick options used for all teacher sliders
const slickOptions = {
    dots: true,
    rtl: true,
    infinite: false,
    slidesToShow: 5,
    draggable: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true,
            },
        },
        {
            breakpoint: 300,
            settings: "unslick", // destroys slick
        },
    ],
};

// Initialize only visible sliders to avoid initializing inside hidden tab panels
function initVisibleTeacherSliders() {
    $(".kids-teacher-slider:visible").each(function () {
        const $slider = $(this);
        if (!$slider.hasClass("slick-initialized")) {
            $slider.slick(slickOptions);
        } else {
            // Ensure layout is recalculated when becoming visible
            $slider.slick("setPosition");
        }
    });
}

// Initial init on DOM ready
$(function () {
    initVisibleTeacherSliders();

    // Re-init/refresh when tabs change (Preline tabs) or similar UI changes
    // 1) Listen to clicks on Preline tab triggers
    $(document).on("click", "[data-hs-tab]", function () {
        // defer to allow DOM to toggle visibility
        setTimeout(initVisibleTeacherSliders, 60);
    });

    // 2) Try to listen to Preline custom events if present
    document.addEventListener("shown.hs.tab", initVisibleTeacherSliders);
    document.addEventListener("show.hs.tab", initVisibleTeacherSliders);

    // 3) On window resize, ensure positions are recalculated
    $(window).on("resize", function () {
        $(".kids-teacher-slider.slick-initialized:visible").slick("setPosition");
    });

    $('.about-license-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 2000,
        nextArrow: '<div class="absolute top-1/2 -translate-y-1/2 z-30 -right-2"><svg class="size-5"><use href="#icon-chevron" /></svg></div>',
        prevArrow: '<div class="rotate-180 absolute top-1/2 -translate-y-1/2 z-30 -left-2"><svg class="size-5"><use href="#icon-chevron" /></svg></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
        ],
    });
});

