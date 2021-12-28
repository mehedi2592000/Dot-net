//OrphenList
app.controller("OrphanSearch",function($scope,$http){
    $http.get("https://localhost:44350/api/orphan/Allorphanchild")
    .then(function(resp){
        $scope.OrphenList = resp.data;
    },function(err){
        console.log(err);
    });
/*
    $http.get("https://localhost:44350/api/agency/AllAgency")
    .then(function(resp){
        $scope.Agencylist = resp.data;
    },function(err){
        console.log(err);
    });
  */  
});
