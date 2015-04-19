'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/tasks', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/tasks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

/*
  it('should return an array of task objects', function() {
    request(app)
      .get('/api/tasks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        console.log("checking jsm specs");
        console.log(res.body);
        expect(res.body[0]._id).toBeDefined();
        expect(res.body[0].name).toBeDefined();
        expect(res.body[0].info).toBeDefined();
        expect(res.body[0].estimation).toBeDefined();
        expect(res.body[0].status).toBeDefined();
        expect(res.body[0].personResponsible).toBeDefined();
        done();
      });
  });
*/

});