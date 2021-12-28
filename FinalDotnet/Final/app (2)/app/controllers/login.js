
app.controller("login",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/login",$scope.data)
        .then(function(resp){
            console.log(resp.data);
            localStorage.setItem("token",resp.data.accessToken);
            $location.path("/Dashboard");
        },function(err){
            console.log(err);
        });
    };
});
