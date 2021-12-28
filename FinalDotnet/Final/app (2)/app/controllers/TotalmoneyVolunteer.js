app.controller("TotalmoneyVolunteer",function($scope,$http){
    $http.get("https://localhost:44350/api/transaction/VolunteertoAdminmoneyList")
    .then(function(resp){
        $scope.TotalmoneyVolunteer = resp.data;
    },function(err){
        console.log(err);
    });

    $http.get("https://localhost:44350/api/transation/TotalVolunteertoadminModeney")
    .then(function(resp){
        $scope.List = resp.data;
    },function(err){
        console.log(err);
    });

    
    
});
