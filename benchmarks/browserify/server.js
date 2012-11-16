var fs = require('fs');

require('http').createServer(function(req, res) {
  if (req.url == '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<script src="bundle.js"></script>');    
  } else {
    res.writeHead(200, {'content-type:': 'text/plain'});
    fs.createReadStream(__dirname + '/bundle.js').pipe(res);
  }

}).listen(8081);