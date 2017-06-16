var assert = require('assert');
var qoper8 = require('..');

describe('app', function() {
  it('should be object', function() {
    assert.equal(typeof qoper8, 'object');
  })

  it('should have "masterProcess"', function() {
    assert.ok(qoper8.masterProcess);
  })

  it('should have "workerProcess"', function() {
    assert.ok(qoper8.workerProcess);
  })
});
