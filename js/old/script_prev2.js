	jQuery(function ($) {
		  if ($(window).width() > 1000) {
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
		  }
	});

	window.onload = function() { 
		  if ($(window).width() > 1000) {
			/* scroll remove */
			$('body').addClass('on');
			$('section').addClass('on');
			$('#wrap').addClass('on');

			/* scrolling amount */
			 $('#wrap').hScroll(70); 

			/* gnb fixed*/
			var wrapOL = $('#wrap').offset().left;
			//var gnbOffset = $('.gnb_wrapper').offset().left;
			$('#wrap').scroll(function(){
				var scl = $('#wrap').scrollLeft();
				/*scl > 70 ? $('.gnb_wrapper').addClass('fixed') : $('.gnb_wrapper').removeClass('fixed');*/
				if (scl > 69){
					$('.gnb_wrapper').addClass('fixed');
					$('.key1').css({transform:'translateX(-10%)'});
					$('.key2').css({transform:'translateX(+10%)'});
					$('.key3').css({transform:'translateX(-5%)'});
				} else if (scl > 138){
					$('.key1').css({transform:'translateX(-20%)'});
					$('.key2').css({transform:'translateX(+20%)'});
					$('.key3').css({transform:'translateX(-10%)'});
				} else if (scl > 206){
					$('.key1').css({transform:'translateX(-30%)'});
					$('.key2').css({transform:'translateX(+30%)'});
					$('.key3').css({transform:'translateX(-15%)'});
				} else {
					$('.gnb_wrapper').removeClass('fixed');
					$('.key1').css({transform:'translateX(0)'});
					$('.key2').css({transform:'translateX(0)'});
					$('.key3').css({transform:'translateX(0)'});
				}
			});
		  } else {
			$('body').removeClass('on');
			$('section').removeClass('on');
			$('#wrap').removeClass('on');

		/* gnb fixed*/
			var wrapOT = $('#wrap').offset().top;
			$(window).scroll(function(){
				var sct = $(window).scrollTop();
				sct > wrapOT ? $('.gnb_wrapper').addClass('fix') : $('.gnb_wrapper').removeClass('fix');	
			});
		  }
		$(window).trigger('resize');

		/* work shortcut */
			var i = $(this).index();
			var sW = $('section').width();
			$('.text_container h1').eq(0).click(function(){
				/* scl = $('.work1').offset().left;  */
				$(window).scrollLeft(sW*1);
			});

		/* #home mouse */
			$('#home').mousemove(function(e){
				if (e.pageX/* + $('#wrap').scrollLeft()*/ > ($(window).width()*9)/10){
					$('.hover-image').addClass('off');
				}	
			});
			$('#about1').hover(function(){
				$('.hover-image').addClass('off');
			},function(){
				$('.hover-image').removeClass('off');
			});

		/* #about1 mouse */
			$('#about1').mousemove(function(e){
				e.pageX > $(window).width()*2/5 ?	$('.mouse').css({display:'block',top:e.pageY,left:e.pageX + 40}):$('.mouse').css({display:'none'});
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

		/* #home bg overlay */
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

		/* 메뉴이동 */
			$('.gnblogo').click(function(){
			$(location).attr('href','#contact');
			});

		/* gnb hamburger */	
		  $('.hamburger').click(function(){
			$(this).toggleClass("is-active");
			/* mobile menu */
			$('.mobile_menu').slideToggle();
		  });
		  $('.mobile_menu a').click(function(){
			$('.mobile_menu').slideUp();
		  });

	}