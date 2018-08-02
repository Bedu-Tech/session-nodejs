var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  try {
    fs.readFile('index.html', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain'})
        return res.end('404 Not Found')
      }
  
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.write(data)
      return res.end()
    })
  } catch (e) {
    console.log(e)
  }
}).listen(8080)
