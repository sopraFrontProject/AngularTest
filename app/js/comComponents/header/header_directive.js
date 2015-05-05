define([
    'app',
    'text!comComponents/header/header_view.html'
],function(app, template){
    'use strict';


    function headerDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipHeaderController',
            controllerAs: 'vm_header',
            bindController: true
        };

        return directive;
    }

    headerDirective.$inject = [];

    return app.directive('ipHeaderDirective', headerDirective)
})

