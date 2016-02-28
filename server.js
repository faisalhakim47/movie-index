var http = require("http");
var x = require("x-ray");

http.createServer((req, res) => {
    res.end('true');
}).listen(process.env.PORT, process.env.IP);
