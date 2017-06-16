module.exports = function() {
  this.on('start', function() {
    if (this.log) console.log('Worker process ' + process.pid + ' starting...');
  });

  this.on('message', function(msg, send, finished) {
    console.log(msg);

    finished({
      hello: 'world'
    });
  });

  this.on('stop', function() {
    if (this.log) console.log('Worker process ' + process.pid + ' stopping...');
  });
}
