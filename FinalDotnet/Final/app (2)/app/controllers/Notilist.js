app.controller("Notilist",function($scope,$http){
    $http.get("https://localhost:44350/api/notification/GetAll")
    .then(function(resp){
        $scope.Notilist = resp.data;
    },function(err){
        console.log(err);
    });
});
