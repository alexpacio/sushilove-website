// JavaScript Document
"use strict";

var clickCounters = {
	pranzo: false,
	cena: false,
	bevande: false,
	dolci: false
};

var windowWidth = 0;
				   
$(document).ready(function(){
	// desktop
	windowWidth = $(window).width();
	$( window ).resize(function() {
		windowWidth = $(window).width();
		// Pranzo section
		if(windowWidth > 800 && clickCounters.pranzo === true) {
			if(!($("#pranzo-spacer.boxmenu-spacer").is(':empty'))) {
				$("#pranzo-spacer.boxmenu-spacer").empty();
			}
			$("#pranzo.menu-comparsa").slideDown("slow", function() {
				$("#pranzo.menu-comparsa").show();
			});
		} else if (windowWidth <= 800 && clickCounters.pranzo === true){
			$("#pranzo.menu-comparsa").hide();
			if($("#pranzo-spacer.boxmenu-spacer").is(':empty')) {
				$("#pranzo-spacer.boxmenu-spacer").append($("#pranzo.menu-comparsa").html());
			}
			$("#pranzo-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#pranzo-spacer.boxmenu-spacer").show();
			});
		}
		
		// Cena section
		if(windowWidth > 800 && clickCounters.cena === true) {
			if(!($("#cena-spacer.boxmenu-spacer").is(':empty'))) {
				$("#cena-spacer.boxmenu-spacer").empty();
			}
			$("#cena.menu-comparsa").slideDown("slow", function() {
				$("#cena.menu-comparsa").show();
			});
		} else if (windowWidth <= 800 && clickCounters.cena === true){
			$("#cena.menu-comparsa").hide();
			if($("#cena-spacer.boxmenu-spacer").is(':empty')) {
				$("#cena-spacer.boxmenu-spacer").append($("#cena.menu-comparsa").html());
			}
			$("#cena-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#cena-spacer.boxmenu-spacer").show();
			});
		}
		
		//bevande section
		if(windowWidth > 800 && clickCounters.bevande === true) {
			if(!($("#bevande-spacer.boxmenu-spacer").is(':empty'))) {
				$("#bevande-spacer.boxmenu-spacer").empty();
			}
			$("#bevande.menu-comparsa").slideDown("slow", function() {
				$("#bevande.menu-comparsa").show();
			});
		} else if (windowWidth <= 800 && clickCounters.bevande === true){
			$("#bevande.menu-comparsa").hide();
			if($("#bevande-spacer.boxmenu-spacer").is(':empty')) {
				$("#bevande-spacer.boxmenu-spacer").append($("#bevande.menu-comparsa").html());
			}
			$("#bevande-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#bevande-spacer.boxmenu-spacer").show();
			});
		}
		
		// dolci section
		if(windowWidth > 800 && clickCounters.dolci === true) {
			if(!($("#dolci-spacer.boxmenu-spacer").is(':empty'))) {
				$("#dolci-spacer.boxmenu-spacer").empty();
			}
			$("#dolci.menu-comparsa").slideDown("slow", function() {
				$("#dolci.menu-comparsa").show();
			});
		} else if (windowWidth <= 800 && clickCounters.dolci === true){
			$("#dolci.menu-comparsa").hide();
			if($("#dolci-spacer.boxmenu-spacer").is(':empty')) {
				$("#dolci-spacer.boxmenu-spacer").append($("#dolci.menu-comparsa").html());
			}
			$("#dolci-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#dolci-spacer.boxmenu-spacer").show();
			});
		}
	});

	// pranzo click events handler
	$("#pranzo-menu.boxmenu").click(function() {
		// check if others buttons are selected and, if so, disable them before enabling this
		if (clickCounters.cena) {
			$("#cena-menu.boxmenu").click();
		} else if(clickCounters.dolci) {
			$("#dolci-menu.boxmenu").click();
		} else if (clickCounters.bevande) {
			$("#bevande-menu.boxmenu").click();
		}
		clickCounters.pranzo = clickCounters.pranzo ? false : true;
		if(windowWidth > 800) {
			if(clickCounters.pranzo) {
				//click di apertura
				$("#pranzo-menu.boxmenu").addClass("boxmenu-active");
				$("#pranzo.menu-comparsa").slideDown("slow", function() {
					$("#pranzo.menu-comparsa").show();
				});
			} else { 
				$("#pranzo-menu.boxmenu").removeClass("boxmenu-active");
				$("#pranzo.menu-comparsa").slideUp("slow", function() {
					$("#pranzo.menu-comparsa").hide();
				});
			}
		} else { //mobile
		if(clickCounters.pranzo) {
			//click di apertura
			$("#pranzo-menu.boxmenu").addClass("boxmenu-active");
			$("#pranzo-spacer.boxmenu-spacer").append($("#pranzo.menu-comparsa").html());
			$("#pranzo-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#pranzo-spacer.boxmenu-spacer").show();
			});
		} else { 
			$("#pranzo-menu.boxmenu").removeClass("boxmenu-active");
			$("#pranzo-spacer.boxmenu-spacer").slideUp("slow", function() {
				$("#pranzo-spacer.boxmenu-spacer").empty();
			});
		}
	}
	});

	// cena click events handler
	$("#cena-menu.boxmenu").click(function() {
		// check if others buttons are selected and, if so, disable them before enabling this
		if (clickCounters.pranzo) {
			$("#pranzo-menu.boxmenu").click();
		} else if(clickCounters.dolci) {
			$("#dolci-menu.boxmenu").click();
		} else if (clickCounters.bevande) {
			$("#bevande-menu.boxmenu").click();
		}
		clickCounters.cena = clickCounters.cena ? false : true;
		if(windowWidth > 800) {
			if(clickCounters.cena) {
				//click di apertura
				$("#cena-menu.boxmenu").addClass("boxmenu-active");
				$("#cena.menu-comparsa").slideDown("slow", function() {
					$("#cena.menu-comparsa").show();
				});
			} else { 
				$("#cena-menu.boxmenu").removeClass("boxmenu-active");
				$("#cena.menu-comparsa").slideUp("slow", function() {
					$("#cena.menu-comparsa").hide();
				});
			}
		} else { //mobile
		if(clickCounters.cena) {
			//click di apertura
			$("#cena-menu.boxmenu").addClass("boxmenu-active");
			$("#cena-spacer.boxmenu-spacer").append($("#cena.menu-comparsa").html());
			$("#cena-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#cena-spacer.boxmenu-spacer").show();
			});
		} else { 
			$("#cena-menu.boxmenu").removeClass("boxmenu-active");
			$("#cena-spacer.boxmenu-spacer").slideUp("slow", function() {
				$("#cena-spacer.boxmenu-spacer").empty();
			});
		}
	}
	});

	// bevande click events handler
	$("#bevande-menu.boxmenu").click(function() {
		// check if others buttons are selected and, if so, disable them before enabling this
		if (clickCounters.cena) {
			$("#cena-menu.boxmenu").click();
		} else if(clickCounters.dolci) {
			$("#dolci-menu.boxmenu").click();
		} else if (clickCounters.pranzo) {
			$("#pranzo-menu.boxmenu").click();
		}
		clickCounters.bevande = clickCounters.bevande ? false : true;
		if(windowWidth > 800) {
			if(clickCounters.bevande) {
				//click di apertura
				$("#bevande-menu.boxmenu").addClass("boxmenu-active");
				$("#bevande.menu-comparsa").slideDown("slow", function() {
					$("#bevande.menu-comparsa").show();
				});
			} else { 
				$("#bevande-menu.boxmenu").removeClass("boxmenu-active");
				$("#bevande.menu-comparsa").slideUp("slow", function() {
					$("#bevande.menu-comparsa").hide();
				});
			}
		} else { //mobile
		if(clickCounters.bevande) {
			//click di apertura
			$("#bevande-menu.boxmenu").addClass("boxmenu-active");
			$("#bevande-spacer.boxmenu-spacer").append($("#bevande.menu-comparsa").html());
			$("#bevande-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#bevande-spacer.boxmenu-spacer").show();
			});
		} else { 
			$("#bevande-menu.boxmenu").removeClass("boxmenu-active");
			$("#bevande-spacer.boxmenu-spacer").slideUp("slow", function() {
				$("#bevande-spacer.boxmenu-spacer").empty();
			});
		}
	}
	});

	// dolci click events handler
	$("#dolci-menu.boxmenu").click(function() {
		// check if others buttons are selected and, if so, disable them before enabling this
		if (clickCounters.cena) {
			$("#cena-menu.boxmenu").click();
		} else if(clickCounters.pranzo) {
			$("#pranzo-menu.boxmenu").click();
		} else if (clickCounters.bevande) {
			$("#bevande-menu.boxmenu").click();
		}
		clickCounters.dolci = clickCounters.dolci ? false : true;
		if(windowWidth > 800) {
			if(clickCounters.dolci) {
				//click di apertura
				$("#dolci-menu.boxmenu").addClass("boxmenu-active");
				$("#dolci.menu-comparsa").slideDown("slow", function() {
					$("#dolci.menu-comparsa").show();
				});
			} else { 
				$("#dolci-menu.boxmenu").removeClass("boxmenu-active");
				$("#dolci.menu-comparsa").slideUp("slow", function() {
					$("#dolci.menu-comparsa").hide();
				});
			}
		} else { //mobile
		if(clickCounters.dolci) {
			//click di apertura
			$("#dolci-menu.boxmenu").addClass("boxmenu-active");
			$("#dolci-spacer.boxmenu-spacer").append($("#dolci.menu-comparsa").html());
			$("#dolci-spacer.boxmenu-spacer").slideDown("slow", function() {
				$("#dolci-spacer.boxmenu-spacer").show();
			});
		} else { 
			$("#dolci-menu.boxmenu").removeClass("boxmenu-active");
			$("#dolci-spacer.boxmenu-spacer").slideUp("slow", function() {
				$("#dolci-spacer.boxmenu-spacer").empty();
			});
		}
	}
	});
	
});