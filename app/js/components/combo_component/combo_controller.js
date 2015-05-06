/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function comboController($scope) {
        var vm_combo = this;
        vm_combo.contacts = [
            {"id": 0, "firstName": "John", "lastName": "Doe"},
            {"id": 1, "firstName": "Anna", "lastName": "Smith"},
            {"id": 2, "firstName": "Peter","lastName": "Jones"},
            {"id": 3, "firstName": "Jane","lastName": "Doe" },
            {"id": 4, "firstName": "Chris","lastName": "Smith" }
        ]


        vm_combo.userSelected = "Select user";

        vm_combo.selectUser = function(nameUser){

            vm_combo.userSelected = nameUser;
        }

    }

    comboController.$inject = [
        '$scope'
    ];

    return app.controller('ipComboController', comboController);
})