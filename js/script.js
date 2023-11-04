$(function ($) {
  if ($(window).width() > 1000) {
    $.fn.hScroll = function (amount) {
      amount = 50
      $(this).bind("DOMMouseScroll mousewheel", function (event) {
        var oEvent = event.originalEvent,
          direction = oEvent.detail
            ? oEvent.detail * -amount
            : oEvent.wheelDelta,
          position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
      });
    };
  }
});

window.onload = function () {
  /* skill function */
  function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function () {
      if (i < max) {
        color1(i, classname, colorname);
        i++;
      } else {
        clearInterval(func1);
      }
    }, 10);
  }
  function color1(i, classname, colorname) {
    $(classname).css({
      background:
        "conic-gradient(" +
        colorname +
        " 0% " +
        i +
        "%, #ffffff " +
        i +
        "% 100%)",
    });
  }

  function replay() {
    draw(100, ".progress", "#ec0");
  }

  /* skill amount */
  // bg
  $("#contact").mouseenter(function () {
    draw(100, ".progress", "#ec0");
  });

  /* logo movement */
  $(".gnblogo").click(function () {
    $(location).attr("href", "#contact");
  });
  /* #about1 image slide */
  var count = 0;
  var slide = $("#about1 figure");
  slide.click(function () {
    slide
      .eq(count)
      .stop()
      .fadeOut(1000, function () {
        count < slide.size() - 1 ? count++ : (count = 0);
        slide.eq(count).stop().fadeIn(1000);
        $(".number").text(count + 1);
      });
  });
  var i = $(this).index();
  /* popup detail */
  $(".more").click(function () {
    $(this).parent().next(".detail").css({ display: "block" });
  });
  $(".close").click(function () {
    $(this).parent(".detail").css({ display: "none" });
  });

  /* mobile detail 
				if ($(window).width() < 813) {
					$('.more').click(function(){
						$(this).parent().parent().css({height:$(this).parent().next('.detail').height()});
					});
					$('.close').click(function(){
						$(this).parent().parent().css({height:'auto'});
					});
				}*/
  /* gnb hamburger */
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    /* mobile menu */
    $(".mobile_menu").slideToggle();
  });
  $(".mobile_menu a").click(function () {
    $(".mobile_menu").slideUp();
  });

  /* #ABOUT2 p 대체 */
  $("#about2 p").hover(
    function () {
      $("#about2 .about_eng, #about2 .about_kor").toggleClass("show");
    },
    function () {
      $("#about2 .about_eng, #about2 .about_kor").toggleClass("show");
    }
  );
  $("#about2").click(function () {
    $("#about2 .about_eng, #about2 .about_kor").toggleClass("show");
  });
  /*display:block 해놓으면 hover 와 click 이 같이 쓰였을 때 충돌이 생길 수 있다 . 왜냐하면 click은 hover상태니까. 이럴 때에는, class를 활용하기!*/

  /*	var txt = $('#about2 p').html();
				$('#about2 p').hover(function(){
					$(this).html('안녕하세요. 주니어 웹퍼블리셔 김수경입니다.<br> 제 포트폴리오를 보러 와주셔서 감사합니다. 미국과 한국에서 디자인산업 내 총 1년 반개월의 경력이 있으며, 제가 앞으로 더욱 배우고싶은 분야이자, 현재 관심이 많은 분야는 새로운 기술과 인터랙션입니다. 디자인과 코딩을 사랑하고, 매 프로젝트마다 그 재미를 더해가고 있습니다. 모든 프로젝트에 있어 항상 이유를 고민하는 것을 바탕으로, 현재 더 나아가고 성장하고 있습니다.');
					console.log(txt);
				},function(){
					$(this).html(txt);
				});
			*/

  /* #home mouse */
  $("#home").mousemove(function (e) {
    if (e.pageX /* + $('#wrap').scrollLeft()*/ > ($(window).width() * 9) / 10) {
      $(".hover-image").addClass("off");
    } else {
      $(".hover-image").removeClass("off");
    }
  });
  $("#about1").hover(
    function () {
      $(".hover-image").addClass("off");
    },
    function () {
      $(".hover-image").removeClass("off");
    }
  );

  /* #home bg overlay */
  $(".hover-container").on("mousemove", function (e) {
    var parentOffset = $(this).parent().offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    var picHeight = $(".hover-image").height();
    var picWidth = $(".hover-image").height();
    $(".hover-image")
      .css("left", relX - 150 + "px")
      .css("top", relY - 150 + "px")
      .css(
        "background-position",
        picWidth - relX - 150 + "px " + (picHeight - relY - 150) + "px"
      );
  });

  /* when it is wider than 1024 */
  if ($(window).width() > 1024) {
    /* scroll bar remove */
    $("body").addClass("on");
    $("section").addClass("on");
    $("#wrap").addClass("on");

    /* scrolling amount */
    $("#wrap").hScroll(70);

    /* gnb fixed (horizontal) */
    $(".gnb_wrapper").click(function () {
      $(".gnb_wrapper").addClass("fixed");
    });
    $(".arrow").click(function () {
      $(".gnb_wrapper").addClass("fixed");
    });

    /* work shortcut */
    $(".text_container h1").click(function () {
      var i = $(this).index() + 4;
      var sectionW = $("section").eq(i).offset().left + $(window).width() * 3;
      $("#wrap").animate({ scrollLeft: sectionW }, 800);
    });

    /* #about1 mouse */
    $("#about1").on("mousemove", function (e) {
      var parentOffset = $(this).parent().offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(".mouse")
        .css("left", relX - 125 + "px")
        .css("top", relY - 125 + "px");
    });

    $("#about1").mousemove(function (e) {
      e.pageX > ($(window).width() * 2) / 5
        ? $(".mouse").css({ display: "block", top: e.pageY, left: e.pageX })
        : $(".mouse").css({ display: "none" });
    });
    $("#about1_container").css("cursor", "none");

    /* when scroll */
    $("#wrap").scroll(function () {
      var scl = $("#wrap").scrollLeft();
      /* #contact skill */
      if (scl > 14980 && scl < 14990) {
        draw(100, ".progress", "#ec0");
      }
      if (scl > 1000) {
        $(".key1, .key2, .key3").css({ transform: "translateX(+30%)" });
      } else if (scl > 750) {
        $(".key1").css({ transform: "translateX(+16%)" });
        $(".key2").css({ transform: "translateX(+20%)" });
        $(".key3").css({ transform: "translateX(+5%)" });
      } else if (scl > 500) {
        $(".key1").css({ transform: "translateX(-25%)" });
        $(".key2").css({ transform: "translateX(+15%)" });
        $(".key3").css({ transform: "translateX(0%)" });
      } else if (scl > 276) {
        $(".key1, .key3").css({ transform: "translateX(-10%)" });
        $(".key2").css({ transform: "translateX(+10%)" });
      } else if (scl > 69) {
        $(".gnb_wrapper").addClass("fixed");
        $(".key1,.key3").css({ transform: "translateX(-5%)" });
        $(".key2").css({ transform: "translateX(+5%)" });
      } else {
        $(".gnb_wrapper").removeClass("fixed");
        $(".key1, .key2, .key3").css({ transform: "translateX(0)" });
      }
    });
  } else {
    /* when it is narrower than 1024 */
    $("body").removeClass("on");
    $("section").removeClass("on");
    $("#wrap").removeClass("on");
    $("#about1 .mouse").text("Touch");

    /* gnb fixed (vertical) */
    var wrapOT = $("#wrap").offset().top;
    var contOT = $("#work6 ul li:nth-child(3)").offset().top;
    var stopOT = $("#work6 ul li:nth-child(5)").offset().top;
    $(window).scroll(function () {
      var sct = $(window).scrollTop();
      if (sct > wrapOT) {
        $(".gnb_wrapper").addClass("fix");
        $("#home .keywords ").css({ marginTop: "20%" });
      } else {
        $(".gnb_wrapper").removeClass("fix");
        $("#home .keywords ").css({ marginTop: "30%" });
      }
      /* #contact skill */
      if (sct > contOT && sct < stopOT) {
        draw(100, ".progress", "#ec0");
      }
    });

    /* work shortcut mobile */
    var wn = new Array();
    wn[0] = $(".text_container h1:last").offset().top;
    wn[1] = $("#umma ul li:nth-child(10)").offset().top;
    wn[2] = $("#tesla ul li:nth-child(10)").offset().top;
    wn[3] = $("#zigzag ul li:nth-child(10)").offset().top;
    wn[4] = $("#maum ul li:nth-child(10)").offset().top;
    wn[5] = $("#reviewer ul li:nth-child(10)").offset().top;
    $(".text_container h1").click(function (e) {
      var n = $(this).index();
      e.preventDefault();
      $("html,body").animate({ scrollTop: wn[n] }, 800);
      return false;
    });
  }

  /*skill -delete*/
  /*		 $(window).scroll(function(){						
						var contactOl = $('#work6 ul').offset().left;
						var ol = $(window).scrollLeft();
						//	console.log(ol);
						if (ol > contactOl){ 
	 
								draw(100, '.progress', '#ec0');
						}
						var contactOT = $('#work6 ul').offset().top;
						var ot = $('#wrap').scroll().top;
						if (ot > contactOT){ 
							draw(100, '.progress', '#ec0');
						}
					 }); */

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

  $(window).trigger("resize");
};
