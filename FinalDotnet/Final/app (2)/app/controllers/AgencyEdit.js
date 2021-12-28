
app.controller("AgencyEdit",function($scope,$http,$location,$routeParams){
    
    var id=$routeParams.id;
   
        $http.get("https://localhost:44350/api/agency/intAgency/"+id+"")
         .then(function(resp){
             $scope.users = resp.data;
             console.log(resp.data);
         },function(err){
             console.log(err);
         });
        
         $http.get("https://localhost:44350/api/agency/AllAgency")
         .then(function(resp){
             $scope.role = resp.data;
             console.log(response.data);
         },function(err){
             console.log(err);
         });
     

    
    $scope.AgEdit=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});

        
        $http.post("https://localhost:44350/api/agency/EditAgency",$scope.users)
        .then(function(resp){
            $location.path("/Agencylist");
            
        },function(err){
            console.log(err);
        });
    };
});
