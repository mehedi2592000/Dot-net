app.controller("Totalmoneyuser",function($scope,$http){
    $http.get("https://localhost:44350/api/transaction/usertoAdminmoneyList")
    .then(function(resp){
        $scope.Totalmoneyuser = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/transation/TotalusertoadminModeney")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/transation/TotaluserModeney")
    .then(function(resp){
        $scope.Lis = resp.data;
    },function(err){
        console.log(err);
    });
    
});
