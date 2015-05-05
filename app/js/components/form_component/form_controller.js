/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function formController($scope) {
            var vm_form = this;
            vm_form.name = "";
            vm_form.addName = function(){
                vm_form.newName = vm_form.name;
            }
    }

    formController.$inject = [
        '$scope'
    ];

    return app.controller('ipFormController', formController);
})