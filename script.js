// JavaScript Document
"use strict";

$(document).ready(function(){
	var tgl = true;
	$(".hamburger").click(function(){
		if(tgl){
			$(".menubox").addClass("entra");
			$(".body").css("overflow", "hidden");
			tgl = false;	
		}else{
			$(".menubox").removeClass("entra");
			$(".body").css("overflow", "auto");
			tgl = true;
		}
	});
	$(".logointro").addClass("animato1");
	$(".modulounogrande").addClass("animato2");
	$(".info").addClass("animato3");
	
	/*------------------------------------------------------ESTENDERE ASTINA*/
	
		$(".hamburger").mouseover(function(){
			$(".centrale").addClass("estendere");
		});
		$(".hamburger").mouseout(function(){
			$(".centrale").removeClass("estendere");
		});
		
		
		
	/*------------------------------------------------------TORNA SU*/
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
	
	/*------------------------------------------------------ICONE SOCIAL FOOTER*/
	$(".fb").mouseover(function(){
		$(".barra1").addClass("appari");
	});
    $(".fb").mouseout(function(){
		$(".barra1").removeClass("appari");
	});
	$(".trad").mouseover(function(){
		$(".barra2").addClass("appari");
	});
    $(".trad").mouseout(function(){
		$(".barra2").removeClass("appari");
	});
	$(".insta").mouseover(function(){
		$(".barra3").addClass("appari");
	});
    $(".insta").mouseout(function(){
		$(".barra3").removeClass("appari");
	});
});