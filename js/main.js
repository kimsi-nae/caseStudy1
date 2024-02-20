$(function(){
	const mainSwiper=new Swiper(".mainSwiper", {
		loop: true,
		autoplay: {
			delay: 5000
		},

		on: {
		init: function(){
			$(".main_slider .account .current").text(this.realIndex+1);
			$(".main_slider .account .total").text(this.slides.length);
		},
		slideChange: function(){
			console.log(this.realIndex+1);
			$(".main_slider .account .current").text(this.realIndex+1);
		}
	}
	});

	$(".main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	// 메뉴 gnb li에 hover가 되면 li에 active class 추가, 제거
	// 메뉴 gnb li의 a에 focusin이 되면 li에 active class 추가
	// 메뉴 gnb에 li의 li:last-child의 a에 focusout 되면 부모 li에 active class 제거

	$("#gnb > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(".menu_bg").addClass("active");
		},
		function(){
			$(this).removeClass("active");
			$(".menu_bg").removeClass("active");
		}
	);

	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$(".menu_bg").addClass("active");
	});

	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
		$(".menu_bg").removeClass("active");
	});
});