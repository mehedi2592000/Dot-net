
app.controller("TransactionEdit",function($scope,$http,$location,$routeParams){

    var id=$routeParams.id;
   
    $http.get("https://localhost:44350/api/transaction/GetTransaction/"+id+"")
     .then(function(resp){
         $scope.te = resp.data;
         console.log(resp.data);
     },function(err){
         console.log(err);
     });
    
     $http.get("https://localhost:44350/api/transaction/GetAllTransaction")
     .then(function(resp){
         $scope.role = resp.data;
         console.log(response.data);
     },function(err){
         console.log(err);
     });
 

    $scope.TranEdit=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/transaction/Edit",$scope.te)
        .then(function(resp){
            $location.path("/TransactionList");
            
        },function(err){
            console.log(err);
        });
    };
});
