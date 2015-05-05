define([
    'app'
], function(app) {
    'use strict';
    return app.controller('ipHeaderController', [
        '$scope', function($scope){
            this.test = "This is an example of a header";

            activate();

            function activate() {

            }
        }
    ])
});
