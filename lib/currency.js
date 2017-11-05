const request = require('request')
const url = 'http://api.fixer.io/latest?base=CAD&symbols=INR'

const getRate = () => {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject(error)
      }

      if (body) {
        resolve(body)
      }
    })
  })
}

module.exports = getRate
