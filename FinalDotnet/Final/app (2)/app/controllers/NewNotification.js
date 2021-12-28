app.controller("NewNotification",function($scope,$http){
    $http.get("https://localhost:44350/api/notification/FindAll")
    .then(function(resp){
        $scope.NewNotification = resp.data;
    },function(err){
        console.log(err);
    });
});
