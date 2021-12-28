var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "views/pages/demopage.html"
        
    })
    .when("/demo", {
        templateUrl : "views/pages/demopage.html",
        controller: 'demo'
    })
    .when("/demo2", {
        templateUrl : "views/pages/demo2.html",
          controller: 'demo2'
    })
    .when("/products", {
        templateUrl : "views/pages/products.html",
        controller: 'products'
    })
    .when("/login", {
        templateUrl : "views/pages/login.html",
        controller: 'login'
    })
    .when("/Dashboard", {
        templateUrl : "views/pages/Dashboard.html",
        controller: 'Dashboard'
    })
    .when("/users", {
        templateUrl : "views/pages/users.html",
        controller: 'users'
    })
    .when("/usersAdd", {
        templateUrl : "views/pages/UsersAdd.html",
        controller: 'usersAdd'
    })
    .when("/usersEdit/:id", {
        templateUrl : "views/pages/UsersEdit.html",
        controller: 'usersEdit'
    })
    .when("/usersDelete/:id", {
        templateUrl : "views/pages/users.html",
        controller: 'usersDelete'
    })
    .when("/TotaluserList", {
        templateUrl : "views/pages/TotaluserList.html",
        controller: 'TotaluserList'
    })
    .when("/TOtalVolunteerList", {
        templateUrl : "views/pages/TOtalVolunteerList.html",
        controller: 'TOtalVolunteerList'
    })
    .when("/TotalagencyList", {
        templateUrl : "views/pages/TotalagencyList.html",
        controller: 'TotalagencyList'
    })
    .when("/Agencylist", {
        templateUrl : "views/pages/Agencylist.html",
        controller: 'Agencylist'
    })
    .when("/AgencyAdd", {
        templateUrl : "views/pages/AgencyAdd.html",
        controller: 'AgencyAdd'
    })
    .when("/AgencyEdit/:id", {
        templateUrl : "views/pages/AgencyEdit.html",
        controller: 'AgencyEdit'
    })
    .when("/Agencydelete/:id", {
        templateUrl : "views/pages/Agencylist.html",
        controller: 'Agencydelete'
    })
    .when("/Notilist", {
        templateUrl : "views/pages/Notilist.html",
        controller: 'Notilist'
    })
    .when("/NotiAdd", {
        templateUrl : "views/pages/NotiAdd.html",
        controller: 'NotiAdd'
    })
    .when("/NotiEdit/:id", {
        templateUrl : "views/pages/NotiEdit.html",
        controller: 'NotiEdit'
    })
    
    .when("/TransactionList", {
        templateUrl : "views/pages/TransactionList.html",
        controller: 'TransactionList'
    })
    
    .when("/TransactionEdit/:id", {
        templateUrl : "views/pages/TransactionEdit.html",
        controller: 'TransactionEdit'
    })
    
    .when("/TransactionAdd", {
        templateUrl : "views/pages/TransactionAdd.html",
        controller: 'TransactionAdd'
    })
    
    .when("/TransactionPanding", {
        templateUrl : "views/pages/TransactionPanding.html",
        controller: 'TransactionPanding'
    })
    .when("/TranAccapted/:id", {
        templateUrl : "views/pages/TranAccapted.html",
        controller: 'TranAccapted'
    })
    
    .when("/Totalmoneyuser", {
        templateUrl : "views/pages/Totalmoneyuser.html",
        controller: 'Totalmoneyuser'
    })
    
    .when("/TotalmoneyVolunteer", {
        templateUrl : "views/pages/TotalmoneyVolunteer.html",
        controller: 'TotalmoneyVolunteer'
    })
    
    .when("/OrphenList", {
        templateUrl : "views/pages/OrphenList.html",
        controller: 'OrphenList'
    })
    
    .when("/OrphanAdd", {
        templateUrl : "views/pages/OrphanAdd.html",
        controller: 'OrphanAdd'
    })
    
    .when("/TotalOrphan", {
        templateUrl : "views/pages/TotalOrphan.html",
        controller: 'TotalOrphan'
    })
    
    .when("/OrphanEdit/:id", {
        templateUrl : "views/pages/OrphanEdit.html",
        controller: 'OrphanEdit'
    })
    .when("/OrphanDelete/:id", {
        templateUrl : "views/pages/OrphenList.html",
        controller: 'OrphanDelete'
    })
    
    .when("/OrphanSearch", {
        templateUrl : "views/pages/OrphanSearch.html",
        controller: 'OrphanSearch'
    })
    
    .when("/FindAgency", {
        templateUrl : "views/pages/FindAgency.html",
        controller: 'FindAgency'
    })
    
    .when("/FindVolunteer", {
        templateUrl : "views/pages/FindVolunteer.html",
        controller: 'FindVolunteer'
    })
    
    .when("/NewNotification", {
        templateUrl : "views/pages/NewNotification.html",
        controller: 'NewNotification'
    })
    /*
    .when("/OrphanDelete/:id", {
        
        controller: 'OrphanDelete'
    })
    */
    .when("/TotalAdminmoney", {
        templateUrl : "views/pages/TotalAdminmoney.html",
        controller: 'TotalAdminmoney'
    })
    .when("/TotalAgencyMoney", {
        templateUrl : "views/pages/TotalAgencyMoney.html",
        controller: 'TotalAgencyMoney'
    })
    .when("/logout", {
        templateUrl : "views/pages/login.html",
        controller: 'logout'
    })
    
    
    .otherwise({
        redirectTo:"/"
    });
      //$locationProvider.html5Mode(true);
      //$locationProvider.hashPrefix('');
      //if(window.history && window.history.pushState){
      //$locationProvider.html5Mode(true);
  //}

}]);


app.config(function($httpProvider){
    $httpProvider.interceptors.push('interceptor');
})