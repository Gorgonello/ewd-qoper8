var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var qoper8 = require('..');

describe('workers', function() {
  var q;

  beforeEach(function() {
    q = new qoper8.masterProcess();
  });

  it('should be able to setWorkerPoolSize', function() {
    q.on('start', function() {
      this.toggleLogging();
      this.setWorkerPoolSize(2);
    });

    q.on('started', function() {
      expect(this.worker.poolSize).to.equal(2);
    })

    q.start();
  });

  it('should be able to add worker', function(done) {
    q.on('start', function() {
      this.toggleLogging();
      this.setWorkerPoolSize(2);
      this.worker.module = 'ewd-qoper8/lib/tests/test-workerModule1';
    });

    q.on('started', function() {
      this.addToQueue({
        type: 'testMessage1',
        hello: 'world'
      });

      setTimeout(function () {
        q.getWorkerAvailability(function(available) {
          expect(available[Object.keys(available)[0]]).to.be.true;
          done();
        });
      }, 1000);

    });

    q.on('stop', function() {
      done();
    });

    q.start();
  });
});
