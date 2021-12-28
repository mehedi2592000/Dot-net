app.controller("TotalOrphan",function($scope,$http){
    

    $http.get("https://localhost:44350/api/orphan/totalOrphan")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });
});
