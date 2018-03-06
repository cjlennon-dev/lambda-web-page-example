'use strict'

// require node core modules
let fs = require('fs')
let path = require('path')

class mockContext {
  constructor(isMock = true, fileName = 'mocked-response', saveResponse = true) {
    this._isMock = isMock
    this._fileName = fileName
    this._saveResponse = saveResponse
  }

  get isMock() {
    return this._isMock
  }

  succeed(response) {

    if (this._saveResponse) {
      if (response.headers && response.headers['Content-Type'] && response.headers['Content-Type'].includes('/')) {
        let responseType = response.headers['Content-Type'].split('/')[1]
        let fileName
        if (responseType.toLowerCase() === 'html') {
          fileName = this._fileName + '.html'
        } else if (responseType.toLowerCase() === 'json') {
          fileName = this._fileName + '.json'
        } else {
          return console.log('no file written (Content-Type was not html or json)')
        }
        let filePath = path.join(__dirname, fileName)
        fs.writeFileSync(filePath, response.body)
        // console.log('======================')
        console.log(`The (mock) response has been saved to "${filePath}"`)
        // console.log('======================')
      }
    }
  }

}

// public entry point
module.exports = mockContext // export the mockContext class
