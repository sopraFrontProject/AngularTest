/**
 * Created by jvlara on 06/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function infoFormFactory(){



        var factory = {

            getData : getData,
            setData : setData,
            datosPersona : [],
            getTareas : getTareas,
            getNombre : getNombre
        };

        return factory;


        function getNombre() {
            var prueba = "Felipe";
            return prueba;
        }

        function getData(){
            var objeto = [
                {"id": 0, "name": "Funcion1", "tareas":[
                    {"id": 0, "name": "Tarea1"},
                    {"id": 1, "name": "Tarea2"}
                ]},
                {"id": 1, "name": "Funcion2", "tareas":[
                    {"id": 0, "name": "Tarea1"},
                    {"id": 1, "name": "Tarea2"},
                    {"id": 2, "name": "Tarea3"}
                ]},
                {"id": 2, "name": "Funcion3", "tareas":[
                    {"id": 0, "name": "Tarea1"},
                ]}

            ];

            factory.setData(objeto);
        }

        function getTareas(idFuncion){
            for(var i=0;i< factory.datosPersona.length;i++){
                if(factory.datosPersona[i].id == idFuncion){
                    return factory.datosPersona[i].tareas;
                }
            }
        }

        function setData(objeto){

            factory.datosPersona = objeto;

        }



    }

    infoFormFactory.$inject = [];

    return app.factory('ipInfoFormFactory', infoFormFactory);

})