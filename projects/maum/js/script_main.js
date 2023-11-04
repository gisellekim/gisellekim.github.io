	$(document).ready(function(){
		/* 한번에 내려가기
		var d = false;
		$('html, body').on('mousewheel DOMMouseScroll'),function(e){
			var OE=e.originalEvent;
			var delta = OE.wheelDelta;
			var a = parseInt($('#wrap').css('top'));
			var b = $('article').height();
			var c = $('article').length();

			if (delta < 0 && a > (c-1)*-b && !d ){ 
				d = true; 
				$('#wrap').stop().animate({ 
					top: a += -b
				},1000, function(){
					d= false;
				});
			}
			if (delta > 0 && a < 0 && !d) {
				d=true;
				$('#wrap').stop().animate({ 
					top: a += b
				},1000, function(){
					d= false;
				});
			}
		}; */

		/* bottom icon scale */
		$('.bottom_2nd').find('img').hover(function(){
			$('.bottom_2nd').find('img').addClass('on');
		},function(){
			$('.bottom_2nd').find('img').removeClass('on');			
		});

		/* 상담 alert */
		$('#submit').click(function(){
			alert('소중한 관심에 감사드립니다.빠른 시일 내에 확인 후, 답변 드리겠습니다.오늘도 좋은 하루 되시길 바랍니다.감사합니다. ^^');
		});
		

		/* bottom fixed*/
		var menuOffset = $('#container').offset().top;
		var bottomOffset = $('.article2').offset().top;
		$(window).scroll(function(){
			var sct = $(window).scrollTop();
			sct > menuOffset && sct < bottomOffset ? $('.bottom').addClass('fixed') : $('.bottom').removeClass('fixed'); });

		/* menu */
		var menuBg = $('#menu_bg');
		$('#container').hover(function(e){
			e.preventDefault;
			menuBg.addClass('on');
			$('.lnb li').addClass('on');
			$('.gnb li').addClass('on');
		},function(e){
			e.preventDefault;
			menuBg.removeClass('on');
			$('.lnb li').removeClass('on');
			$('.gnb li').removeClass('on');
		});

		/* map */
		$('.right').hover(function(){
			$('.map').addClass('on');
		},function(){
			$('.map').removeClass('on');
		});
		$('.right').click(function(){
			var mapURL = 'https://www.google.com/maps/search/%EB%A7%88%ED%8F%AC%EC%9A%94%EC%96%91%EB%B3%91%EC%9B%90/@37.5650983,126.9078106,18z/data=!3m1!4b1';
			window.open(mapURL);
		});


		/* nav image */
		var nav_image = $('#nav_image ul li');
		var button = $('#nav_button li');
		var current = 0;
		
		button.click(function(e){
			e.preventDefault();
			var i = $(this).index();
			if ( current != i){
				button.removeClass('on');
				button.eq(i).addClass('on');
				nav_image.eq(i).css('left','100%').animate({left:0},300);
				nav_image.eq(current).animate({left:'-100%'}); 
				current = i;
			}
		});

		var interval;
		timer(); 
		function timer() {
			interval = setInterval(function(){
				var n = current+1;
				if (n==nav_image.size()) n = 0; 
				button.eq(n).trigger('click');
			},2000);
		}

		$('.article1_nav').hover(function(){
			clearInterval(interval);
		},function(){ timer(); });
	});