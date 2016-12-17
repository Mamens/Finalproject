var app = angular.module('myApp', []);
var a=false;
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/Finalproject/php/server.php").success(function(response){$scope.hotels = response.hotels;});
    localStorage.username = "Yerbolat Mamen"; 
    localStorage.usercash = 10000;
    localStorage.rooms = 10;
    $scope.username = localStorage.username;
    $scope.usercash =  localStorage.usercash;
    $scope.price = 150;
    $scope.choise = 1;
    $scope.rooms = localStorage.rooms;
 
   
$scope.more = function(){
        document.getElementById('auth').style.display="block";
        if(a==false){
            document.getElementById('aside').style.marginLeft="0px";
            document.getElementById("content").className="widthmin";
            a=true;
        }
}
$scope.back=function(){
    document.getElementById('back').style.display="none";
    document.getElementById('booking').style.display="none";
    document.getElementById("user").style.display = "none";
}
});

