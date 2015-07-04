/*
  Version: 1.2
  Developer: Jonathan Chute
  Year: 2015
*/

(function( $ ) {
    $.fn.parallax = function(options) {
        
        var parallaxObj = $(this);
		
        var settings = $.extend( {
            'offset':  0,
            'speed':   0.4,
            'reverse': false,
            'image':   '',
            'posX': parallaxObj.css("background-position").split(" ")[0]
        }, options);

        theParallax();

        $(window).scroll(function(e){
            theParallax();
        });

        function theParallax(){
            var scrolled = $(window).scrollTop() - parallaxObj.offset().top;
            var position = scrolled * settings.speed - settings.offset;
            
            if(settings.reverse) position *= -1;
            
            if(settings.image != '') parallaxObj.css('background-image', 'url(' + settings.image + ')');

            parallaxObj.css('background-position', settings.posX + ' ' + position + "px");
        }
        
    };
})( jQuery );
