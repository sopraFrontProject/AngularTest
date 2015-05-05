/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function helloController($scope) {
        var vm_hello = this;

        activate();

        function activate() {
            vm_hello.texto= "Hola";
        }
    }

    helloController.$inject = [
        '$scope'
    ];

    return app.controller('ipHelloController', helloController);
})