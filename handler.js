'use strict'

const currency = require('./lib/currency')
const sendEmail = require('./lib/sendEmail')

module.exports.sendCurrencyEmail = (event, context, callback) => {
  currency()
    .then((data) => {
      return sendEmail('ankurkaushal@outlook.com', 'kaushank91@gmail.com', data.rates.INR)
    })
    .then(() => {
      callback(null, { success: true })
    })
    .catch((error) => {
      callback(error, { success: false })
    })
}
