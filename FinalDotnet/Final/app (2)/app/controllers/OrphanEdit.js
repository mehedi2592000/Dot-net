



app.controller("OrphanEdit",function($scope,$http,$location,$routeParams){


    var id=$routeParams.id;
   
    $http.get("https://localhost:44350/api/orphan/Allorphanlist/"+id+"")
     .then(function(resp){
         $scope.users = resp.data;
         console.log(resp.data);
     },function(err){
         console.log(err);
     });
    
     $http.get("https://localhost:44350/api/orphan/Allorphanchild")
     .then(function(resp){
         $scope.role = resp.data;
         console.log(response.data);
     },function(err){
         console.log(err);
     });
 
    $scope.orphan=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/orphan/EditOrphan",$scope.users)
        .then(function(resp){
            $location.path("/OrphenList");
            
        },function(err){
            console.log(err);
        });
    };
});
