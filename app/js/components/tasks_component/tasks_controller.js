/**
 * Created by jvlara on 05/05/2015.
 */
define([
    'app'
], function(app) {
    'use strict';

    function tasksController($scope) {
        var vm_tasks = this;
        vm_tasks.tasks= [{"name": "learn angular"},
                         {"name": "learn css"  }]


        vm_tasks.addTask = function(){
            vm_tasks.tasks.push({"name":vm_tasks.task});
            vm_tasks.task= '';
        }
        tasksController.$inject = [
            '$scope'
        ];
    }
    return app.controller('ipTasksController', tasksController);
})