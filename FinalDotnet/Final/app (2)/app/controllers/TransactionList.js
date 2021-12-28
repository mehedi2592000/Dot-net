
app.controller("TransactionList",function($scope,$http){
    $http.get("https://localhost:44350/api/transaction/GetAllTransaction")
    .then(function(resp){
        $scope.TransactionList = resp.data;
    },function(err){
        console.log(err);
    });
});
