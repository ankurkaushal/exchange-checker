const aws = require('aws-sdk')
const ses = new aws.SES({
  apiVersion: '2010-12-01'
})

const sendEmail = (to, from, message) => {
  const params = {
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: "Today's Exchange Rate: " + message
        },
        Text: {
          Charset: 'UTF-8',
          Data: "Today's Exchange Rate: " + message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: "Today's Exchange Rate"
      }
    },
    ReturnPath: from,
    Source: from
  }

  return ses.sendEmail(params).promise()
}

module.exports = sendEmail
