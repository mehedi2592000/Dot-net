app.controller("FindVolunteer",function($scope,$http){
    $http.get("https://localhost:44350/api/user/volunteerList")
    .then(function(resp){
        $scope.TOtalVolunteerList = resp.data;
    },function(err){
        console.log(err);
    });

    
});
/*
app.controller("FindAgency",function($scope,$http){
    $http.get("https://localhost:44350/api/agency/AllAgency")
    .then(function(resp){
        $scope.Agencylist = resp.data;
    },function(err){
        console.log(err);
    });
});
*/