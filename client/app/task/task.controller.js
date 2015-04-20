'use strict';

angular.module('yoApp')
  .controller('TaskCtrl', function ($scope, $http, socket) {
    $scope.tasks = [];

    $http.get('/api/tasks').success(function(tasks) {
      $scope.tasks = tasks;
      socket.syncUpdates('task', $scope.tasks);
    });

    /*
    * Methods, that are directly accessible from the view (task.jade)
    */
    $scope.addTask = function() {
      if($scope.newTask === '') {
        return;
      }
      $http.post('/api/tasks', { name: $scope.newTask, info: $scope.newInfo, estimation: $scope.newEstimation, status: $scope.newStatus, personResponsible: $scope.newPersonResponsible });
      $scope.newTask = '';
    };

    $scope.updateTask = function(task) {
      console.log($scope);
      console.log(task);
      $http.put('/api/tasks/' + task._id, task);
    };

    $scope.updateTaskStatus = function(task, status) {
      console.log($scope);
      console.log(task);
      task.status = status;
      $http.put('/api/tasks/' + task._id, task);
    };



    $scope.deleteTask = function(task) {
      $http.delete('/api/tasks/' + task._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('task');
    });

  });
