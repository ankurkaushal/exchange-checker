# Exchange Checker

Check exchange rate for your home country often? Exchange Checker is a simple lambda function that you can configure to send you the exchange rate for your home daily or however you want to customize.

## Prerequisites

You would need `node` version `>=6.10`.

## Installing

Simply install the dependencies using `npm i`

## Configuration

You can set the email to send from & email to send to in `config/default.json` as well as the `baseSymbol` & `symbol` for the currency.

By default, the lambda function is configured to send the email at 6pm EST. You can set the timing in `serverless.yml` by modifying `schedule: cron(00 23 * * ? *)`.  Since AWS lambda only accepts time in UTC, you may need to convert the time from any timezone to UTC.

## Deployment

Before the deployment, make sure you have your AWS credentials setup.

To deploy the function, you can simply issue the following command:

`serverless deploy`

## Running the tests

Tests can be run by running command `npm run test`
