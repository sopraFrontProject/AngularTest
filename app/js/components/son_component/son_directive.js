/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app',
    'text!components/son_component/son_view.html'
],function(app, template){
    'use strict';


    function sonDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipSonController',
            controllerAs: 'vm_son',
            bindController: true
        };

        return directive;
    }

    sonDirective.$inject = [];

    return app.directive('ipSonDirective', sonDirective)
})
