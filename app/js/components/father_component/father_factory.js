/**
 * Created by jvlara on 07/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function fatherFactory(){

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


        function sendMessage(scope,message){

             scope.$broadcast("MyFatherMessage",message);
             return message;
        }


        function setData(objeto){

            factory.datosPersona = objeto;

        }



    }

    fatherFactory.$inject = [];

    return app.factory('ipFatherFactory', fatherFactory);

})