
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
