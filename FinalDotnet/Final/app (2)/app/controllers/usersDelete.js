
app.controller("usersDelete",function($scope,$http,$location,$routeParams){
    var id=$routeParams.id;
    
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.get("https://localhost:44350/api/user/delete/"+id,
        function(resp){
            
            //$scope.user=resp.data;
            console.log(resp.data);
            $location.path("/users");
            
        },function(err){
            console.log(err);
        }
        );
    
});
