weatherApp.component('myweather',{

	bindings:{

			weather:'<'
		},
		controller:myWeatherCtrl,
		templateUrl:'components/weatherView.html'

});

function myWeatherCtrl($scope, $mdDialog,moment) {
	 $scope.status = 'hola';
    var ctrl=this;
    console.log("yth comp ",this.weather.list);
       $scope.tempDate=[];
   $scope.dates=[];
   $scope.tempShowDate=[];
   $scope.showDate=[];
    $scope.mm=new moment();

    for (var i = 0; i <5; i++) {
      $scope.tempShowDate.push(new moment().add(i,'d').format('Y-M-DD'));
     $scope.showDate.push(new moment().add(i,'d').format('ddd, Do MMM'));

    };
    $scope.maxTemp=0;
    $scope.minTemp=0;
    $scope.weather=[];
    $scope.showWeather=function(selectedDate){
      $scope.weather=[];
        ctrl.weather.list.filter(function(obj){
           console.log("obj", obj.dt_txt.substring(0,10));
           console.log("selectedDate",selectedDate);

          if(selectedDate==obj.dt_txt.substring(0,10))
            $scope.weather.push(obj);
        })
      console.log(" $scope.weather", $scope.weather);
    }

          console.log("shown",$scope.showDate);



}
