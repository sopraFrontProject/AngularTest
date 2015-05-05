
define([
    'app'
], function(app) {
    'use strict';


    return app.config([
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function($locationProvider,
                 $stateProvider,
                 $urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider

                .state('myApp', {
                    url: '/',

                    views: {
                        'content@': {

                            template: '<ip-main-directive></ip-main-directive>'

                        }
                    }
                })
        }]);

});


/*

 define([
 'app'
 ], function(app) {
 'use strict';

 function configRoutes($locationProvider,
 $stateProvider,
 $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');
 $stateProvider

 .state('myApp', {
 url: '/',

 views: {
 'content@': {

 template: '<ip-main-directive></ip-main-directive>'

 }
 }
 })
 }

 configRoutes.$inject = [
 '$locationProvider',
 '$stateProvider',
 '$urlRouterProvider'];


 return app.config(configRoutes);
 })

 */


