module.exports = function getHTML (options, callbacks) {
  var https = require('https');
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      const chunks = [];
      chunks.push(data);
      callbacks(chunks);
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

}