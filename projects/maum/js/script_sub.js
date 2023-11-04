	$(document).ready(function(){
		
		/*before after*/
			var count = 0;
			var prev = $('.prev');
			var next = $('.next'); 
			var programs = $('.programs');
			var img = $('.programs > div');
			
			next.click(function(){
				if (count == 0){
					programs.animate({left:'-1180px'},400);
				} 
					count++;
			});

			prev.click(function(){
				if (count == 1){
					programs.animate({left:0},400);
				} 
					count--;
			});

		/*Interval*/
		/*var current=0;
		setInterval(function(){
			$('.therapy ul li').eq(current).animate({left:'-100%'});
			if (current < $('.therapy ul li').size()-1){
				current++;
			} else {
				current=0;
			}
			$('.therapy ul li').eq(current).css({left:'100%'}).animate({left:0});
		},1000);*/

		/*progress*/
		
		var hp = $('#wrap').offset().top;
		$(window).scroll(function(){
			var sct = $(window).scrollTop();
			sct > hp ?	$('.programs').addClass('on') : $('.programs').removeClass('on'); 
		});

		$('.next').click(function(){
			$('.programs').removeClass('on');
			$('.programs').addClass('on2');
		});
		$('.prev').click(function(){
			$('.programs').removeClass('on2');
			$('.programs').addClass('on');
		});

		/*$('#wrap').mouseover(function(){
			$('.programs').addClass('on');
		});*/
		
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

		var snbBg = $('.snb .center');
		$('.snb .center > ul > li').hover(function(e){
			e.preventDefault;
			snbBg.addClass('on');
			$('.snb .center > ul > li').addClass('on');
		},function(e){
			e.preventDefault;
			snbBg.removeClass('on');
			$('.snb .center > ul > li').removeClass('on');
		});
	});