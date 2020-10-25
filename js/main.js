$(document).ready(function () { navBarScroll(); });

function navBarScroll() {
    $(document).scroll(function () {
		var $nav = $("header");
        $nav.toggleClass('white', $(window).height() > $(window).scrollTop() + $nav.height()*.70);
	}); }