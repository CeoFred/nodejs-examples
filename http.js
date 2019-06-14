const http = require('http');
// create a server
const server = http.createServer((req,res) => {
if(req.url === '/'){
    res.write('Hello world');
    res.end();
}else{
    res.write('Using some other domain');
    res.end();
}
});

// set port
server.listen('3000');
