// JavaScript Document
"use strict";

$(document).ready(function(){
	
/*----------------------------------------------------------------- TRANSIZIONE TITOLO E SOTTOTITOLO ALLO SCROLL*/
	/*var posizioneuno = $(".titolocuriosita").offset().top;
	var posizionedue = $(".sottotitolocuriosita").offset().top;
	var posizionetre = $(".testocuriosita").offset().top;*/
	$(".imgpresentazione").fadeIn("slow");
	$(".imgaperturagrande").fadeIn("slow");
	
	var descrizionep = $(".descrizione").offset().top-500;
	var sushi1 = $(".sushi1").offset().top-500;
	var riso = $(".riso").offset().top-500;
	
	$(window).scroll(function(){
		var spazioscrollato = $(window).scrollTop();
		$(".controllo").text(spazioscrollato);
		
		if(spazioscrollato > sushi1){
		   $(".titolocuriosita1").addClass("animato");
		}
		if(spazioscrollato > sushi1){
			$(".sottotitolocuriosita1").addClass("animatox");
		}
		if(spazioscrollato > sushi1){
			$(".testocuriosita1").addClass("animato");
		}
		
		if(spazioscrollato > riso){
		   $(".titolocuriosita2").addClass("animato");
		}
		if(spazioscrollato > riso){
			$(".sottotitolocuriosita2").addClass("animatox");
		}
		if(spazioscrollato > riso){
			$(".testocuriosita2").addClass("animato");
		}
		
		if(spazioscrollato > descrizionep){
			$(".testodesc").addClass("animato3");
		}
		
	});
	
	$(window).scroll(function(){
		var spazioscrollato = $(window).scrollTop();
		
		if(spazioscrollato > sushi1){
			$(".testoashtag1").fadeIn(2000);
		}
		if(spazioscrollato > riso){
			$(".testoashtag2").fadeIn(2000);
		}
	});
	
	/*-----------------------------------------------------------------*/
	
	var tgl1 = true;
	$(".cuorelogo").click(function(){
		if(tgl1){
			$(".testocentrato").addClass("animato4");
			$(".body").css("overflow", "hidden");
			tgl1 = false;	
		}else{
			$(".testocentrato").removeClass("animato4");
			$(".body").css("overflow", "auto");
			tgl1 = true;
		}
	});
});