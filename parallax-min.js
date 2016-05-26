/*
  Parallax
  Version: 1.3
  Developer: Jonathan Chute
  Year: 2015
*/
!function(o){o.fn.parallax=function(n){function s(){var n=o(window).scrollTop()-i.offset().top,s=n*r.speed-r.offset;r.reverse&&(s*=-1),""!=r.image&&i.css("background-image","url("+r.image+")"),i.css("background-position",r.posX+" "+s+"px")}function e(o){var n=o.css("background-position");return"undefine"==n||null==n||"top"==n?i.css("background-position-x"):n.split(" ")[0]}var i=o(this);if(void 0!==i[0]){var r=o.extend({offset:0,speed:.4,reverse:!1,image:"",posX:e(i)},n);s(),o(window).scroll(function(o){s()})}}}(jQuery);
