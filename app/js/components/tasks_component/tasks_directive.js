/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app',
    'text!components/tasks_component/tasks_view.html'
],function(app,template){
    'use strict';

    function tasksDirective(){
        var directive = {
            restrict: 'EA',
            template: template,
            scope: {},
            controller:'ipTasksController',
            controllerAs: 'vm_tasks',
            bindController: true
        };

        return directive;
    }

    tasksDirective.$inject = [];

    return app.directive('ipTasksDirective',tasksDirective)
})