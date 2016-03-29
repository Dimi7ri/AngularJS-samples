(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		this.panel = 1;

		this.selectTab = function(setTab){
			this.panel = setTab;
		};

		this.isSelect = function(checkTab){
			return this.panel === checkTab;
		};
	});

	app.controller('GalleryController', function(){
		this.current = 0;
 		this.setCurrent = function(value){
    	this.current = value || 0;
  		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};	
		};
  	});
	/* Dash in HTML translates to camelCase in JS */
  	app.directive('productTitle', function(){
  		return {
  			restrict: 'E',
  			templateUrl: 'product-title.html'

  		};
  	});

	var gems = [
	  {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This is just a description.',
		specification: 'No specs',
		reviews: [{stars:5, body:"5 star review", author:"example@example.com"},{stars:4, body:"4 star review",author:"example2@example2.com"},{stars:3, body:"3 star review",author:"example3@example3.com"}],
		shine: 3,
		images:['images/gem-01.gif'],
		canPurchase: true,
		soldOut: false,
	  },
	  {
		name: 'Pentagonal Gem',
		price: 5.95,
		description: ' This is just a description.',
		specification: 'No specs',
		reviews: [{stars:5, body:"5 star review", author:"example@example.com"},{stars:4, body:"4 star review",author:"example2@example2.com"},{stars:3, body:"3 star review",author:"example3@example3.com"}],
		shine: 4,
		images:['images/gem-02.gif'],
		canPurchase: true,
		soldOut: false,
	  },
	  {
	  	name: 'Pitagoral Gem',
		price: 10.00,
		description: ' This is just a description.',
		specification: 'No specs',		
		reviews: [{stars:5, body:"5 star review", author:"example@example.com"},{stars:4, body:"4 star review",author:"example2@example2.com"},{stars:3, body:"3 star review",author:"example3@example3.com"}],
		shine: 7,
		images:['images/gem-03.gif'],
		canPurchase: true,
		soldOut: true,
	  }	 
	];
})();	