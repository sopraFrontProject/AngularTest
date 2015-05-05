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


    return app.controller('ipMainController', ['$scope', mainController]);
})

/*
app.module('x').controller('ipMainController', ['$scope', function($scope) {

    function activate() {
        this.test = "This is an example";
    }

    activate();
}])

return app.module('x').controller('ipMainController'); */