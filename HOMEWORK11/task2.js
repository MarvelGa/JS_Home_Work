const http = require("http");
const pm = require('./personalmodule');
const os = require('os');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Date of request: ' + new Date() + '</br>');
    response.write(pm.sayGreetingToUser(`${os.userInfo().username}`));
    response.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');