var app = angular.module('myApp', []);
var a=false;
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/Finalproject/php/server.php").success(function(response){$scope.hotels = response.hotels;});
    localStorage.username = "Yerbolat Mamen"; 
    localStorage.usercash = 10000;
    localStorage.rooms = 20;
    $scope.username = localStorage.username;
    $scope.usercash =  localStorage.usercash;
    $scope.price = 150;
    $scope.choise = 1;
    $scope.rooms = localStorage.rooms;
 
    $scope.booking=function(){
        if(localStorage.usercash >= $scope.choise*$scope.price && $scope.rooms >= $scope.choise){
        localStorage.usercash = localStorage.usercash - $scope.choise*$scope.price;
        $scope.usercash=localStorage.usercash;
        localStorage.rooms=localStorage.rooms - $scope.choise;
        $scope.rooms=$scope.rooms - $scope.choise;
        }
        else{alert("You don't have enough money or all rooms are busy!")}
    }
    /*Авторизация*/
    $scope.sign=function(){
        if($scope.login != null && $scope.login != ""){
            if($scope.password != null && $scope.password != ""){
                var request = $http({
                    method: "post",
                    url: "http://localhost/Finalproject/php/authorize.php",
                    data: {
                        login: $scope.login,
                        password: $scope.password
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
                
            request.success(function(data){
            if(data=="Ok"){
                document.getElementById('auth').style.display="none";
                document.getElementById('user').style.display="block";
                document.getElementById('booking').style.display="block";
                document.getElementById('back').style.display="block";                       
            }
            else{ 
                alert("Error!");

            }
        });
    }
}
}
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

/*Скрывать и отрыват меню*/
$(document).ready(function(){    
    $("#menu").click(function(){
        if(a==false){
        $("aside").css({"margin-left" : "0px"});
        $("#content").toggleClass('width100 widthmin');
        a=true;
        }
        else{
        $("aside").css({"margin-left":"-270px"});
        $("#content").toggleClass('widthmin width100');
        a=false;         
        }
    });

});