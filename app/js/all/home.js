app.controller("homeCtrl", function () {
	var vm = this;
	var btn = document.getElementsByClassName("btn_a");
	var slick_slider = document.getElementsByClassName("slick-slider");
	//	var action = document.getElementsByClassName("action");

	for (let i = 0; i < btn.length; i++) {
		btn[i].onclick = function () {
			for (let j = 0; j < btn.length; j++) {
				btn[j].style.background = "#fff";
				btn[j].style.color = "#000";
				slick_slider[j].style.display = "none";
			}
			this.style.background = "#50b3a2";
			this.style.color = "#fff";
			slick_slider[i].style.display = "block";
		}
	}
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
		$('.share').slick({
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
		$('.novelty').slick({
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
		var brend = true;
		$(".all_brends").click(function () {
			if (brend) {
				$(".logo4").fadeIn();
				$(".main").animate({
					minHeight: "2335px"
				}, 1000)
				brend = false;
			} else {
				$(".logo4").fadeOut();
				$(".main").animate({
					minHeight: "2160px"
				}, 2000)
				brend = true;
			}
		})
	})
})
