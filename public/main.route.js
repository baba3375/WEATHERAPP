weatherApp.config(function($stateProvider,$urlRouterProvider){

	$stateProvider

	.state('delhi',{
		 url: '/delhi',
		templateUrl: 'components/delhi/ttHeadDashboard.html',
      	controller: 'ttheadCtrl',
      	resolve:{
			newsList:function($http){
				return $http.get("/loadNews").then(function (response){
					console.log(" the data in front end: ", response.data)
					return response.data;
				})
			}
		}

	})



})
