
define([
    'app'
], function(app) {
    'use strict';

    return app.controller('ipMainController', [
        '$scope',
        function($scope){
            //el $scope en nuestro ejemplo no lo usaremos, solo es para medios practicos

            this.test = "Hola cuatro";

            activate();

            function activate() {

            }
        }
    ])
});
