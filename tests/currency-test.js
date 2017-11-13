const assert = require('chai').assert
const nock = require('nock')

const currency = require('../lib/currency')
const response = require('./currency-mock-response')

describe('Currency test', () => {
	before(() => {
		nock('http://api.fixer.io')
			.get('/latest?base=CAD&symbols=INR')
			.reply(200, response)
	})

	it('should receive a correct response', () => {
		return currency().then((data) => {
			assert.equal(data.rates.INR, 51.429)
		}).catch((error) => {
			assert.isNull(error)
		})
	})
})
