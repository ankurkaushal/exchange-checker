const aws = require('aws-sdk')
const ses = new aws.SES({
  apiVersion: '2010-12-01'
})

const sendEmail = (to, from, body) => {
  const params = {
	    Destination: {
	      ToAddresses: [to]
	    },
	    Message: {
	      Body: {
	        Html: {
	          Charset: 'UTF-8',
	          Data: body
	        },
	        Text: {
	          Charset: 'UTF-8',
	          Data: body
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

  	return new Promise((resolve, reject) => {
  		ses.sendEmail(params, (err, data) => {
		    if (err) {
		    	reject(err)
		    }

		    if (data) {
		    	resolve(data)
		    }
  		})
  	})
}

module.exports = sendEmail
