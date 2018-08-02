var http = require('http')

http.createServer(function (req, res) {
  var date = Date();
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end(`Hello World! ${date}`)
}).listen(8080)
