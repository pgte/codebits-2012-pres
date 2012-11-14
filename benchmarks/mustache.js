var fs = require('fs');
var Mustache = require('mustache');
var measure = require('./lib/measure');

var out = process.stdout;

var m = measure(function(done) {
  fs.readFile(__dirname + '/templates/mustache/small.html', 'utf-8', function(err, html) {
    if (err) throw err;

    var data = {
      tacos: function() {
        return 'TACOS';
      },
      y: function() {
        return 'Y';
      },
      burritos: function() {
        return 'BURRITOS'
      },

      c: '---'
    };

    out.write(Mustache.render(html, data));
    done();
  });
}, 200);

m.on('end', function(elapsed) {
  console.log('elapsed:', elapsed);
});