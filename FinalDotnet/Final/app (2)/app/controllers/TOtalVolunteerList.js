app.controller("TOtalVolunteerList",function($scope,$http){
    $http.get("https://localhost:44350/api/user/volunteerList")
    .then(function(resp){
        $scope.TOtalVolunteerList = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/user/numofvolunteer")
    .then(function(resp){
        $scope.List = resp.data;
        
    },function(err){
        console.log(err);
    });
});
