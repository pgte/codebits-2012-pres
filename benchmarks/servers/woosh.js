var fs = require('fs');
var woosh = require('woosh');
var memstream = require('memstream')();
var port = process.argv[2] || 8080;

console.log('port: %d', port);

fs.createReadStream(__dirname + '/../templates/trumpet/big.html',
  {
    encoding: 'utf-8',
    bufferSize: 100
  })
  .pipe(memstream);

memstream.on('end', function() {
  require('http').createServer(function(req, res) {

    var w = woosh();

    w.update('.b span', function (html, node) {
        return html.toUpperCase();
    });

    w.update('.c', '---');
    w.remove('.d');
    w.remove('.e');

    var rs = memstream.read()
    rs.pipe(w).pipe(res);
    rs.resume();

  }).listen(port, function() {
    console.log('Listening to port %d', port);
  });
});

