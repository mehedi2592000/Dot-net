app.controller("users",function($scope,$http){
    $http.get("https://localhost:44350/api/user/list")
    .then(function(resp){
        $scope.users = resp.data;
    },function(err){
        console.log(err);
    });
});
