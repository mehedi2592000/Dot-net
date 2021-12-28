app.controller("FindAgency",function($scope,$http){
    $http.get("https://localhost:44350/api/agency/AllAgency")
    .then(function(resp){
        $scope.Agencylist = resp.data;
    },function(err){
        console.log(err);
    });
});
