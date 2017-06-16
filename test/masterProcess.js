var chai = require('chai');
var assert = chai.assert;
var qoper8 = require('..');

describe('masterProcess', function() {
  var q;

  beforeEach(function() {
    q = new qoper8.masterProcess();
  });

  it('should inherit from event emitter', function(done) {
    q.on('foo', done);
    q.emit('foo');
  });

  it('should return version', function() {
    assert.isString(q.version());
  })

  it('should return uptime', function() {
    assert.isString(q.upTime());
  })

  it('should return worker pids', function() {
    assert.isArray(q.getWorkerPids());
  });

  it('should return stats', function() {
    assert.isObject(q.getStats());
  });

  it('should fire on start event', function(done) {
    q.on('start', done);
    q.start();
  })

  it('should fire on started event', function(done) {
    q.on('started', done);
    q.start();
  });

  // it('should be able to stop', function(done) {
  //   var qq = new qoper8.masterProcess();
  //
  //   qq.on('started', function() {
  //     qq.on('stop', done);
  //     qq.stop();
  //   });
  //
  //   qq.start();
  // });
});
