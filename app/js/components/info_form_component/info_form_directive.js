/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app',
    'text!components/info_form_component/info_form_view.html'
],function(app,template){
    'use strict';

    function infoFormDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipInfoFormController',
            controllerAs: 'vm_infoForm',
            bindController: true
        };

        return directive;
    }

    infoFormDirective.$inject = [];

    return app.directive('ipInfoFormDirective',infoFormDirective)
})