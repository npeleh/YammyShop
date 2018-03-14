$(document).ready(function () {
	$('.hit').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		centerPadding: "10px",
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true
				}
			},
			{
				breakpoint: 959,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					autoplay: true,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					dots: true
				}
			}
		]
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$("#sclollUp").fadeIn();
		} else {
			$("#sclollUp").fadeOut();
		}
	})
	$("#sclollUp").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800)
	})
	var brend = true;
	$(".all_brends").click(function () {
		if (brend) {
			$(".logo8").fadeIn();
			$(".main").animate({
				minHeight: "2280px"
			}, 1000)
			brend = false;
		} else {
			$(".logo8").fadeOut();
			$(".main").animate({
				minHeight: "2160px"
			}, 1000)
			brend = true;
		}
	})
})
