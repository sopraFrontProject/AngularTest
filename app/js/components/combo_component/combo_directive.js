/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app',
    'text!components/combo_component/combo_view.html'
],function(app,template){
    'use strict';

    function comboDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipComboController',
            controllerAs: 'vm_combo',
            bindController: true
        };

        return directive;
    }

    comboDirective.$inject = [];

    return app.directive('ipComboDirective',comboDirective)
})