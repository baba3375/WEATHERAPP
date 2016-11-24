var weatherApp= angular.module('weatherApp',['ngMaterial','ui.router','ngMessages','angularMoment']);
weatherApp.controller('weatherAppCtrl',['$scope','$filter','$log','$http','$rootScope','$window','$location','$timeout','$q','moment', function($scope,$filter,$log,$http,$rootScope,$window,$location,$timeout,$q,moment){


$scope.weatherDetails={};
  $scope.showWeather=function(city){
      $http.post('/getweather',{'city':city}).success(function(data){

      if(data.error){
        $scope.logInErrorMsg =data.error;
      }
      if(!data.error) 
        {       $scope.weatherDetails=data;
            console.log("weather details ", data);
                   }
    });

  }


}]);
