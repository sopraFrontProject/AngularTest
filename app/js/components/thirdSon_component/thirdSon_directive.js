/**
 * Created by jvlara on 08/05/2015.
 */
define([
    'app',
    'text!components/thirdSon_component/thirdSon_view.html'
],function(app, template){
    'use strict';


    function thirdSonDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipThirdSonController',
            controllerAs: 'vm_son3',
            bindController: true
        };

        return directive;
    }

    thirdSonDirective.$inject = [];

    return app.directive('ipThirdSonDirective', thirdSonDirective)
})
