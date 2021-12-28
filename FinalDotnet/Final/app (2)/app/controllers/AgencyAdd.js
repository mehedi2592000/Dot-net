
app.controller("AgencyAdd",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/agency/AddAgency",$scope.data)
        .then(function(resp){
            console.log(resp.data);
            
        },function(err){
            console.log(err);
        });
    };
});
