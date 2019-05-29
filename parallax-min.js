/*
Parallax
Version: 2.0
Developer: Jonathan Chute
Year: 2019
*/
!function(t){t.fn.parallax=function(e){let o=t(this);if(void 0===o[0])return;let n=t.extend({offset:0,speed:.4,reverse:!1,image:"",posX:function(t){let e=t.css("background-position");return void 0===e||null==e||"top"==e?t.css("background-position-x"):e.split(" ")[0]}(o)},e);function r(e){let o={top:t(window).scrollTop(),left:t(window).scrollLeft()};if(o.bottom=o.top+window.innerWidth,o.right=o.left+window.innerHeight,1==n.speed&&!n.reverse)return e.css("background-attachment","fixed"),!0;if(0==n.speed)return e.css("background-attachment","scroll"),!0;if(!function(t,e){let o={top:t.offset().top,left:t.offset().left};o.bottom=o.top+t.outerWidth(),o.right=o.left+t.outerHeight();let n=o.bottom>e.top,r=o.right>e.left,i=o.top<e.bottom,s=o.left<e.right;return n&&r&&i&&s}(e,o))return e.css("background-attachment","scroll"),!1;let r=(o.top-e.offset().top)*n.speed-n.offset;n.reverse&&(r=-r),e.css("background-position",n.posX+" "+r+"px")}""!=n.image&&o.css("background-image","url("+n.image+")"),r(o),t(window).scroll(function(){r(o)})}}(jQuery);
