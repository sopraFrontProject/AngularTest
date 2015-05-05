/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!components/hello_component/hello_view.html'
],function(app,template){
    'use strict';

    function helloDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipHelloController',
            controllerAs: 'vm_hello',
            bindController: true
        };

        return directive;
    }

    helloDirective.$inject = [];

    return app.directive('ipHelloDirective',helloDirective)
})