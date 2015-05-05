/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!components/image_component/image_view.html'
],function(app,template){
    'use strict';

    function imageDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipImageController',
            controllerAs: 'vm_image',
            bindController: true
        };

        return directive;
    }

    imageDirective.$inject = [];

    return app.directive('ipImageDirective',imageDirective)
})