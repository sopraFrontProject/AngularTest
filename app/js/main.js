/**
 * Created by jevazquez on 27/04/2015.
 */
'use strict';

require.config({
    paths:{

        'angular'               : '../../bower_components/angular/angular.min',
        'uiRouter'              : '../../bower_components/angular-ui-router/release/angular-ui-router.min',
        'uiBootstrap'           : '../../bower_components/angular-bootstrap/ui-bootstrap.min',
        'uiBootstrapTpl'        : '../../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',

        'jquery'                : '../../bower_components/jquery/dist/jquery.min',
        'bootstrap'             : '../../bower_components/bootstrap/dist/js/bootstrap.min',
        'ocLazyLoad'            : '../../bower_components/oclazyload/dist/ocLazyLoad.min',

        'text'                  : '../../bower_components/requirejs-text/text'
    },


    shim: {
        'jquery': { exports: '$'},

        'bootstrap': {
            deps: ["jquery"]
        },

        'angular': {'exports': 'angular'},

        'uiRouter':{
            deps: ['angular']
        },

        'uiBootstrap': {
            deps: ['angular']
        },

        'uiBootstrapTpl':{
            deps: ['angular']
        },

        'ocLazyLoad':{
            deps: ['angular']
        }

    },

    priority: ['angular']

});


require([
    'jquery',
    'angular',
    'uiRouter',
    'uiBootstrap',
    'uiBootstrapTpl',
    'ocLazyLoad',
    'app',
    'run',
    'routes',

    "states/main/main_directive",
    "states/main/main_controller"


],function(){
        angular.bootstrap(document, ['myApp']);
});

