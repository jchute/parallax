/*
  Parallax
  Version: 2.0
  Developer: Jonathan Chute
  Year: 2019
*/

(function( $ ) {
    $.fn.parallax = function( options ) {
        let object = $(this);

        if ( object[0] === undefined ) {
            return;
        }

        let settings = $.extend( {
            'offset': 0,
            'speed': 0.4,
            'reverse': false,
            'image': '',
            'posX': getPosX( object ),
        }, options );

        if ( settings.image != '' ) {
            object.css('background-image', 'url(' + settings.image + ')');
        }

        theParallax( object );

        $(window).scroll(function() {
            theParallax( object );
        });

        function theParallax( object ) {
            let win = {
                top: $(window).scrollTop(),
                left: $(window).scrollLeft(),
            };
            win.bottom = win.top + window.innerWidth;
            win.right = win.left + window.innerHeight;

            if ( settings.speed == 1 && ! settings.reverse ) {
                object.css( 'background-attachment', 'fixed' );
                return true;
            } else if ( settings.speed == 0 ) {
                object.css( 'background-attachment', 'scroll' );
                return true;
            } else if ( ! inView( object, win ) ) {
                object.css( 'background-attachment', 'scroll' );
                return false;
            }

            let position = ( win.top - object.offset().top ) * settings.speed - settings.offset;
            
            if ( settings.reverse ) {
                position = -position;
            }

            object.css( 'background-position', settings.posX + ' ' + position + 'px' );
        }

        function inView( object, win ) {
            let obj = {
                top: object.offset().top,
                left: object.offset().left,
            };
            obj.bottom = obj.top + object.outerWidth();
            obj.right = obj.left + object.outerHeight();

            let BottomIn = obj.bottom > win.top,
                RightIn = obj.right > win.left,
                TopIn = obj.top < win.bottom,
                LeftIn = obj.left < win.right;

            return ( BottomIn && RightIn && TopIn && LeftIn );
        }

        function getPosX( object ) {
            let pos = object.css( 'background-position' );

            if ( pos === undefined || pos == null || pos == 'top' ) {
                // For people using IE
                return object.css("background-position-x");
            } else {
                // For everyone else
                return pos.split( ' ' )[0];
            }
        }
    };
})( jQuery );
