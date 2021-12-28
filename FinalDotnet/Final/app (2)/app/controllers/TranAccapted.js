
app.controller("TranAccapted",function($scope,$http,$location,$routeParams){
   
    var id=$routeParams.id;
   
    $http.get("https://localhost:44350/api/transaction/GetTransaction/"+id+"")
     .then(function(resp){
         $scope.users = resp.data;
         console.log(resp.data);
     },function(err){
         console.log(err);
     });
    
     $http.get("https://localhost:44350/api/transaction/GetTransaction")
     .then(function(resp){
         $scope.role = resp.data;
         console.log(response.data);
     },function(err){
         console.log(err);
     });
 
   
   
   
    $scope.AccaptedAgency=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/transation/AccaptedRequestAgencyPandin",$scope.users)
        .then(function(resp){
            console.log(resp.data);
            $location.path("/TransactionPanding");
            
        },function(err){
            console.log(err);
        });
    };
});
