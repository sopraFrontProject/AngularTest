/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function contactsController($scope) {
        var vm_contacts = this;
        vm_contacts.contacts = [
            {"id": 0, "firstName":"John", "lastName":"Doe"},
            {"id": 1, "firstName":"Anna", "lastName":"Smith"},
            {"id": 2, "firstName":"Peter","lastName":"Jones"}
        ]

    }

    contactsController.$inject = [
        '$scope'
    ];

    return app.controller('ipContactsController', contactsController);
})