/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function fatherFactory($rootScope){

        /*return {
            sendMessage: function(scope, message) {
                console.log("Factory: Resady to broadcast");
                console.log("Factory: Message to be broadcasted " +
                    "" + message);
                return scope.$broadcast("MyFatherMessage",message);
            }
        };*/
        var factory ={
            sendMessage : sendMessage
        }

        return factory;


        function sendMessage(message){
            $rootScope.$broadcast("myFatherMessage",message);
             return message;
        }




    }

    fatherFactory.$inject = ['$rootScope'];

    return app.factory('ipFatherFactory', fatherFactory);

}) 