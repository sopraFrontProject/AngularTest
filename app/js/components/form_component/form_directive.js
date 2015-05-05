/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!components/form_component/form_view.html'
],function(app,template){
    'use strict';

    function formDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipFormController',
            controllerAs: 'vm_form',
            bindController: true
        };

        return directive;
    }

    formDirective.$inject = [];

    return app.directive('ipFormDirective',formDirective)
})