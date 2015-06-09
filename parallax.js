/*
  Version: 1.0
  Developer: Jonathan Chute
  Year: 2015
*/

(function( $ ) {
    $.fn.parallax = function(options) {
		
        var settings = $.extend( {
            'offset':  200,
            'speed':   0.4,
            'reverse': false,
            'image':   ''
        }, options);
        
        var parallaxObj = $(this);

        $(window).scroll(function(e){
            theParallax();
        });

        function theParallax(){
            var scrolled = $(window).scrollTop();
            var position = scrolled * settings.speed - settings.offset;
            
            if(settings.reverse) position *= -1;
            
            if(settings.image != '') parallaxObj.css('background-image', 'url(' + settings.image + ')');

            parallaxObj.css('background-position', '50% ' + position + "px");
        }
        
    };
})( jQuery );
