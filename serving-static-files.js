const http =  require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/hero-bcg.jpeg');
  res.writeHead(200,{'content-type': 'image/jpeg'});
  readStream.pipe(res);
}).listen('3000');