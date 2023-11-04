
  	$(document).ready(function(){
		/* 모달 레이어 팝업 -signup */
		$('#event').click(function(){
			$('#popup_s').show();
		});
		$('#popup_signup button').click(function(){
			$('#popup_s').hide();
		});
		/* 모달 레이어 팝업 -ambassador */
		$('#apply').click(function(){
			$('#popup_a').show();
		});
		$('#popup_ambassador .close').click(function(){
			$('#popup_a').hide();
		});
		$('.profile_picture').click(function(){
			alert('사진을 업로드하시겠습니까?');
		});

		/* lnb */
		$('#lnb').hover(function(){
			$('.bottom-menu').stop().slideDown(600);
		},function(){
			$('.bottom-menu').stop().slideUp(600);
		});

		//분리된 bottom menu에 hover했을 때, lnb에도 hover한것처럼 보이게 하기위해서
		var bottom = $('.bottom-menu');
		var menu = $('.top-menu li');
		bottom.find('ul').hover(function(){
			var i = $(this).index();
			menu.removeClass('on');
			menu.eq(i).addClass('on');
		}, function(){
			menu.removeClass('on');
		});

		$('.top-menu a').hover(function(){
			$(this).addClass('on');
		},function(){
			$(this).removeClass('on');
		});

		//slide
		var interval; /*왜 먼저 정의해주나요?*/
		slide();

		function slide(){
			var slide = $('.images a');
			var button = $('.buttons div');
			var count = 0;
			interval = setInterval(function(){
				var i = $(this).index();
				slide.eq(count).css('z-index',1).stop().fadeOut(600);
				button.removeClass('on');
				count < slide.length-1 ? count++ : count = 0;
				slide.eq(count).css('z-index',2).delay(300).stop().fadeIn(600);
				button.eq(count).addClass('on');
			}, 1500);
		}
		
		$('#slide').hover(function(){
			clearInterval(interval);
		},function(){ slide(); }); 


		/* wishlist */
		$('.wish').click(function(){
			$(this).toggleClass('on');
		});

		/* product */
		$('.product').hover(function(){
			$(this).addClass('on');
		},function(){
			$(this).removeClass('on');
		});
	});