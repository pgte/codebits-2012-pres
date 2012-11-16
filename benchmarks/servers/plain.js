var fs = require('fs');
var port = process.argv[2] || 8080;

require('http').createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream(__dirname + '/../templates/trumpet/big.html',
    {
      encoding: 'utf-8',
      bufferSize: 100
    })
    .pipe(res);
}).listen(port, function() {
  console.log('Listening to port %d', port);
});