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



/*
 define([
 'app'
 ], function(app) {
 'use strict';

 function headerController($scope) {
 var vm_header = this;

 activate();

 function activate() {
 vm_header.test = "This is an example of a header";
 }
 }

 headerController.$inject = [
 '$scope'
 ];


 return app.controller('ipHeaderController', headerController);
 })
 */
