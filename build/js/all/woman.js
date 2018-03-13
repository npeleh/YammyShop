app.controller("womanCtrl", function () {
	var vm = this;
	vm.catalogW = [
		{
			id: 1,
			src: "img/bruki-iz-khlopkovogo-materiala-pryamogo-kroya-95249849309523_small4.jpg",
			name: "Штани з бавовняного матеріалу прямого крою",
			price: 900,
			in_stock: "В наявності"
		},
		{
			id: 2,
			src: "img/dzhinsy-s-dekorativnymi-potertostyami-85559959130154_small4.jpg",
			name: "Джинси з декоративними потертостями",
			price: 2350,
			in_stock: "В наявності"
		},
		{
			id: 3,
			src: "img/futbolka-ess-tee-puma-41551264209879_small4.jpg",
			name: "Футболка з бавовняного трикотажу",
			price: 900,
			in_stock: "В наявності"
		},
		{
			id: 4,
			src: "img/chinosy-iz-khlopkovogo-materiala-71281258886059_small4.jpg",
			name: "Чінос з бавовняного матеріалу",
			price: 650,
			in_stock: "В наявності"
		},
		{
			id: 5,
			src: "img/polo-iz-khlopkovogo-trikotazha305-57619343284103_small4.jpg",
			name: "Поло з бавовняного трикотажу (skyblue)",
			price: 1350,
			in_stock: "В наявності"
		},
		{
			id: 6,
			src: "img/92026703473594_small4.jpg",
			name: "Поло з бавовняного трикотажу (green)",
			price: 1350,
			in_stock: "В наявності"
		},
		{
			id: 7,
			src: "img/sportivnye-bruki-iz-plotnogo-trikotazha-66856054051054_small4.jpg",
			name: "Спортивні штани з щільного трикотажу",
			price: 1080,
			in_stock: "В наявності"
		},
		{
			id: 8,
			src: "img/rubashka-iz-tonkogo-khlopkovogo-tekstilya-45926303995980_small4.jpg",
			name: "Сорочка з тонкого бавовняного текстилю",
			price: 970,
			in_stock: "В наявності"
		},
		{
			id: 9,
			src: "img/rubashka-iz-gladkogo-khlopkovogo-tekstilya-50967928849988_small4.jpg",
			name: "Сорочка з гладкого бавовняного текстилю",
			price: 1350,
			in_stock: "В наявності"
		},
		{
			id: 10,
			src: "img/seroe-muzhskoe-palto-iz-shersti-34021860029962_small4.jpg",
			name: "Сіре чоловіче пальто з вовни",
			price: 3500,
			in_stock: "В наявності"
		},
		{
			id: 11,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-63457109199629_small4.jpg",
			name: "Джинси з щільного бавовняного деніму (black)",
			price: 1300,
			in_stock: "В наявності"
		},
		{
			id: 12,
			src: "img/rubashka-iz-khlopkovogo-materiala-pritalennogo-kroya-49231323972344_small4.jpg",
			name: "Сорочка з бавовняного матеріалу приталеного крою",
			price: 850,
			in_stock: "В наявності"
		},
		{
			id: 13,
			src: "img/zauzhennye-chinosy-iz-khlopka-i-lna-52622808019320_small4.jpg",
			name: "Завужені чінос з бавовни і льону",
			price: 1610,
			in_stock: "В наявності"
		},
		{
			id: 14,
			src: "img/legkaya-kurtka-anorak-vypolnena-iz-tekstilya-65150331374671_small4.jpg",
			name: "Легка куртка-анорак виконана з текстилю",
			price: 1900,
			in_stock: "В наявності"
		},
		{
			id: 15,
			src: "img/39133830616871_small4.jpg",
			name: "Футболка з бавовняного трикотажу (white)",
			price: 480,
			in_stock: "В наявності"
		},
		{
			id: 16,
			src: "img/legkaya-kurtka-iz-myagkogo-tekstilya-pryamogo-kroya-38089846322933_small4.jpg",
			name: "Футболка з бавовняного трикотажу (white)",
			price: 2300,
			in_stock: "В наявності"
		},
		{
			id: 17,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-pryamogo-kroya318-75442915533979_small4.jpg",
			name: "Джинси з щільного бавовняного деніму прямого крою",
			price: 1125,
			in_stock: "В наявності"
		},
		{
			id: 18,
			src: "img/19695985855327_small4.jpg",
			name: "Поло из хлопкового трикотажа (orange)",
			price: 1350,
			in_stock: "В наявності"
		},
		{
			id: 19,
			src: "img/70490511051482_small4.jpg",
			name: "Поло из хлопкового трикотажа (blue)",
			price: 1350,
			in_stock: "В наявності"
		},
		{
			id: 20,
			src: "img/polo-iz-khlopkovogo-trikotazha-91585915866825_small4.jpg",
			name: "Поло з бавовняного трикотажу (black)",
			price: 1350,
			in_stock: "В наявності"
		}, {
			id: 21,
			src: "img/dzhinsy-iz-plotnogo-khlopkovogo-denima-pryamogo-kroya-40034825189245_small4.jpg",
			name: "Джинси з щільного бавовняного деніму прямого крою",
			price: 975,
			in_stock: "В наявності"
		}, {
			id: 22,
			src: "img/muzhskaya-vetrovka-pryamogo-kroya-24405563788281_small4.jpg",
			name: "Чоловіча вітровка прямого крою (green)",
			price: 960,
			in_stock: "В наявності"
		},
		{
			id: 23,
			src: "img/muzhskaya-rubashka-iz-legkogo-tekstilya-58253552640477_small4.jpg",
			name: "Чоловіча сорочка з легкого текстилю",
			price: 1840,
			in_stock: "В наявності"
		},
	];
})
