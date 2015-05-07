/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app',
    'text!states/communication/communication_view.html'
],function(app, template){
    'use strict';


    function communicationDirective() {
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller: 'ipCommunicationController',
            controllerAs: 'vm_communication',
            bindController: true
        };

        return directive;
    }

    communicationDirective.$inject = [];

    return app.directive('ipCommunicationDirective', communicationDirective)
})

