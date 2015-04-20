'use strict';

describe('Controller: TaskCtrl', function () {

  var TaskCtrl, scope, $httpBackend;

  /* before executing each unit test
   * load the 'yoApp' module
  **/
  beforeEach(module('yoApp'));
  beforeEach(module('socketMock')); // socket mock


  /* Initializing the controller
   * and a mock scope
  **/
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    
    // make a mock for the api
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/tasks')
      .respond([{
        _id : 1,
        name : 'Learn AngularJs',
        info : 'Blubb',
        estimation: 1,
        status: 'ToDo',
        personResponsible: 'Chuck Norris'
      },{
        _id : 2,
        name : 'Learn NodeJs',
        info : 'Blah',
        estimation: 5,
        status: 'InProgress',
        personResponsible: 'Jackie Chan'
      },{
        _id : 3,
        name : 'Learn Meteor',
        info : 'huh',
        estimation: 3,
        status: 'Done',
        personResponsible: 'Bruce Lee'
      }])

    scope = $rootScope.$new();

    // initialize controller
    TaskCtrl = $controller('TaskCtrl', {
      $scope: scope
    });
  }));

  /* after completing each unit test
   * verify expectations
  **/
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should attach the 3 tasks from the mock to the scope', function () {
    $httpBackend.flush();
    expect(scope.tasks.length).toBe(3);
  });

  it('should send a HTTP POST request to the endpoint API when adding a new task', function() {

    // Expecting a HTTP Code 201 after sending a POST request with the new task
    $httpBackend.expectPOST('/api/tasks', {name: {
      name : 'Learn AngularJs',
      info : 'Blubb',
      estimation: 1,
      status: 'ToDo',
      personResponsible: 'Chuck Norris'
    }}).respond(201, '');

    // Add new task to scope
    scope.newTask = {
      name : 'Learn AngularJs',
      info : 'Blubb',
      estimation: 1,
      status: 'ToDo',
      personResponsible: 'Chuck Norris'
    };
    scope.addTask();

    // Trigger HTTP requests
    $httpBackend.flush();
  });

  it('should send a HTTP PUT request to the endpoint API when updating an existing task', function() {
    $httpBackend.flush();

    // Expecting a HTTP Code 200 after sending a PUT request with an existing task
    $httpBackend.expectPUT('/api/tasks/1', {
      _id: 1,
      name : 'Learn AngularJs',
      info : 'Blubb',
      estimation: 1,
      status: 'ToDo',
      personResponsible: 'Chuck Norris'
    }).respond(200, '');

    // Perform test operation
    var taskToUpdate = scope.tasks[0];
    taskToUpdate.status = 'ToDo';

    scope.updateTask(taskToUpdate);

    // Trigger HTTP requests
    $httpBackend.flush();

    expect(scope.tasks[0].status).toEqual('ToDo');
  });

  it('should send a HTTP DELETE request to the API when deleting an existing task', function() {
    $httpBackend.flush();
    var taskToDelete = scope.tasks[2];

    // Expecting a DELETE request
    $httpBackend.expectDELETE('/api/tasks/' + taskToDelete._id).respond(200, '');

    // Perform test operation
    scope.deleteTask(taskToDelete);

    // Trigger HTTP requests
    $httpBackend.flush();

  });

});



