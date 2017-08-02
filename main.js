//Showing welcoming Message using jquery

    //$('#user-email').on('keypress',function() {  It delay the first alphabet
	//$('#user-email').on('input',function() {

      //  var email = $('#user-email').val()
        //var message = 'Welcome Back, ' + email;
        //$('.welcome-message').text(message);
    //});

	//var foodieApp = angular.module('foodieApp',[]);
	//foodieApp.controller('mainController',function($scope) {
    //})

	// creating list of restaurants



	var foodieApp = angular.module('foodieApp',['ngRoute']);
	foodieApp.config(function ($routeProvider) {
		$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
	})


	foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.config(function ($routeProvider) {
$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	})

//restaurantController

	foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
		$scope.restaurantId = $routeParams.id;
		var diabetes=['sweet', 'chocolate', 'brownie', 'rice', 'french fries', 'pasta', 'chicken', 'nachos', 'pie', 'yogurt','smoothie',
		               'hamburger','cake','pizza','muffins','eggs','nuts','beer','soda','croissants','butter','lard']


		var restaurants =  [{
		name: 'Pizza Hut',
		address: '38/39,sector 15,Chandigarh',
		location: 'Sector 15',
		category: 'Casual Dining',
		vote: '4.2',
		cuisines: 'Italian',
		cost: '1000',
		id:1,
		hours: '10 Am to 9 PM (Mon-Sun)',
		bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			},
		image: 'http://paypizzapal.com/wp-content/uploads/2014/01/pizza-hut2.jpg'

		},
		{
		name: 'Pirates of Grill',
		address: '3rd floor,Elante Mall,Industrial Area',
		location: 'Elante Mall',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Chineese,Continental',
		cost: '1200',
		id:2,
		hours: '11 Am to 1 AM (Mon-Sun)',
		bestDish: {
			name: 'Butter Chicken',
			image: 'http://chefsandip.in/wp-content/uploads/2015/04/img_9665.jpg'
			},
		image: 'https://img2.nbstatic.in/la1-m/579efd314cedfd000eaaa814.jpg'

		},

		{
			name: 'Virgin Courtyard',
			address: 'SCO 1A, Madhya Marg, Sector 7C, Chandigarh, 160007',
			location: 'Sector 7C',
			category: 'Casual Dining, Bar',
			vote: '4.4',
			cuisines: 'Italian',
			cost: '1500',
			id:3,
			hours: '11:30 Am to 12:30 Am (Mon-Sun)',
			bestDish: {
				name: 'Green Salad',
				image: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_1756_green-salad-pomegranate-seeds.jpg'
				},

			image: 'http://1.bp.blogspot.com/-5TIKEXO2NGg/Vi5MJzIaHMI/AAAAAAAAEtU/Ss66KoEZDaA/s1600/som-tam-salad-ziu-fried-juliennes-delhi-food-blogger-papaya-carrots.jpg'

		},
		{
			name: 'Uncle Jacks',
			address: 'No.10, Booths, B, 35 Market Rd, Market 35 D, Sector 8, Chandigarh, 16002',
			location: 'Sector 8',
			category: 'Take Away',
			vote: '4.5',
			cuisines: 'American',
			cost: '500',
			id:4,
			hours: '10 Am to 11 PM (Mon-Sun)',
			bestDish: {
				name: 'Cheese French Fries',
				image:'http://recipes.timesofindia.com/photo/54659021.cms?imgsize=275086'
				},
			image: 'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1492865112/grub%2Cjpg02.jpg'

		},
		{
			name: 'Mainland China',
			address: '40 Sco Madhya Marg, Chandigarh 160019, India',
			location: 'Chandigarh',
			category: 'Casual Dining',
			vote: '3.9',
			cuisines: 'Chinese, Asian, Vegetarian Friendly',
			cost: '2200',
			id:5,
			hours: '12 Noon to 1 AM (Mon-Sun)',
			bestDish: {
				name: ' Jalfrezi',
				image: 'https://campaignstorage.blob.core.windows.net/change4life-beta/production/recipe/image/55/5bd2bf85afd80efae18cf8c49d947c9e.jpg'
				},
			image: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'

		},
		{
			name: "Chili's",
			address: '3rd Floor 312b Plot No 178, Chandigarh 160002, India',
			location: 'Wave Cinemas',
			category: 'Casual Dining, Bar',
			vote: '4.2',
			cuisines: 'Mexican, American',
			cost: '1500',
			id:6,
			hours: '11 AM  to 1 AM (Mon-Sun)',
			bestDish: {
				name: 'Mexican Soup',
				image: 'http://global-cdn.skinnyms.com/wp-content/uploads/2012/09/Slow-Cooker-Hearty-Vegetable-and-Bean-Soup-1.jpg'
				},
			image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Chicken-Tostadas_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386712333241.jpeg'

		},

		{
		name: "Peddler's",
		address: 'Hotel Heritage, SCO 467 & 468, 35C, Sector 35, Chandigarh 160022',
		location: 'Sector 35',
		category: 'Casual Dining, Bar,Pub,Live Music',
		vote: '4.4',
		cuisines: 'Chineese,Indian,Italian',
		cost: '2400',
		id:7,
		hours: '11 AM to 12:30 AM (Mon-Sun)',
		bestDish: {
			name: 'Chicken Masala',
			image: 'http://topyaps.com/wp-content/uploads/2014/08/Til-%E2%80%93E-Paneer.jpg'
			},
		image: 'https://img1.nbstatic.in/la-l/56ae6e540b04512cde6c5845.jpg'

		},
		{
			name: "Veda's",
			address: 'SCO 27, Back Lane, Madhya Marg, Sector 26, Chandigarh',
			location: 'Sector 26',
			category: 'Cafe',
			vote: '4.0',
			cuisines: 'Italian,Cafe',
			cost: '850',
			id:8,
			hours: '11 AM to 12 Midnight (Mon-Sun)',
			bestDish: {
				name: 'Cappuccino',
				image: 'http://img15.deviantart.net/9e64/i/2012/319/9/8/coffe__by_13thring-d5l2l7m.jpg'
				},
			image: 'https://ae01.alicdn.com/kf/HTB1lDmrKpXXXXa3XXXXq6xXFXXX0/New-3D-Needlework-DIY-Diamond-Painting-Cross-Stitch-Sewing-Knittings-Needle-Diamond-Embroidery-font-b-Coffe.jpg'


		}]
             //close restaurantController




		//for getting ingredients
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key fde60dbc64804af293a28f05ace4c9c5',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function success(response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredients = [];
			$scope.ingredient_list=[];
			console.log(response);

  		for (var i =0;i < ingredients.length;i++) {
			$scope.ingredients.push(ingredients[i].name);
			}
			for(var j=0;j< $scope.ingredients.length;j++)
			{
				if(ingredients[j].value>0.7)
				{
					$scope.ingredient_list.push(ingredients[j].name);
				}
			}
			for(var k=0;k<$scope.ingredient_list.length;k++)
			{
			var x=diabetes.indexOf($scope.ingredient_list[k]);
			console.log(x);

					if(x>=0)
					{
						$scope.msg = "THIS FOOD IS NOT GOOD FOR DIABETIC PATIENTS";
					break }
					else{
												$scope.msg = "THIS FOOD IS GOOD FOR DIABETIC PATIENT";
					}
			}

        }, function error(xhr) {
        	console.log(xhr);
        });


}
	})

