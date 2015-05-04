define([
    'app',
    'text!components/main/main.html'
],function(app, template){
    'use strict';


    function mainDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipMainController',
            controllerAs: 'vm_main',
            bindController: true
        };

        return directive;
    }

    mainDirective.$inject = [];

    return app.directive('ipMainDirective', mainDirective)
})

