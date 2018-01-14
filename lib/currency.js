const request = require('request')
const config = require('config')
const url = `http://api.fixer.io/latest?base=${config.get('baseSymbol')}&symbols=${config.get('symbol')}`

const getRate = () => {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) {
        reject(error)
      }

      if (body) {
        resolve(JSON.parse(body))
      }
    })
  })
}

module.exports = getRate
