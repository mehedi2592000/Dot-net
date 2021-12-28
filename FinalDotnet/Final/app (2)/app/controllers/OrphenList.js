//OrphenList
app.controller("OrphenList",function($scope,$http){
    $http.get("https://localhost:44350/api/orphan/Allorphanchild")
    .then(function(resp){
        $scope.OrphenList = resp.data;
    },function(err){
        console.log(err);
    });

    
    
});
