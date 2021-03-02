// JavaScript Document

"use strict";

$(document).ready(function(){
	/* --------------------------------------------------------------------GALLERY*/
	$("#uno").click(function(){
		$("#galleria").css("background-image", "url(gallery1.jpg)");
		$("#uno").css("background-color", "#000");
		$("#due").css("background-color", "#fff");
		$("#tre").css("background-color", "#fff");
		
		
	});
	
	$("#due").click(function(){
		$("#galleria").css("background-image", "url(gallery2.jpg)");
		$("#due").css("background-color", "#000");
		$("#uno").css("background-color", "#fff");
		$("#tre").css("background-color", "#fff");
	});
	
	$("#tre").click(function(){
		$("#galleria").css("background-image", "url(gallery3.jpg)");
		$("#tre").css("background-color", "#000");
		$("#uno").css("background-color", "#fff");
		$("#due").css("background-color", "#fff");
	});
	
	
/* --------------------------------------------------------------------BACKGROUNDMOVE*/
	
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $(".sfondochisiamo").css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
	
	
	
	/* --------------------------------------------------------------------BTN MOSTRA ALTRO*/
	$("#btn").click(function(){
		$(".showmore").slideToggle(500);
	});
    
	/* --------------------------------------------------------------------TRANSIZIONI DIV*/
	var filosofia = $(".filosofia").offset().top-500;
	var taptap = $(".taptap").offset().top-400;
	var fotochisiamo1 = $(".fotochisiamo1").offset().top-500;
	var fotochisiamo2 = $(".fotochisiamo2").offset().top-400;
	
	$(window).scroll(function(){
		var spazioscrollato = $(window).scrollTop();
		$(".controllo").text(spazioscrollato);
		
		
		if(spazioscrollato > filosofia){
		   $(".filosofia").addClass("entra1");
		}
		if(spazioscrollato > taptap){
		   $(".taptap").addClass("entra2");
		}
		
		if(spazioscrollato > fotochisiamo1){
		   $(".fotochisiamo1").addClass("entra3");
		}
		if(spazioscrollato > fotochisiamo2){
		   $(".fotochisiamo2").addClass("entra3");
		}
	});
	

});