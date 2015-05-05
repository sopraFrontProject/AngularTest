
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

                .state('options',{
                    url: '/options',

                    views:{
                        'content@':{
                            template: '<ip-options-directive></ip-options-directive>'
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



