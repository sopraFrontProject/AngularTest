define([
    'app'
], function(app) {
    'use strict';

    function mainController($scope) {
        var vm_main = this;

        function activate() {
            vm_main.test = "Hola";

           /* var _name = 'Brian';
            vm_main.user = {
                name: function (newName) {

                    return _name = newName;
                }

            };*/

            activate();


        }
    }
    mainController.$inject = [
        '$scope'
    ];


    return app.controller('ipMainController', mainController);
})

