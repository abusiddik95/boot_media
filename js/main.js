
		//------- jquery preloader------

   
        $(window).on("load", function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
   

	//----------menu---------
		$(window).on("scroll", function () {
        if ($(window).scrollTop() > 1) {
            $("#navigation").css("background-color","#000");
            $("#navigation").addClass("animated-nav");
            $(".menu-area").css("top","0px");
			
        } else {
            $("#navigation").css("background-color","transparent");
            $("#navigation").removeClass("animated-nav");
			
			 $(window).width(function () {
	 
			 var wwidth = jQuery(window).width();
			 
				if (wwidth > 800) {
					$(".menu-area").css("top","70px");
					
				} else {
					$(".menu-area").css("top","0px");
					
				}
			});	
        }
    }); 
	
	//------- for dropdown menu -------
	$(window).width(function () {
		var wwidth = jQuery(window).width();
		$("li.dropdown").click(function(){
			if (wwidth < 800) {
			$("ul.submenu-one").toggle();
			$("ul.submenu-one").css("left","45%");
			$("ul.submenu-one").css("background-color","#000");
			}
		});
	
	});
	//------- mega menu -----------
	$(window).width(function () {
		var wwidth = jQuery(window).width();
		$(".megamenu").click(function(){
			if (wwidth < 800) {
			$(".mega-menu").toggle();
			$(".mega-menu").css("left","0");
			$(".mega-menu").css("background-color","#000");
			}
		});
	
	});
	
	/* $("li.dropdown").click(function(){
		if($("li.dropdown").click){
			$("ul.submenu-one").css("left","0px");
		}
		else if($("li.dropdown").click){
			$("ul.submenu-one").css("left","-9999999999px");
		}
		else{
			$("ul.submenu-one").css("left","-9999999999px");
		}
	}); */
	
	/*$("li.dropdown").click(function(){
		$("ul.submenu-one").hide();
	});
	$("li.dropdown").click(function(){
		$("ul.submenu-one").show();
	});*/
	
	
//  slider jquery
 
  $("#testimonial-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 1000,
      autoPlay: 5000,
      paginationSpeed : 1000,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "goDown"
  });


	//---MixitUP jquery
	
	$(".project-list") .mixItUp();
	
	
	
	//--- scrollup jquery
	
	 $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1500,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'slide',           // Fade, slide, none
        animationSpeed: 500,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: 'Top', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
	
	//------for Parallax

	function parallaxInit() {		
			$(".quote-area").parallax("50%", 0.7);
			$(".media-team-header").parallax("50%", 0.3);
		}	
		parallaxInit();
		
	//------for nice scroll 
	
	(function($){
        $("html").niceScroll({
            cursorborder:"",
            cursorcolor:"#00F",
            boxzoom:false,
            scrollspeed:60,
            cursorcolor: "rgb(255, 162, 0)",
            cursorwidth: "5px",
            zindex: "9999999",
            mousescrollstep:40,
            enablemousewheel: true,
        });
   })(jQuery);
		
		

			// google map
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

           
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);
        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    };
	





// Initializing WOW.JS

 new WOW().init();
 
