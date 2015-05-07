/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function fatherController($scope) {
        var vm_father = this;
       vm_father.message="";
        vm_father.sonMessage = "";

        vm_father.sendMessage = function(message){
            vm_father.newMessage = message;
            $scope.$broadcast("myFatherMessage",message);

        }

        $scope.$on("myMessage", function(data, message){
           vm_father.sonMessage = message;
        });

    }


    fatherController.$inject = [
        '$scope'
    ];


    return app.controller('ipFatherController', fatherController);
})