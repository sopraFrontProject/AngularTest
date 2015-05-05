define([
    'app'
], function(app) {
    'use strict';

    function mainController($scope) {
        var vm_main = this;

        function activate() {
            vm_main.test = "Hola";

        }


        activate();


    }


    mainController.$inject = [
        '$scope'
    ];


    return app.controller('ipMainController', mainController);
})

