
app.controller("usersEdit",function($scope,$http,$location,$routeParams){
   
   var id=$routeParams.id;
   
   $http.get("https://localhost:44350/api/user/list/"+id+"")
    .then(function(resp){
        $scope.users = resp.data;
        console.log(resp.data);
    },function(err){
        console.log(err);
    });
   
    $http.get("https://localhost:44350/api/user/list")
    .then(function(resp){
        $scope.role = resp.data;
        console.log(response.data);
    },function(err){
        console.log(err);
    });

    $scope.updateuser=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/user/edit",$scope.users)
        .then(function(resp){
            $location.path("/users");
            
        },function(err){
            console.log(err);
        });
    };
});
