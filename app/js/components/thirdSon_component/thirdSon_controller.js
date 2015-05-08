/**
 * Created by jvlara on 08/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function thirdSonController($scope,$rootScope) {
        var vm_son3 = this;

        vm_son3.sendCousinMessage = function(message){
            $rootScope.$broadcast("myCousinMessage", message);
        }

        vm_son3.sendCousinMessage = function(message){
            $rootScope.$broadcast("myCousinMessage", message);
        }

        vm_son3.sendUncleMessage = function(message){
            $scope.$parent.$parent.$broadcast("nephewMessage", message);
        }

    }


    thirdSonController.$inject = [
        '$scope',
        '$rootScope'
    ];


    return app.controller('ipThirdSonController',thirdSonController);
})