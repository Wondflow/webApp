$(document).ready(function(){
	$(".bar").click(function(){
		$(".silder").animate({
			 
			 left:'0px',
			 width:'375px'

		},"slow");
		$(".header").toggle();
		$(".main-content").toggle();
		$(".footer").toggle();
		$(".silder").css("display","block");
	});
	$(".r-bar").click(function(){
		$(".silder").hide();
		$(".header").show();
		$(".main-content").show();
		$(".footer").show();
	
		
	});
});
