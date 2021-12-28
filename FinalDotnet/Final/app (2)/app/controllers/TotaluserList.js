app.controller("TotaluserList",function($scope,$http){
    $http.get("https://localhost:44350/api/user/UserList")
    .then(function(resp){
        $scope.TotaluserList = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/user/numofUser")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });


});
