/*$(document).ready(function() {
	$('body').mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 30);
		e.preventDefault();
	});*/

jQuery(function ($) {
			$.fn.hScroll = function (amount) {
			amount = amount || 120;
			$(this).bind("DOMMouseScroll mousewheel", function (event) {
				var oEvent = event.originalEvent, 
					direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
					position = $(this).scrollLeft();
				position += direction > 0 ? -amount : amount;
				$(this).scrollLeft(position);
				event.preventDefault();
			})
		};
});
$(document).ready(function(){
	
	/* scrolling amount */
	 $('#wrap').hScroll(70); 
	
	/* gnb fixed*/
		var offset = $('#wrap').offset().left;

	//var gnbOffset = $('.gnb_wrapper').offset().left;
		$('#wrap').scroll(function(){
			var scl = $('#wrap').scrollLeft();
			/*scl > 70 ? $('.gnb_wrapper').addClass('fixed') : $('.gnb_wrapper').removeClass('fixed');*/
			if (scl > 70){
				$('.gnb_wrapper').addClass('fixed');
				$('.key1').css({transform:'translateX(-5%)'});
				$('.key2').css({transform:'translateX(+5%)'});
				$('.key3').css({transform:'translateX(-5%)'});
			} else if (scl > 140){
				$('.key1').css({transform:'translateX(-10%)'});
				$('.key2').css({transform:'translateX(+10%)'});
				$('.key3').css({transform:'translateX(-10%)'});
			} else if (scl > 210){
				$('.key1').css({transform:'translateX(-15%)'});
				$('.key2').css({transform:'translateX(+15%)'});
				$('.key3').css({transform:'translateX(-15%)'});
			} else {
				$('.gnb_wrapper').removeClass('fixed');
				$('.key1').css({transform:'translateX(0)'});
				$('.key2').css({transform:'translateX(0)'});
				$('.key3').css({transform:'translateX(0)'});
			}
		});

	/* #about1 mouse */
		$('#about1').mousemove(function(e){
			e.pageX > $(window).width()/2 ?	$('.mouse').css({display:'block',top:e.pageY-60,left:e.pageX-60}):$('.mouse').css({display:'none'});
		});
		$('#about1_container').css('cursor', 'none'); 

		var count=0;
		$('#about1 figure').click(function(){
			var slide =$('#about1 figure');
			slide.eq(count).fadeOut(1000);
			count < slide.size()-1 ? count++ : count = 0;
			slide.eq(count).fadeIn(1000);
			$('.number').text(count+1);
		});

	/* overlay */
		$(".hover-container").on("mousemove", function (e) {
		  var parentOffset = $(this).parent().offset();
		  var relX = e.pageX - parentOffset.left;
		  var relY = e.pageY - parentOffset.top;
		  var picHeight = $('.hover-image').height();
		  var picWidth = $('.hover-image').height();
		  $('.hover-image')
			.css("left", relX - 50 + "px")
			.css("top", relY - 50 + "px")
			.css("background-position", (picWidth-relX-50) + "px " 
				 + (picHeight-relY-50) + "px")
		});
});