app.controller("homeCtrl", function () {
	var vm = this;
	var btn = document.getElementsByClassName("btn_a");
	var action = document.getElementsByClassName("action");
	for (var i = 0; i < action.length; i++) {
		btn[i].onclick = function () {
			for (var j = 0; j < btn.length; j++) {
				btn[j].style.background = "#fff";
				btn[j].style.color = "#000";
				//				action[j].style.display = "none";
			}
			this.style.background = "#50b3a2";
			this.style.color = "#fff";
			//			action[i].style.display = "block";
		}
	}
})
