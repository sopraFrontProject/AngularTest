
define([
    'app'
], function(app) {
    'use strict';

    app.controller('ipMainController', [
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



/*
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
 */

/*
 app.module('x').controller('ipMainController', ['$scope', function($scope) {

 function activate() {
 this.test = "This is an example";
 }

 activate();
 }])

 return app.module('x').controller('ipMainController'); */