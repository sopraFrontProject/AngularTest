/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!components/contacts_component/contacts_view.html'
],function(app,template){
    'use strict';

    function contactsDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipContactsController',
            controllerAs: 'vm_contacts',
            bindController: true
        };

        return directive;
    }

    contactsDirective.$inject = [];

    return app.directive('ipContactsDirective',contactsDirective)
})