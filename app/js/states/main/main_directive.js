define([
    'app',
    'text!states/main/main.html'
],function(app, template){
    'use strict';

    return app.directive('ipMainDirective', [
        function(){
            return {
                restrict: 'EA',
                template: template,
                scope: {},
                controller: 'ipMainController',
                controllerAs: 'vm_main',
                bindController: true
            };
        }])
});

