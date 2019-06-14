const http = require('http');

const fs = require('fs');
// serving static files as response
http.createServer((req,res) => {
const readStream = fs.createReadStream('./static/example.json');
res.writeHead(200,{'Content-type' : 'application/json'});
// res.writeHead(200,{'Content-type' : 'image/png'}); for images
// res.writeHead(200,{'Content-type' : 'text/html'}); for html files
 
readStream.pipe(res);
const headerNames = response.getHeaderNames();
console.log(headerNames);
// headerNames === ['foo', 'set-cookie']
}).listen(3000);