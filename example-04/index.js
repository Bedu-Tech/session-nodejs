var fs = require('fs')

function leerArchivoAsincrona () {
  // Blocking
  var data = fs.readFileSync('index.html')
  console.log(data.toString())
  console.log('End')
}

function leerArchivoSincrona () {
  // Non-blocking
  var data = fs.readFile('index.html')
}

// leerArchivoAsincrona()
leerArchivoSincrona()