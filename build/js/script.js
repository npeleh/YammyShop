//document.document.getElementsByClassName("slick-slider")[0].onload = function () {
//	setTimeout(function () {
//		var preloader = document.getElementsByClassName("slick-slider")[0];
//		if (!preloader.classList.contains('done')) {
//			preloader.classList.add('done');
//		}
//	}, 1000);
//}
$(document).ready(function () {
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

})
var a = document.getElementsByClassName("maina");
var logo = document.getElementById("logo_a");
for (var i = 0; i < a.length; i++) {
	a[i].onclick = function () {
		for (var j = 0; j < a.length; j++) {
			a[j].style.color = "#000";
		}
		this.style.color = "#50b3a2";
	}
}
logo.onclick = function () {
	for (var j = 0; j < a.length; j++) {
		a[j].style.color = "#000";
	}
}
