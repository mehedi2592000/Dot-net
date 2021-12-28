TransactionAccapted

app.controller("TransactionAccapted",function($scope,$http,$location){
    $scope.login=function(){
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
        $http.post("https://localhost:44350/api/transation/AccaptedRequestAgencyPandin",$scope.data)
        .then(function(resp){
            console.log(resp.data);
            return console;
            
        },function(err){
            console.log(err);
        });
    };
});
