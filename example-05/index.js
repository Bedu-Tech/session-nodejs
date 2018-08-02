var fs = require('fs')
var fecha = Date.now()
var data = `Esto es la onda con Node.js \n ${fecha}`

var writer = fs.createWriteStream(`${fecha}-output.txt`)
writer.write(data, 'UTF8')
writer.end()

writer.on('finish', function () {
  console.log('TERMINE')
})

writer.on('error', function (err) {
  console.log(err.stack)
})
