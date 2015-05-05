/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!states/options/options.html'
],function(app,template){
    'use strict';

    function optionsDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipOptionsController',
            controllerAs: 'vm_options',
            bindController: true
        };

        return directive;
    }

    optionsDirective.$inject = [];

    return app.directive('ipOptionsDirective', optionsDirective)
})