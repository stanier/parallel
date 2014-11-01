/**
* Created with Template 1.
* User: ohshitdacops
* Date: 2014-09-12
* Time: 01:52 AM
* To change this template use Tools | Templates.
*/
jQuery(document).ready(function ($) {
	checkPos();
    
    // Parallax stuff
    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
 
    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');
 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
 
    });
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });
    $(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      			var target = $(this.hash);
      			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      			if (target.length) {
        			$('html,body').animate({
          				scrollTop: target.offset().top
        			}, 1000);
        			return false;
      			}
    		}
  		});
	});
    
    // FIXED HEADER FADE-IN-OUT
    $( document ).scroll(function (){
    	checkPos();
    });
    function checkPos() {
    	if($( document.body ).scrollTop() > $('#cover-container').height()) {
    		if(!($('#header_fixed').hasClass('active'))) {
                $('#header_fixed').removeClass('deactive');
    			$('#header_fixed').addClass('active');
    		}
    	} else {
    		if($('#header_fixed').hasClass('active')) {
    			$('#header_fixed').removeClass('active');
                $('#header_fixed').addClass('deactive');
    		}
    	}
    }
});