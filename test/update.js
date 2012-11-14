var trumpet = require('trumpet');
var tr = trumpet();

tr.update('.b span', function (html, node) {
    return html.toUpperCase();
});

tr.update('.c', '---');
tr.remove('.d');
tr.remove('.e');

var fs = require('fs');
fs.createReadStream(__dirname + '/update.html')
  .pipe(tr)
  .pipe(process.stdout);