define([
    'app',
    'text!comComponents/header/header_view.html'
],function(app, template){
    'use strict';

    return app.directive('ipHeaderDirective', [function(){
        return {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipHeaderController',
            controllerAs: 'vm_header',
            bindController: true
        };
    }])
});

