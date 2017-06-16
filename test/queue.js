var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var qoper8 = require('..');

describe('queue', function() {
  var q;

  beforeEach(function() {
    q = new qoper8.masterProcess();
  });

  it('should be able to addToQueue', function() {
    var msg = {
      type: 'testMessage1',
      hello: 'world'
    };

    q.on('started', function() {
      this.addToQueue(msg);
      expect(this.queue).to.be.lengthOf(1);
    });

    q.start();
  });
});
