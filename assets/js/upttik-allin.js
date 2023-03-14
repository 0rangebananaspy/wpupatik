    function callAll(jsfiles) {
		var src = document.createElement("script");
		src.setAttribute("type", "text/javascript");
		src.setAttribute("src", jsfiles);
		document.getElementsByTagName("head")[0].appendChild(src);
	}
	callAll("/vendor/jquery-3.5.1.min.js");
	callAll("/vendor/waypoints.min.js");
	callAll("bootstrap.bundle.min.js");
    callAll("jquery.meanmenu.js");
    callAll("swiper-bundle.min.js");
    callAll("owl.carousel.min.js");
    callAll("jquery.fancybox.min.js");
    callAll("isotope.pkgd.min.js");
    callAll("parallax.min.js");
    callAll("backToTop.js");
    callAll("jquery.counterup.min.js");
    callAll("ajax-form.js");
    callAll("wow.min.js");
    callAll("imagesloaded.pkgd.min.js");
    callAll("main.js");