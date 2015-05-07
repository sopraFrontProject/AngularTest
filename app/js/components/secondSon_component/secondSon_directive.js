/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app',
    'text!components/secondSon_component/secondSon_view.html'
],function(app, template){
    'use strict';


    function secondSonDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipSecondSonController',
            controllerAs: 'vm_son2',
            bindController: true
        };

        return directive;
    }

    secondSonDirective.$inject = [];

    return app.directive('ipSecondSonDirective', secondSonDirective)
})