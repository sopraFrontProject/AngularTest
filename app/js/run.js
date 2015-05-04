
define([
    'app'
], function(app) {
    'use strict';

    function configRun($rootScope,
                       $state,
                       $stateParams) {

    }

    configRun.$inject = [
        '$rootScope',
        '$state',
        '$stateParams'
    ];

    return app.run(configRun);

});
