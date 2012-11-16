var http = require('http');
setTimeout(function() {
  var req = http.request({
    host: 'localhost',
    port: 8080,
    path: '/'
  });
  req.on('response', function(res) {
    res.on('data', function() {
      console.log('data');
    })
  });
  req.end();
}, 3000);