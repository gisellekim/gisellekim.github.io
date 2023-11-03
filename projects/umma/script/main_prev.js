  	window.onload = function() { 
	// resize info
		$(window).resize(function() {
			if($(window).width() < 1599){
				$('.kitchen_light').addClass('below');
				$('.kitchen_stool').removeClass('below');
				$('.kitchen_trolley').removeClass('below');
				$('.diningroom_rug').removeClass('below');
				$('.diningroom_desk').removeClass('below');
				$('.diningroom_lamp').addClass('below');
				
				$('.studio_curtain').addClass('below');
				$('.studio_vase').addClass('below');
				$('.studio_rug').removeClass('below');

			} else {
				$('.kitchen_light').removeClass('below');
				$('.kitchen_stool').addClass('below');
				$('.kitchen_trolley').addClass('below');
				$('.diningroom_lamp').removeClass('below');
				$('.diningroom_desk').addClass('below');
				$('.diningroom_rug').addClass('below');
				$('.studio_curtain').removeClass('below');
				$('.studio_vase').removeClass('below');
				$('.studio_rug').addClass('below');
			}
		});
		$(window).trigger('resize');

	// mobile menu
		$('#menu').hover(function(){
			$('.contents section > div').css({visibility:'visible'});
		}, function(){
			$('.contents section > div').css({visibility:'hidden'});
		});

	// 마우스 값 가져오기 (걸리는 곳 css에 transition 걸면 버벅거림)
		$('#main').mousemove(function(e){
			var posX = e.pageX;	//console.log(e.pageX); 
			var posY = e.pageY;	//console.log(e.pageY);
			// 나눈 수치가 작을 수록 움직임이 커진다
			// right기준이므로, 더할수록 왼쪽으로 + 마우스 방향대로 움직이고 내릴수록 오른쪽으로 - 마우스 반대방향으로 움직인다 
			//원래 기준점은 그대로 지켜줘야한다.

			$('.bedding').css({left:'calc(0% - ' + (posX/10)+ 'px',top:'calc(-50% - ' + (posY/80)+ 'px'});
			$('.knit').css({right:'calc(25% - ' + (posX/20)+ 'px',top:'calc(30% + ' + (posY/20)+ 'px'});
			$('.furmat').css({left:'calc(40% + ' + (posX/10)+ 'px',top:'calc(40% - ' + (posY/10)+ 'px'});
			$('.pillow').css({right:'calc(-24% + ' + (posX/50)+ 'px',bottom:'calc(-15% - ' + (posY/100)+ 'px'});
			$('.wooden').css({right:'calc(20% - ' + (posX/20)+ 'px',bottom:'calc(10% - ' + (posY/30)+ 'px'});
			$('.decoplant').css({right:'calc(0% - ' + (posX/10)+ 'px',top:'calc(10% - ' + (posY/20)+ 'px'});
			$('.blanket').css({left:'calc(0% - ' + (posX/50)+ 'px',top:'calc(15% + ' + (posY/10)+ 'px'});
			$('.porcelain2').css({left:'calc(0% + ' + (posX/10)+ 'px',bottom:'calc(0% + ' + (posY/20)+ 'px'}); 
			$('.cactus3').css({right:'calc(25% - '+ (posX/30)+ 'px',bottom:'calc(0% - '+ (posY/30)+ 'px'});
			$('.cactus2').css({right:'calc(30% + ' + (posX/60)+ 'px',bottom:'calc(-2% + '+ (posY/60)+ 'px'});
			$('.basket').css({right:'calc(-5% - ' + (posX/50) + 'px',bottom:'calc(-30% - ' + (posY/50) + 'px'});
			$('.plant').css({right:'calc(-2% + ' + (posX/30)+ 'px',top:'calc(-8% + '+ (posY/30)+ 'px'});
			$('.storage3').css({left:'calc( 35% + '+(posX/30)+ 'px',bottom:'calc(1% + '+ (posY/30)+ 'px'});
			$('.porcelain').css({left:'calc( 8% - '+ (posX/30)+ 'px',bottom:'calc(-20% - '+ (posY/30)+ 'px'});
			$('.storage2').css({left:'calc( 30% - '+ (posX/30)+ 'px',bottom:'calc(0% - '+ (posY/30)+ 'px'});
			$('.storage1').css({left:'calc( 41% - '+ (posX/30)+ 'px',bottom:'calc(-5% - '+ (posY/80)+ 'px'});
			$('.car').css({left:'calc( 15% + '+(posX/30)+ 'px',bottom:'calc(0% + '+ (posY/30)+ 'px'});
			$('.cactus1').css({right:'calc( 40% + '+(posX/50)+ 'px',bottom:'calc(-5% + ' +(posY/80)+ 'px'});

			
		});
	
	// product info
		$('.contents section > div').hover(function(){
			$(this).addClass('active');
		}, function(){
			$(this).removeClass('active');
		});
		
		  $( function() {
			$('#main div').draggable();
		  } );
	}