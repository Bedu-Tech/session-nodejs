function loquesigue () {
  console.log('HOLA!')
  console.log('timer finished')
}

const timeout = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(loquesigue, delay)
  })
}

// async/await 
function timer () {
  console.log('timer started')
  timeout(100)
}

timer()
