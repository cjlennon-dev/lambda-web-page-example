'use strict'

// require node core modules
let fs = require('fs')
let path = require('path')
 
// module entry point
exports.handler = (event, context, callback) => {

  console.log('received event ' + JSON.stringify(event))

  let filePath = path.join(__dirname, 'page.html')
  let html = fs.readFileSync(filePath).toString()

  sendHtmlResponse(context, 200, html)

}

// output html to AWS Lambda context object
function sendHtmlResponse(context, statusCode, html) {
  let response = {
    'statusCode': statusCode,
    'headers': {
      'Content-Type': 'text/html'
    },
    'body': html
  }
  console.log(`Lambda exits.  HTML response sent with status code ${statusCode}`)
  context.succeed(response)
}
