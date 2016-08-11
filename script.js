var app = angular.module("portfolio", []);


app.controller('updateController', ['$scope', function($scope) { 
  $scope.title = 'Status Updates'; 
  $scope.promo = 'The most popular books this month.';
  $scope.updates = [
  	{ 
      text: "The single page application concept seems to be more appropriate for my portfolio",
    	date: new Date('2013', '08', '01')
  	}, 
  	{ 
    	text: "Trying out AngularJS with bootstrap now.",
    	date: new Date('2013', '08', '01')
  	}, 
  	{ 
    	text: "Trying to decide between Django vs. Rails for web development. I like python,but I really like the Rails framework.",
    	date: new Date('2013', '08', '01')
  	}, 
  	{ 
    	 text: "Almost have my portfolio fully up and running",
    	date: new Date('2013', '08', '01')
  	},
  	{ 
    	 text: "test update",
    	date: new Date('2013', '08', '01')
  	}
    ];
}]);
