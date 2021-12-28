

app.controller("TransactionPanding",function($scope,$http){
    $http.get("https://localhost:44350/api/transation/RequestAgencyPandin")
    .then(function(resp){
        $scope.TransactionPanding = resp.data;
    },function(err){
        console.log(err);
    });
});
