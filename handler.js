'use strict'

const currency = require('./lib/currency')
const sendEmail = require('./lib/sendEmail')
const config = require('config')

module.exports.sendCurrencyEmail = (event, context, callback) => {
  currency()
    .then((data) => {
      return sendEmail(config.get('toEmail'), config.get('fromEmail'), data[Object.keys(data)[0]])
    })
    .then(() => {
      callback(null, { success: true })
    })
    .catch((error) => {
      callback(error, { success: false })
    })
}
