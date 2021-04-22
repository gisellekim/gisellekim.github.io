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
		  if ($(window).width() > 1024) {
			/* scroll remove */
			$('body').addClass('on');
			$('section').addClass('on');
			$('#wrap').addClass('on');

			/* scrolling amount */
			 $('#wrap').hScroll(70); 

			/* gnb fixed - horizontal */
			$('.gnb_wrapper').click(function(){
				$('.gnb_wrapper').addClass('fixed');
			});
			$('.arrow').click(function(){
				$('.gnb_wrapper').addClass('fixed');
			});
            
			$('#wrap').scroll(function(){
				var scl = $('#wrap').scrollLeft();
				if (scl > 1000){
					$('.key1').css({transform:'translateX(+30%)'});
					$('.key2').css({transform:'translateX(+30%)'});
					$('.key3').css({transform:'translateX(+30%)'});
				} else if (scl > 750){
					$('.key1').css({transform:'translateX(+16%)'});
					$('.key2').css({transform:'translateX(+20%)'});
					$('.key3').css({transform:'translateX(+5%)'});
				}else if (scl > 500){
					$('.key1').css({transform:'translateX(-25%)'});
					$('.key2').css({transform:'translateX(+15%)'});
					$('.key3').css({transform:'translateX(0%)'});
				} else if (scl > 276){
					$('.key1').css({transform:'translateX(-10%)'});
					$('.key2').css({transform:'translateX(+10%)'});
					$('.key3').css({transform:'translateX(-10%)'});
				} else if (scl > 69){
					$('.gnb_wrapper').addClass('fixed');
					$('.key1').css({transform:'translateX(-5%)'});
					$('.key2').css({transform:'translateX(+5%)'});
					$('.key3').css({transform:'translateX(-5%)'});
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

		/* gnb fixed - vertical */
			var wrapOT = $('#wrap').offset().top;
			$(window).scroll(function(){
				var sct = $(window).scrollTop();
				sct > wrapOT ? $('.gnb_wrapper').addClass('fix') : $('.gnb_wrapper').removeClass('fix');	
			});
		  }
		$(window).trigger('resize');

		/* logo movement */
			$('.gnblogo').click(function(){
			$(location).attr('href','#contact');
			});

		/* #home mouse */
			$('#home').mousemove(function(e){
				if (e.pageX/* + $('#wrap').scrollLeft()*/ > ($(window).width()*9)/10){
					$('.hover-image').addClass('off');
				} else {
				$('.hover-image').removeClass('off');
				}
			});
			$('#about1').hover(function(){
				$('.hover-image').addClass('off');
			},function(){
				$('.hover-image').removeClass('off');
			});

		/* #home bg overlay */
			$(".hover-container").on("mousemove", function (e) {
			  var parentOffset = $(this).parent().offset();
			  var relX = e.pageX - parentOffset.left;
			  var relY = e.pageY - parentOffset.top;
			  var picHeight = $('.hover-image').height();
			  var picWidth = $('.hover-image').height();
			  $('.hover-image')
				.css("left", relX - 150 + "px")
				.css("top", relY - 150 + "px")
				.css("background-position", (picWidth-relX-150) + "px " 
					 + (picHeight-relY-150) + "px")
			});

		/* #about1 mouse */
			$('#about1').on('mousemove', function (e) {
			  var parentOffset = $(this).parent().offset();
			  var relX = e.pageX - parentOffset.left;
			  var relY = e.pageY - parentOffset.top;
			  $('.mouse')
				.css('left', relX - 125 + 'px')
				.css('top', relY - 125 + 'px')
			});

			$('#about1').mousemove(function(e){
				e.pageX > $(window).width()*2/5 ?	$('.mouse').css({display:'block',top:e.pageY,left:e.pageX}):$('.mouse').css({display:'none'});
			});
			$('#about1_container').css('cursor', 'none'); 

		/* #about1 image slide */
			var count=0;
			var slide =$('#about1 figure');
			slide.click(function(){
				slide.eq(count).stop().fadeOut(1000, function(){
					count < slide.size()-1 ? count++ : count = 0;
					slide.eq(count).stop().fadeIn(1000);
					$('.number').text(count+1);
				});
			});

		/* work shortcut */
			$('.text_container h1').click(function(){
				var i = $(this).index()+4;
				var sW = $('section').eq(i).offset().left + $(window).width()*3;
				console.log($('section').eq(i).attr('id'));
				$('#wrap').animate({scrollLeft: sW}, 800);
				return false;
			});

		var i = $(this).index();
		/* popup detail */
			$('.more').click(function(){
				$(this).parent().next('.detail').css({display:'block'});
			});
			$('.close').click(function(){
				$(this).parent('.detail').css({display:'none'});
			});
			
		/* mobile detail */
			if ($(window).width() < 813) {
				$('.more').click(function(){
					$(this).parent().parent().css({height:$(this).parent().next('.detail').height()});
				});
				$('.close').click(function(){
					$(this).parent().parent().css({height:'auto'});
				});
			}

		/* gnb hamburger */	
		  $('.hamburger').click(function(){
			$(this).toggleClass("is-active");
			/* mobile menu */
			$('.mobile_menu').slideToggle();
		  });
		  $('.mobile_menu a').click(function(){
			$('.mobile_menu').slideUp();
		  });

		/* skill amount */
			
			// bg
				$('#contact').mouseenter(function(){
					draw(100, '.progress', '#ec0');
				 });
				 
				var conOl = $('#work5').offset().left;
				var ol = $(window).offset().left;
				if (ol > conOl){ 
						draw(100, '.progress', '#ec0');
				}
				var conOT = $('#work5').offset().top;
				$(window).scroll(function(){
					var ot = $(window).offset().top;
					if (ot > conOT){ 
						draw(100, '.progress', '#ec0');
					}
				})

				function draw(max, classname, colorname){
				   var i=1;
					var func1 = setInterval(function(){
					  if(i<max){
						  color1(i,classname,colorname);
						  i++;
					  } else{
						clearInterval(func1);
					  }
					},10);
				}
				function color1(i, classname,colorname){
				   $(classname).css({
						"background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
				   });
				}


				function replay(){
				  draw(100, '.progress', '#ec0');
				  }


			/*$('#contact').mouseenter(function(){
				var startColor = '#fff';
				var endColor = '#ec0';
				$('.progress').each(function(i) {
					var circle = new ProgressBar.Circle(this, {
						color: startColor,
						easing: 'linear',
						strokeWidth: 8,
						duration: 1500,
						text: {
							value: '0'
						}
					});
					
					var value = ($(this).attr('value') / 100);

					circle.animate(value, {
						from: {
							color: startColor
						},
						to: {
							color: endColor
						},
						step: function(state, circle, bar) {
							circle.path.setAttribute('stroke', state.color);
							console.log(circle);
							circle.setText((circle.value() * 100).toFixed(0));
						}
					});
				});
		});*/

	}