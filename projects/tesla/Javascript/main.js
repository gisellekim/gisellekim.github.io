
  	window.onload = function() {
		//Javascript 속성(한번만 쓸수있음) (<->$document..-> Jquery속성(밑에 계속 쓸수 있음) : 윈도우 시작되자마자 이미지들 다 불러오기
		$(window).resize(function() {
			$('#wrap').fullpage({
			verticalCentered: false,
			anchors: ['firstPage', 'secondPage', '3rdPage'],
			navigation: $(window).width() > 479 ? true : false,
			autoScrolling: $(window).width() > 479 ? true : false,
			navigationPosition: 'left',
			navigationTooltips: ['Home', 'Power your life', 'All models','Model S', 'Model 3', 'Model X','Model Y', 'Roadster', 'Car Control', 'Charge at Home', 'Solar Energy', 'Company Information']
				//'Home', 'Model S,3,X', 'All models','Model S', 'Model 3', 'Model X','Model Y', 'Car Control', 'Charge at Home', 'Solar Energy', 'Company Information']
			});
		});
		$(window).trigger('resize');

		var offset2 = $('#article2').offset().top;
		$(window).scroll(function(){
			var sct = $(window).scrollTop();
			
			if (sct > offset2){
				$('#article3 section figure').fadeIn();}
		});

		$('#article2 input').click(function(){
			var i = $(this).index();
			$('#article2 .slide').eq(i).css({left:0});

		});

		$('#article2').hover(function(){
			$('#article2 h2').fadeIn(1000);
		}, function(){
			$('#article2 h2').fadeOut(1000);
		});

		$('#article3').hover(function(){
			$('#article3 figure').css('margin-top','1%');
			$('#article3 .small_1st').css('margin-top','1%');
		},function(){
			$('#article3 figure').css('margin-top','6%');
			$('#article3 .small_1st').css('margin-top','6%');
		});
	}