//main controller
	foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'Pizza Hut',
	address: '38/39,sector 15,Chandigarh',
	location: 'Sector 15',
	category: 'Casual Dining',
	vote: '4.1',
	cuisines: 'Italian',
	cost: '1000',
	id:1,
	hours: '10 Am to 9 PM (Mon-Sun)',
	image: 'http://paypizzapal.com/wp-content/uploads/2014/01/pizza-hut2.jpg'

	},
	{
		name: 'Pirates of Grill',
		address: '3rd floor,Elante Mall,Industrial Area',
		location: 'Elante Mall',
		category: 'Casual Dining, Bar',
		vote: '4.0',
		cuisines: 'Chineese,Continental',
		cost: '1200',
		id:2,
		hours: '11 Am to 1 AM (Mon-Sun)',
		image: 'https://img2.nbstatic.in/la1-m/579efd314cedfd000eaaa814.jpg'

	},
	{
	name: 'Virgin Courtyard',
	address: 'SCO 1A, Madhya Marg, Sector 7C, Chandigarh, 160007',
	location: 'Sector 7C',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Italian',
	cost: '1500',
	id:3,
	hours: '11:30 Am to 12:30 Am (Mon-Sun)',
	image: 'http://1.bp.blogspot.com/-5TIKEXO2NGg/Vi5MJzIaHMI/AAAAAAAAEtU/Ss66KoEZDaA/s1600/som-tam-salad-ziu-fried-juliennes-delhi-food-blogger-papaya-carrots.jpg'

	},

	{
	name: 'Uncle Jacks',
	address: 'No.10, Booths, B, 35 Market Rd, Market 35 D, Sector 8, Chandigarh, 16002',
	location: 'Sector 8',
	category: 'Take Away',
	vote: '4.5',
	cuisines: 'American',
	cost: '500',
	id:4,
	hours: '10 Am to 11 PM (Mon-Sun)',
	image: 'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1492865112/grub%2Cjpg02.jpg'

	},

	{
	name: 'Mainland China',
	address: '40 Sco Madhya Marg, Chandigarh 160019, India',
	location: 'Chandigarh',
	category: 'Casual Dining',
	vote: '3.9',
	cuisines: 'Chinese, Asian, Vegetarian Friendly',
	cost: '2200',
	id:5,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'

	},

	{
	name: "Chili's",
	address: '3rd Floor 312b Plot No 178, Chandigarh 160002, India',
	location: 'Wave Cinemas',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Mexican, American',
	cost: '1500',
	id:6,
	hours: '11 Am  to 1 AM (Mon-Sun)',
	image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/9/0/FNK_Chicken-Tostadas_s4x3.jpg.rend.hgtvcom.966.725.suffix/1386712333241.jpeg'

	},

	{
		name: "Peddler's",
		address: 'Hotel Heritage, SCO 467 & 468, 35C, Sector 35, Chandigarh 160022',
		location: 'Sector 35',
		category: 'Casual Dining, Bar,Pub,Live Music',
		vote: '4.4',
		cuisines: 'Chineese,Indian,Italian',
		cost: '2400',
		id:7,
		hours: '11 AM to 12:30 AM (Mon-Sun)',
		image: 'https://img1.nbstatic.in/la-l/56ae6e540b04512cde6c5845.jpg'


	},

	{
	name: "Veda's",
	address: 'SCO 27, Back Lane, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sector 26',
	category: 'Cafe',
	vote: '4.0',
	cuisines: 'Italian,Cafe',
	cost: '850',
	id:8,
	hours: '11 AM to 12 Midnight (Mon-Sun)',
	image: 'https://ae01.alicdn.com/kf/HTB1lDmrKpXXXXa3XXXXq6xXFXXX0/New-3D-Needlework-DIY-Diamond-Painting-Cross-Stitch-Sewing-Knittings-Needle-Diamond-Embroidery-font-b-Coffe.jpg'

	}]
})

 //close
