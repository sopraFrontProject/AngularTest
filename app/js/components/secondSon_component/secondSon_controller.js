/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function secondSonController($scope,$rootScope) {
        var vm_son2 = this;
        vm_son2.newName = "";
        vm_son2.cousinMessage ="";
        vm_son2.uncleMessage ="";

        $scope.$on("myFatherMessage", function(data,message) {
            vm_son2.newName = message;

        });

        vm_son2.sendMessage = function(message){
            vm_son2.newMessage = message;
            $scope.$emit("myMessage", message);
        }

        vm_son2.sendMessageBrother = function(message){
            $rootScope.$broadcast("myBrotherMessage", message);

        }

        $scope.$on("myCousinMessage", function(data,message){
            vm_son2.cousinMessage = message;
        });

        $scope.$on("myUncleMessage", function(data,message){
            vm_son2.uncleMessage = message;
        });

    }


    secondSonController.$inject = [
        '$scope','$rootScope'
    ];


    return app.controller('ipSecondSonController',secondSonController);
})