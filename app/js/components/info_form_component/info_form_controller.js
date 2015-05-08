/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app'
], function(app){
    'use strict';

    function infoFormController($scope, ipInfoFormFactory) {
        var vm_infoForm = this;
        vm_infoForm.tareas = [];



        vm_infoForm.userName = ipInfoFormFactory.getNombre();
        ipInfoFormFactory.getData();


        vm_infoForm.funciones = ipInfoFormFactory.datosPersona;




        vm_infoForm.getTareas = function(idFuncion) {
            vm_infoForm.tareas = ipInfoFormFactory.getTareas(idFuncion);
        }

        infoFormController.$inject = [
            '$scope',
            'ipInfoFormFactory'
        ];
    }
    return app.controller('ipInfoFormController', infoFormController);
})