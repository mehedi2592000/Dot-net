
app.controller("NotiEdit",function($scope,$http,$location,$routeParams){
   
    var id=$routeParams.id;
   
    $http.get("https://localhost:44350/api/notification/GetAllindex/"+id+"")
     .then(function(resp){
         $scope.noti = resp.data;
         console.log(resp.data);
     },function(err){
         console.log(err);
     });
    
     $http.get("https://localhost:44350/api/notification/GetAll")
     .then(function(resp){
         $scope.role = resp.data;
         console.log(response.data);
     },function(err){
         console.log(err);
     });
 
   
   
    $scope.NotieficEdit=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/notification/EditNotification",$scope.noti)
        .then(function(resp){
            $location.path("/Notilist");
            
        },function(err){
            console.log(err);
        });
    };
});
