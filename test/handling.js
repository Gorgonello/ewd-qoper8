var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var qoper8 = require('..');

describe('handling', function() {
  it('should be posible to handle message', function() {
    var q = new qoper8.masterProcess();

    q.on('start', function() {
      this.worker.poolSize = 1;
      this.worker.module = 'ewd-qoper8/lib/tests/test-workerModule2';
    });

    q.on('started', function() {
      this.handleMessage({
        type: 'testMessage1',
        hello: 'world'
      }, function(response) {
        expect(response).to.have.property('message');
      });
    });

    q.start();
  });
});
