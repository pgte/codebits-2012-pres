var woosh = require('woosh');
var measure = require('./lib/measure');

process.stdout.setMaxListeners(10000);

var m = measure(function(done) {
  var w = woosh();

  w.update('.b span', function (html, node) {
      return html.toUpperCase();
  });

  w.update('.c', '---');
  w.remove('.d');
  w.remove('.e');

  var fs = require('fs');
  fs.createReadStream(__dirname + '/templates/trumpet/small.html')
    .pipe(w)
    .pipe(process.stdout);

  w.on('end', done);
}, 200);

m.on('end', function(results) {
  console.log('woosh results:', results);
});