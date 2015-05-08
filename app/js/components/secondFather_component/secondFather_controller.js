/**
 * Created by jvlara on 08/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function secondFatherController($scope) {
        var vm_father2 = this;

        vm_father2.sendNephewMessage = function(message){
            $scope.$parent.$broadcast("myUncleMessage", message);
        }

    }

    secondFatherController.$inject = [
        '$scope'

    ];


    return app.controller('ipSecondFatherController', secondFatherController);
})