/**
 * Created by jvlara on 07/05/2015.
 */

define([
    'app',
    'text!components/father_component/father_view.html'
],function(app,template){
    'use strict';

    function fatherDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipFatherController',
            controllerAs: 'vm_father',
            bindController: true
        };

        return directive;
    }

    fatherDirective.$inject = [];

    return app.directive('ipFatherDirective',fatherDirective)
})