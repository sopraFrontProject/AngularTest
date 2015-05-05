/**
 * Created by jvlara on 04/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    return app.controller('ipFooterController', [
        '$scope',
        function($scope){

            this.texto= "this is the footer";

            activate();

            function activate() {

            }
        }]);
});