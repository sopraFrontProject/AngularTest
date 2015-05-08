/**
 * Created by jvlara on 08/05/2015.
 */
define([
    'app',
    'text!components/secondFather_component/secondFather_view.html'
],function(app,template){
    'use strict';

    function secondFatherDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipSecondFatherController',
            controllerAs: 'vm_father2',
            bindController: true
        };

        return directive;
    }

    secondFatherDirective.$inject = [];

    return app.directive('ipSecondFatherDirective',secondFatherDirective)
})