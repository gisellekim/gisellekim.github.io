
  	$(document).ready(function(){
		/* 모달 레이어 팝업 */
		$('#event').click(function(){
			$('#popup_s').show();
		});
		$('#popup_signup button').click(function(){
			$('#popup_s').hide();
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
			$('.best').addClass('on');
		});

		// 글씨 색 변화
		menu.hover(function(){
			$(this).addClass('on');
		},function(){
			$(this).removeClass('on');
		});

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

		/* 가격 slider */
		$('#slider-range').slider({
			range:true,// true, min 등 영역설정이 가능 (짙은 색으로 표시 됨)
			min:0,
			max:999999,
			values:[20000,60000], //value's'
			slide:function(e,ui){
		   $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			 " - $" + $( "#slider-range" ).slider( "values", 1 ) );
				// input이니까 text값이 아니라 value값으로 넣어줘야한다.  
			}
		});

		/* site 이동 */
		$('.logo').click(function(){
        $(location).attr('href','index.html');
		});

		$('.bestItem').click(function(){
        $(location).attr('href','index_detail.html');
		});

		/* filter */
		 /*$('.checkbox').click(function(e){
			$(this).toggleClass('on');
		});*/
		
		$('.filter li').click(function(e){
			e.preventDefault(); /*preventDefault는 함수다. () 절대 잊지말기 !!!!! 바보!!! */
			var i = $(this).index();
			$('.checkbox').eq(i).toggleClass('on');
			$('.checkbox').eq(0).hasClass('on') ? $('.i12').show() : $('.i12').hide();  /* 이렇게해도 된다. */
			$('.filter li').eq(1).find('span').hasClass('on') ? $('.i34').show() : $('.i34').hide(); 
			$('.filter li').eq(2).find('span').hasClass('on') ? $('.i56').show() : $('.i56').hide(); 
			$('.filter li').eq(3).find('span').hasClass('on') ? $('.i78').show() : $('.i78').hide(); 
			$('.filter li').eq(4).find('span').hasClass('on') ? $('.i90').show() : $('.i90').hide(); 
			$('.filter li').eq(5).find('span').hasClass('on') ? $('.i11').show() : $('.i11').hide(); 
			if ($('.checkbox').is('.on') === false){
				$('#products figure').show();
			}
		});

		 /*이렇게 하면 안된다!!!*/
	/*	$('.checkbox').eq(i).toggleClass('on');
				if (i == 0){ /* == 를 써야함
					$('.i12').show();
				} else if ( i == 1){
					$('.i34').show();
				} else if ( i == 2){
					$('.i56').show();
				} else if ( i == 3){
					$('.i78').show();
				} else if ( i == 4){
					$('.i90').show();
				} else {
					$('.i11').show();
				} */
	});