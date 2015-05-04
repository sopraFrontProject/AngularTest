define([
    'app'
], function(app) {
    'use strict';

    function mainController($scope) {
        var vm_main = this;

        activate();

        function activate() {
            vm_main.test = "This is an example";
        }
    }

    mainController.$inject = [
        '$scope'
    ];


    return app.controller('ipMainController', mainController);
})