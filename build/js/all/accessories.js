app.controller("accessoriesCtrl", function () {
	var vm = this;
	vm.catalogA = [
		{
			id: 4,
			src: "img/chasy-s-kvartsevym-mekhanizmom-i-kozhanym-remeshkom-98242895967430_small4.jpg",
			name: "Годинники з кварцовим механізмом і шкіряним ремінцем",
			price: 4200,
			in_stock: "В наявності",
			color: "gray"
		},
		{
			id: 2,
			src: "img/solntsezashchitnye-ochki-iz-glyantsevogo-atsetata-38897167849871_small4.jpg",
			name: "Сонцезахисні окуляри з глянцевого ацетату",
			price: 2300,
			in_stock: "В наявності",
			color: "gray"
		},
		{
			id: 1,
			src: "img/58463018470340_small4.jpg",
			name: "Бейсболка «Ялта»",
			price: 560,
			in_stock: "В наявності",
			color: "yellow"
		},
		{
			id: 3,
			src: "img/portmone-iz-naturalnoy-kozhi-12701865327026_small4.jpg",
			name: "Портмоне з натуральної шкіри",
			price: 700,
			in_stock: "В наявності",
			color: "gray"
		}
	];
	var color = document.getElementsByClassName('color');
	for (var i = 0; i < color.length; i++) {
		color[i].onclick = function () {
			for (var j = 0; j < color.length; j++) {
				color[j].style.border = "none";
			}
			this.style.border = '3px solid #50b3a2';
		}
	}
	var nav_btn = document.getElementsByClassName("nav_btn");
	for (var i = 0; i < nav_btn.length; i++) {
		nav_btn[i].onclick = function () {
			for (var j = 0; j < nav_btn.length; j++) {
				nav_btn[j].style.backgroundColor = "#fafafa";
				nav_btn[j].style.color = "#000";
			}
			this.style.backgroundColor = '#50b3a2';
			this.style.color = "#fff";
		}
	}
	vm.color = function (x) {
		vm.myColor = x;
	};
	vm.popular = function (x) {
		vm.myPopular = x;
		vm.myCheap = '';
		vm.myName = '';
	};
	vm.cheap = function (x) {
		vm.myCheap = x;
		vm.myPopular = '';
		vm.myName = '';
	};
	vm.name = function (x) {
		vm.myName = x;
		vm.myPopular = '';
		vm.myCheap = '';
	};
})
