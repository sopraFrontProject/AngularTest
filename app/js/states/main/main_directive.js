define([
    'app',
    'text!states/main/main.html'
],function(app, template){
    'use strict';

    app.directive('ipMainDirective', [
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

/*

 define([
 'app',
 'text!states/main/main.html'
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
 */

