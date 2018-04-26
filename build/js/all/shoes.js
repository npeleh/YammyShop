app.controller("shoesCtrl", function () {
	var vm = this;
	vm.catalogS = [
		{
			id: 2,
			src: "img/botinki-iz-naturalnoy-zamshi-i-tekstilnoy-podkladkoy-12620787860618_small4.jpg",
			name: "Черевики з натуральної замші і текстильної підкладкою",
			price: 1259,
			in_stock: "В наявності",
			action: "novelty",
			brand: "Reebok"
		},
		{
			id: 4,
			src: "img/kedy-iz-plotnogo-tekstilya-i-naturalnoy-zamshi-66260211293896_small4.jpg",
			name: "Кеди з щільного текстилю та натуральної замші",
			price: 1700,
			in_stock: "В наявності",
			action: "hit",
			brand: "Columbia"
		},
		{
			id: 1,
			src: "img/chrnye-muzhskie-kozhanye-tufli-93336024011174_small4.jpg",
			name: "Чорні чоловічі шкіряні туфлі",
			price: 1800,
			in_stock: "В наявності",
			action: "hit",
			brand: "Reebok"
		},
		{
			id: 3,
			src: "img/sinie-krossovki-iz-tekstilya-26198678877618_small4.jpg",
			name: "Сині кросівки з текстилю",
			price: 1350,
			in_stock: "В наявності",
			action: "novelty",
			brand: "Reebok"
		}
	];
	var action = document.getElementsByClassName('action');
	for (var i = 0; i < action.length; i++) {
		action[i].onclick = function () {
			for (var j = 0; j < action.length; j++) {
				action[j].style.color = "#000";
			}
			this.style.color = '#50b3a2';
		}
	}
	var brand = document.getElementsByClassName('brand');
	for (var i = 0; i < brand.length; i++) {
		brand[i].onclick = function () {
			for (var j = 0; j < brand.length; j++) {
				brand[j].style.color = "#000";
			}
			this.style.color = '#50b3a2';
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
	vm.action = function (x) {
		vm.myAction = x;
	};
	vm.brand = function (x) {
		vm.myBrand = x;
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
