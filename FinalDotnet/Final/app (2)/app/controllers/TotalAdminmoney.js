app.controller("TotalAdminmoney",function($scope,$http){
    

    $http.get("https://localhost:44350/api/user/Totalmoneyadmin")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });
});
