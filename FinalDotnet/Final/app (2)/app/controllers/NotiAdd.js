
app.controller("NotiAdd",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/notification/AddNotification",$scope.data)
        .then(function(resp){
            console.log(resp.data);
            
        },function(err){
            console.log(err);
        });
    };
});
