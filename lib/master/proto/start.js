/*

 ----------------------------------------------------------------------------
 | ewd-qoper8.js: Node.js Queue and Multi-process Manager                   |
 |                                                                          |
 | Copyright (c) 2016 M/Gateway Developments Ltd,                           |
 | Reigate, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  24 January 2016

*/

var createWorkerProcessModule = require('./createWorkerProcessModule');
var checkWorkerPool = require('./checkWorkerPool');

function start() {

  createWorkerProcessModule.call(this);
  var q = this;

  // start timed event that checks worker pool inactivity

  this.checkWorkerPoolTimer = checkWorkerPool.call(this);

  process.on( 'SIGINT', function() {
    if (q.log) console.log('*** CTRL & C detected: shutting down gracefully...');
    q.stop();
  });

  process.on( 'SIGTERM', function() {
    if (q.log) console.log('*** Master Process ' + process.pid + ' detected SIGTERM signal.  Shutting down gracefully...');
    q.stop();
  });

  this.emit('start');
  console.log('========================================================');
  console.log('ewd-qoper8 is up and running.  Max worker pool size: ' + this.worker.poolSize);
  console.log('========================================================');

  this.emit('started');

};

module.exports = start;