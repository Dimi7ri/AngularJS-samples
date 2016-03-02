(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	  {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This is just a description.',
		canPurchase: true,
		soldOut: false,
	  },
	  {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: ' This is just a description.',
		canPurchase: false,
		soldOut: false,
	  },
	  {
		name: 'Pitagoral Gem',
		price: 10.00,
		description: ' This is just a description.',
		canPurchase: true,
		soldOut: true,
	  }	  
	];
})();	