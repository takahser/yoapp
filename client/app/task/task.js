'use strict';

angular.module('yoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('task', {
        url: '/task',
        templateUrl: 'app/task/task.html',
        controller: 'TaskCtrl'
      });
  });