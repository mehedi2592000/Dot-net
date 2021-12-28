
app.controller("OrphanDelete",function($scope,$http,$location,$routeParams){
    var id=$routeParams.id;
    
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.get("https://localhost:44350/api/orphan/delete/"+id,
        function(resp){
            
            //$scope.user=resp.data;
            console.log(resp.data);
            $location.path("/OrphenList");
            
        },function(err){
            console.log(err);
        }
        );
    
});
