$(function(){
	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false,
	}).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style","");
	$("#mobile-menu").children("ul").removeClass("sf-menu")
	.parent().mmenu({
		extensions: ['theme-white', 'effect-menu-slider', 'pagedim-black'],
		navbar: {
			title: "Меню"
		}
	});

$(".toggle-mnu").click(function() {
  $(this).addClass("on");
});

var api = $("#mobile-menu").data("mmenu");
api.bind("closed", function(){
		$(".toggle-mnu").removeClass("on");
});

});