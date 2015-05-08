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
        vm_son.brotherMessage = "";

        $scope.$on("myFatherMessage", function(data,message) {

            vm_son.newName = message;
            console.log("Son: I recieved a message from my father");

        });

        $scope.$on("myBrotherMessage", function(data,message) {
            vm_son.brotherMessage = message;

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