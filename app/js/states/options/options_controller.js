/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app'
], function(app){
        'use strict';

        function optionsController($scope){
            var vm_options = this;
            function activate(){
                vm_options.test = "Hola";
            }

            activate();
        }

        optionsController.$inject = [
            '$scope'
        ];

        return app.controller('ipOptionsController', ['$scope', optionsController]);
})