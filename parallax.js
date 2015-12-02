/*
  Parallax
  Version: 1.3
  Developer: Jonathan Chute
  Year: 2015
*/

(function( $ ) {
    $.fn.parallax = function(options) {
        
        var parallaxObj = $(this);
        
        if(parallaxObj[0] === undefined)
            return;
		
        var settings = $.extend( {
            'offset':  0,
            'speed':   0.4,
            'reverse': false,
            'image':   '',
            'posX': getPosX(parallaxObj)
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
        
        function getPosX(object){
            var pos = object.css("background-position");

            if(pos == 'undefine' || pos == null || pos == 'top') // For people using IE
                return parallaxObj.css("background-position-x");

            else // For everyone else
                return pos.split(" ")[0];
        }
        
    };
})( jQuery );
