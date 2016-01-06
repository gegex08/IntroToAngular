namespace IntroToAngular {

    angular.module('IntroToAngular', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngApp/views/contactList.html',
                    controller: IntroToAngular.Controllers.ListController,
                    controllerAs: 'peanutButter'
                })
                .when('/calculator', {
                    templateUrl: '/ngApp/views/calculator.html',
                    controller: IntroToAngular.Controllers.HomeController,
                    controllerAs: 'home'
                })
                .when('/details/:firstName', {
                    templateUrl: '/ngApp/views/contactDetails.html',
                    controller: IntroToAngular.Controllers.DetailsController,
                    controllerAs: 'details'
                })
            ;
        });
}