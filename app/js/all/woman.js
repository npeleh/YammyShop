app.controller("womanCtrl", function () {
	var vm = this;
	vm.catalogW = [
		{
			id: 20,
			src: "img/rubashka-iz-tonkogo-khlopkovogo-tekstilya-45926303995980_small4.jpg",
			name: "Сорочка з тонкого бавовняного текстилю",
			price: 970,
			in_stock: "В наявності",
			color: "brown",
			action: "share",
			brand: "Polo"
		},
		{
			id: 19,
			src: "img/rubashka-iz-gladkogo-khlopkovogo-tekstilya-50967928849988_small4.jpg",
			name: "Сорочка з гладкого бавовняного текстилю",
			price: 1350,
			in_stock: "В наявності",
			color: "blue",
			action: "novelty",
			brand: "Puma"
		},
		{
			id: 21,
			src: "img/muzhskaya-rubashka-iz-legkogo-tekstilya-58253552640477_small4.jpg",
			name: "Чоловіча сорочка з легкого текстилю",
			price: 1840,
			in_stock: "В наявності",
			color: "red, black",
			action: "hit",
			brand: "New Balance"
		},
		{
			id: 18,
			src: "img/seroe-muzhskoe-palto-iz-shersti-34021860029962_small4.jpg",
			name: "Сіре чоловіче пальто з вовни",
			price: 3500,
			in_stock: "В наявності",
			color: "gray",
			action: "hit",
			brand: "Columbia"
		},
		{
			id: 23,
			src: "img/19695985855327_small4.jpg",
			name: "Поло из хлопкового трикотажа (orange)",
			price: 1350,
			in_stock: "В наявності",
			color: "orange",
			action: "share",
			brand: "Reebok"
		},
		{
			id: 4,
			src: "img/chinosy-iz-khlopkovogo-materiala-71281258886059_small4.jpg",
			name: "Чінос з бавовняного матеріалу",
			price: 650,
			in_stock: "В наявності",
			color: "brown",
			action: "novelty",
			brand: "Converse"
		}, {
			id: 3,
			src: "img/polo-iz-khlopkovogo-trikotazha305-57619343284103_small4.jpg",
			name: "Поло з бавовняного трикотажу (skyblue)",
			price: 1350,
			in_stock: "В наявності",
			color: "blue",
			action: "hit",
			brand: "New Balance"
		},
		{
			id: 12,
			src: "img/zauzhennye-chinosy-iz-khlopka-i-lna-52622808019320_small4.jpg",
			name: "Завужені чінос з бавовни і льону",
			price: 1610,
			in_stock: "В наявності",
			color: "black",
			action: "hit",
			brand: "Columbia"
		},
		{
			id: 11,
			src: "img/legkaya-kurtka-anorak-vypolnena-iz-tekstilya-65150331374671_small4.jpg",
			name: "Легка куртка-анорак виконана з текстилю",
			price: 1900,
			in_stock: "В наявності",
			color: "red",
			action: "share",
			brand: "Adidas"
		},
		{
			id: 17,
			src: "img/polo-iz-khlopkovogo-trikotazha-91585915866825_small4.jpg",
			name: "Поло з бавовняного трикотажу (black)",
			price: 1350,
			in_stock: "В наявності",
			color: "black",
			action: "share",
			brand: "Adidas"
		},
		{
			id: 10,
			src: "img/39133830616871_small4.jpg",
			name: "Футболка з бавовняного трикотажу (white)",
			price: 480,
			in_stock: "В наявності",
			color: "white",
			action: "novelty",
			brand: "Converse"
		},
		{
			id: 9,
			src: "img/legkaya-kurtka-iz-myagkogo-tekstilya-pryamogo-kroya-38089846322933_small4.jpg",
			name: "Легка куртка з м'якого текстилю прямого крою",
			price: 2300,
			in_stock: "В наявності",
			color: "blue",
			action: "hit",
			brand: "New Balance"
		},
		{
			id: 8,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-pryamogo-kroya318-75442915533979_small4.jpg",
			name: "Джинси з щільного бавовняного деніму прямого крою",
			price: 1125,
			in_stock: "В наявності",
			color: "blue",
			action: "share",
			brand: "Reebok"
		},
		{
			id: 7,
			src: "img/bruki-iz-khlopkovogo-materiala-pryamogo-kroya-95249849309523_small4.jpg",
			name: "Штани з бавовняного матеріалу прямого крою",
			price: 900,
			in_stock: "В наявності",
			color: "gray",
			action: "novelty",
			brand: "Puma"
		},
		{
			id: 14,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-63457109199629_small4.jpg",
			name: "Джинси з щільного бавовняного деніму (black)",
			price: 1300,
			in_stock: "В наявності",
			color: "black",
			action: "share",
			brand: "Polo"
		},
		{
			id: 13,
			src: "img/rubashka-iz-khlopkovogo-materiala-pritalennogo-kroya-49231323972344_small4.jpg",
			name: "Сорочка з бавовняного матеріалу приталеного крою",
			price: 850,
			in_stock: "В наявності",
			color: "blue",
			action: "novelty",
			brand: "Puma"
		},
		{
			id: 2,
			src: "img/92026703473594_small4.jpg",
			name: "Поло з бавовняного трикотажу (green)",
			price: 1350,
			in_stock: "В наявності",
			color: "green",
			action: "share",
			brand: "Polo"
		},
		{
			id: 6,
			src: "img/dzhinsy-s-dekorativnymi-potertostyami-85559959130154_small4.jpg",
			name: "Джинси з декоративними потертостями",
			price: 2350,
			in_stock: "В наявності",
			color: "blue",
			action: "hit",
			brand: "Columbia"
		},
		{
			id: 5,
			src: "img/futbolka-ess-tee-puma-41551264209879_small4.jpg",
			name: "Футболка з бавовняного трикотажу",
			price: 900,
			in_stock: "В наявності",
			color: "gray",
			action: "share",
			brand: "Adidas"
		},
		{
			id: 22,
			src: "img/70490511051482_small4.jpg",
			name: "Поло из хлопкового трикотажа (blue)",
			price: 1350,
			in_stock: "В наявності",
			color: "blue",
			action: "novelty",
			brand: "Converse"
		},
		{
			id: 16,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-pryamogo-kroya-40034825189245_small4.jpg",
			name: "Джинси з щільного бавовняного деніму прямого крою",
			price: 975,
			in_stock: "В наявності",
			color: "blue",
			action: "novelty",
			brand: "Converse"
		},
		{
			id: 15,
			src: "img/muzhskaya-vetrovka-pryamogo-kroya-24405563788281_small4.jpg",
			name: "Чоловіча вітровка прямого крою (green)",
			price: 960,
			in_stock: "В наявності",
			color: "green",
			action: "hit",
			brand: "New Balance"
		},
		{
			id: 1,
			src: "img/sportivnye-bruki-iz-plotnogo-trikotazha-66856054051054_small4.jpg",
			name: "Спортивні штани з щільного трикотажу",
			price: 1080,
			in_stock: "В наявності",
			color: "green",
			action: "novelty",
			brand: "Puma"
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
	vm.color = function (x) {
		vm.myColor = x;
	};
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
