/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
 window.addEventListener("DOMContentLoaded", function() {

 	var docElem = document.documentElement,
 	header = document.querySelector( '.dynamic-header' ),
 	didScroll = false,
 	changeHeaderOn = 300;

 	function init() {
 		window.addEventListener( 'scroll', function( event ) {
 			if( !didScroll ) {
 				didScroll = true;
 				setTimeout( scrollPage, 250 );
 			}
 		}, false );
 	}

 	function scrollPage() {
 		var sy = scrollY();
    var jHeader = $(".dynamic-header");
 		if ( sy >= changeHeaderOn ) {
 			jHeader.addClass('navbar-shrink' );
 		}
 		else {
 			jHeader.removeClass('navbar-shrink' );
 		}
 		didScroll = false;
 	}

 	function scrollY() {
 		return window.pageYOffset || docElem.scrollTop;
 	}


 	init();



 },false);