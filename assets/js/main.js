!function(e){"use strict";var i=e(window);i.on("load",(function(){e("#loading").fadeOut(500)})),e("#mobile-menu").meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"1199",meanExpand:['<i class="fal fa-plus"></i>']}),e("#sidebar-toggle").on("click",(function(){e(".sidebar__area").addClass("sidebar-opened"),e(".body-overlay").addClass("opened")})),e(".sidebar__close-btn").on("click",(function(){e(".sidebar__area").removeClass("sidebar-opened"),e(".body-overlay").removeClass("opened")})),e(".cart-toggle-btn").on("click",(function(){e(".cartmini__wrapper").addClass("opened"),e(".body-overlay").addClass("opened")})),e(".cartmini__close-btn").on("click",(function(){e(".cartmini__wrapper").removeClass("opened"),e(".body-overlay").removeClass("opened")})),e(".body-overlay").on("click",(function(){e(".cartmini__wrapper").removeClass("opened"),e(".sidebar__area").removeClass("sidebar-opened"),e(".header__search-3").removeClass("search-opened"),e(".body-overlay").removeClass("opened")})),e(".search-toggle").on("click",(function(){e(".header__search-3").addClass("search-opened"),e(".body-overlay").addClass("opened")})),e(".header__search-3-btn-close").on("click",(function(){e(".header__search-3").removeClass("search-opened"),e(".body-overlay").removeClass("opened")})),i.on("scroll",(function(){e(window).scrollTop()<100?e("#header-sticky").removeClass("sticky"):e("#header-sticky").addClass("sticky")})),e("[data-background").each((function(){e(this).css("background-image","url( "+e(this).attr("data-background")+"  )")}));new Swiper(".testimonial__slider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var n=new Swiper(".slider__nav",{spaceBetween:0,slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0}),a=(new Swiper(".slider__wrapper",{spaceBetween:0,effect:"fade",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:n}}),new Swiper(".brand__slider",{slidesPerView:6,spaceBetween:30,centeredSlides:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".testimonial-nav",{spaceBetween:20,slidesPerView:3,loop:!0,freeMode:!0,loopedSlides:3,watchSlidesVisibility:!0,watchSlidesProgress:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0}}));new Swiper(".testimonial-text",{spaceBetween:0,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:a}}),new Swiper(".course__slider",{spaceBetween:30,slidesPerView:2,breakpoints:{768:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},pagination:{el:".swiper-pagination",clickable:!0}});e(".grid").imagesLoaded((function(){var i=e(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-item"}});e(".masonary-menu").on("click","button",(function(){var n=e(this).attr("data-filter");i.isotope({filter:n})})),e(".masonary-menu button").on("click",(function(i){e(this).siblings(".active").removeClass("active"),e(this).addClass("active"),i.preventDefault()}))})),(new WOW).init(),e("[data-width]").each((function(){e(this).css("width",e(this).attr("data-width"))})),e(".cart-minus").click((function(){var i=e(this).parent().find("input"),n=parseInt(i.val())-1;return n=n<1?1:n,i.val(n),i.change(),!1})),e(".cart-plus").click((function(){var i=e(this).parent().find("input");return i.val(parseInt(i.val())+1),i.change(),!1})),e("#showlogin").on("click",(function(){e("#checkout-login").slideToggle(900)})),e("#showcoupon").on("click",(function(){e("#checkout_coupon").slideToggle(900)})),e("#cbox").on("click",(function(){e("#cbox_info").slideToggle(900)})),e("#ship-box").on("click",(function(){e("#ship-box-info").slideToggle(1e3)})),e(".counter").counterUp({delay:10,time:1e3}),e(".scene").length>0&&e(".scene").parallax({scalarX:10,scalarY:15}),e(".hover__active").on("mouseenter",(function(){e(this).addClass("active").parent().siblings().find(".hover__active").removeClass("active")}))}(jQuery);