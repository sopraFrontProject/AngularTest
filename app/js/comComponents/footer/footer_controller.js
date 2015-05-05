/**
 * Created by jvlara on 04/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function footerController($scope) {
        var vm_footer = this;

        activate();

        function activate() {
            vm_footer.texto= "this is the footer";
        }
    }

    footerController.$inject = [
        '$scope'
    ];

    return app.controller('ipFooterController', footerController);
})