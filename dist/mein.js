"use strict";!function(){var s=!1,i=0;$("#contact_form").on("submit",function(i){return i.preventDefault(),sendForm($(this)),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$("#menu-opener").on("click",function(){$("#responsive-nav ul").toggleClass("active")}),setInterval(function(){i<7?i++:i=0,$("#gallery .inner").css({left:"-"+100*i+"%"})},4e3),$(window).scroll(function(){var i,n=(i=$("#description").height(),$(window).scrollTop()>$(window).height()-2*i);n&&!s&&(s=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")),!n&&s&&(s=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast"))})}();