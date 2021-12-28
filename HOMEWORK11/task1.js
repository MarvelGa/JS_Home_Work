let http = require("http");
const os = require('os');
let path = require('path');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write(getData());
    resp.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

function getData() {
    let result = `<h2>System information</h2>
    Current user name: ${os.userInfo().username}</br>
    OS type: ${os.type()}</br>
    System work tyme: ${(os.uptime() / 60).toFixed(2)} minutes </br>
    Current  work directory:  ${process.cwd()} </br>
    Server file name: ${path.basename(__filename)}`;
    return result;
}