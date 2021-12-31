const http = require('http');
const staticLib = require('node-static');
const file = new staticLib.Server('.');
function accept(req, res){
    file.serve(req, res);
}

http.createServer(accept).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');



