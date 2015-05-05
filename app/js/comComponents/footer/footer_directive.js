/**
 * Created by jvlara on 04/05/2015.
 */


define([
    'app',
    'text!comComponents/footer/footer_view.html'
],function(app,template){
    'use strict';
    return app.directive('ipFooterDirective',[
        function(){
            return {
                restrict: 'EA',
                template: template,
                scope: {},
                controller:'ipFooterController',
                controllerAs: 'vm_footer',
                bindController: true
            };
        }])
});
