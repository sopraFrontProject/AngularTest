/**
 * Created by jvlara on 04/05/2015.
 */
define([
    'app',
    'text!components/footer/footer_view.html'
],function(app,template){
    'use strict';

    function footerDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipFooterController',
            controllerAs: 'vm_footer',
            bindController: true
        };

        return directive;
    }

    footerDirective.$inject = [];

    return app.directive('ipFooterDirective',footerDirective)
})
