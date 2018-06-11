var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      const chunks = [];
      chunks.push(data);
      console.log(chunks);
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);