app.controller("TotalagencyList",function($scope,$http){
    $http.get("https://localhost:44350/api/user/agencyList")
    .then(function(resp){
        $scope.TotalagencyList = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/user/numofAgency")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });

    
});
