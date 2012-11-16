var fs = require('fs');
var Mustache = require('mustache');
var port = process.argv[2] || 8080;

var template = fs.readFileSync(__dirname + '/../templates/mustache/big.html', 'utf-8');

require('http').createServer(function(req, res) {

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

  res.writeHead(200, {'content-type': 'text/html'});  
  res.end(Mustache.render(template, data));

}).listen(port, function() {
  console.log('Listening to port %d', port);
});