/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app',
    'text!states/info/info_view.html'
],function(app, template){
    'use strict';


    function infoDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipInfoController',
            controllerAs: 'vm_info',
            bindController: true
        };

        return directive;
    }

    infoDirective.$inject = [];

    return app.directive('ipInfoDirective', infoDirective)
})
