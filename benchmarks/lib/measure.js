var eventEmitter = require('events').EventEmitter;

module.exports = function(action, times) {
  if (! times) times = 1;
  var ee = new eventEmitter();
  process.nextTick(function() {
    var startTime = Date.now();

    var pending = times;
    
    function next() {
      pending --;
      if (pending === 0) {
        var endTime = Date.now();
        var elapsed = endTime - startTime;
        var average = elapsed / times;
        ee.emit('end', {
          elapsed: elapsed,
          average: average
        });
      }
    }
    
    for(var i = 0; i < times; i++) {
      action(next);
    }
  });

  return ee;
}