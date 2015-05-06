
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
                url: '/myApp',

                views: {
                    'content@': {

                        template: '<ip-main-directive></ip-main-directive>'

                    }
                }
            })

            .state('options',{
                url: '/',

                views:{
                    'content@':{
                        template: '<ip-options-directive></ip-options-directive>'
                    }
                }
            })


            .state('info',{
                url: '/',

                views:{
                    'content@' :{
                        template:'<ip-info-directive></ip-info-directive>'
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



