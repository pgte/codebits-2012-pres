var trumpet = require('trumpet');
var measure = require('./lib/measure');

var m = measure(function(done) {
  var tr = trumpet();

  tr.update('.b span', function (html, node) {
      return html.toUpperCase();
  });

  tr.update('.c', '---');
  tr.remove('.d');
  tr.remove('.e');

  var fs = require('fs');
  fs.createReadStream(__dirname + '/templates/trumpet/small.html')
    .pipe(tr)
    .pipe(process.stdout);

  tr.on('end', done);
}, 200);

m.on('end', function(results) {
  console.log('trumpet results:', results);
});