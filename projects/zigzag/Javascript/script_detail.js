
  	$(document).ready(function(){
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
		
		/*gallery*/
			var deCount = 0;
			var reCount = 0;
			var thumbListSize = 5;
			var thumbDetail = $('#thumbnail_detail'); 
			var up= thumbDetail.find('.up');
			var down = thumbDetail.find('.down'); 
			var thumbDeCont = thumbDetail.find('.container ul');
			var thumbDeWidth = $('#thumbnail_detail .container').height();
			var Dethumb = thumbDeCont.find('.thumb');
			var deMaxSize = Dethumb.size();
			var image = $('#main_image p');
			var thumbReview = $('#thumbnail_review');
			var prev= thumbReview.find('.prev');
			var next = thumbReview.find('.next'); 
			var thumbReCont = thumbReview.find('.container ul');
			var thumbContWidth = $('#thumbnail_review .container').width();
			var Rethumb = thumbReCont.find('.thumb');
			var reMaxSize = Rethumb.size();

			Dethumb.click(function(){
				var i = $(this).index();
				image.css('display','none');
				image.eq(i).css('display','block');
			});
			up.click(function(){
				if (deCount>0){
					deCount--;
				} else {
					deCount = deMaxSize / thumbListSize - 1;
				}
				moveVertical();
			});
			down.click(function(){
				if (deCount < deMaxSize / thumbListSize - 1){
					deCount++;
				} else { // 앞으로 안 돌아가고 싶으면, else를 빼면 된다.
					deCount = 0;
				}
				moveVertical();
			});

			function moveVertical(){
				var tu = deCount*thumbDeWidth*-1;
				thumbDeCont.animate({top:tu},400);
			}

			next.click(function(){
				if (reCount < reMaxSize / thumbListSize - 1){
					reCount++;
				} else { // 앞으로 안 돌아가고 싶으면, else를 빼면 된다.
					reCount = 0;
				}
				moveHorizontal();
			});
			prev.click(function(){
				if (reCount>0){
					reCount--;
				} else {
					reCount = reMaxSize / thumbListSize - 1;
				}
				moveHorizontal();
			});
			function moveHorizontal(){
				var tl = reCount*thumbContWidth*-1;
				thumbReCont.animate({left:tl},400);
			}

		/* 모달 레이어 팝업 - photo review */

			Rethumb.click(function(){
				var i = $(this).index();
				$('#popup').show();
				$('#popup img').hide().eq(i).show(); // 다른 이미지들은 hide해줘야한다.
			});
			$('#popup .close').click(function(){ 
				$('#popup').hide();
			});
			$('#popup img').click(function(){
				$('#popup').hide();
			});
			
		/* 모달 레이어 팝업 - buy */

			$('#button_buy').click(function(){
				$('#popup_checkout').show();
			});
			$('#popup_confirm .close').click(function(){ 
				$('#popup_checkout').hide();
			});
			

		/*output*/
			var price = 36000;
			var output = $('.amount');
			var qty = 1;
			$('#ivory').click(function(){
				output.css({display:'block'});
				$('.output_color').text($(this).val());
				$('.price').text(comma(price));
				/* $('#output').prepend('<div class="amount" style="display:block;"><table><tr><td class="output_del"><span class="del"></span></td><td class="output_color">IVORY</td><td class="output_size"></td><td class="output_qty"><span class="output_less"></span><h5>1</h5><span class="output_more"></span></td><td class="output_price" value="36000">36,000</td></tr></table></div>'); */
			});
			$('#beige').click(function(){
				output.css({display:'block'});
				$('.output_color').text($(this).val());
				$('.price').text(comma(price));
				/* $('#output').prepend(output.clone()); */
			});
			var i = $(this).index();
			$('.option_size').change(function(){ // option은 select의 값을 도와주는 것 뿐. 실제로 select의 값이 change되는 것이다. 그렇기 때문에, click이 아니라 change를 써야한다!
				$('.output_size').text($(this).val());
			});
			$('.del').click(function(){
				output.css({display:'none'});	
				$('.output_qty h5').text(1);
				$('.output_price').text('36,000');
				$('.price').text(0);
				qty = 1;
			});

		// 주문 내역 append


		/* amount button */
			$('.output_qty').find('span').hover(function(){
				$(this).addClass('on');
			},function(){
				$(this).removeClass('on');			
			});
			$('.output_more').click(function(){
				$('.output_qty h5').text(++qty);
				$('.output_price').text(comma(qty*price));
				$('.price').text(comma(qty*price));
			});
			$('.output_less').click(function(){
				if (qty > 1){
					$('.output_qty h5').text(--qty);
					$('.output_price').text(comma(qty*price));
					$('.price').text(comma(qty*price));
				} else {
					alert ('최소 구매 수량은 1개입니다.');
				}
			});

		//천단위 콤마
			function comma(num){
				var len, point, str; 
				   
				num = num + ""; 
				point = num.length % 3 ;
				len = num.length; 
			   
				str = num.substring(0, point); 
				while (point < len) { 
					if (str != "") str += ","; 
					str += num.substring(point, point + 3); 
					point += 3; 
				} 
				return str;
			}// 숫자가 아닐 경우, comma(parseInt(
		
		/* site 이동 */
			$('.logo').click(function(){
			$(location).attr('href','index.html');
			});
	
		/* 리뷰 네 아니오 버튼 */
			$('.review_buttons li').click(function(e){
				e.preventDefault();
				$(this).toggleClass('on');
			});
	});