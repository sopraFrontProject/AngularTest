/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function sonController($scope) {
        var vm_son = this;
        vm_son.newName = "";
        $scope.$on("myMesssage", function(data,message) {
            vm_son.newName = message;

        });

        vm_son.sendMessage = function(message){
            vm_son.newMessage = message;
            $scope.$emit("myMessage", message);
        }

    }


    sonController.$inject = [
        '$scope'
    ];


    return app.controller('ipSonController',sonController);
})