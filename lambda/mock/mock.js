'use strict'

// require node core modules
let fs = require('fs')
let path = require('path')

// parse out the command argument passed to this module (if any)
let arg, event
process.argv.forEach(function (val, index, array) {
  if (val.startsWith('--')) {
    arg = val.replace('--', '')
  }
})

if (arg){
    // require event.json based on argument passed in
    let filePath = path.join(__dirname, `event-private-${arg}.json`)
    if (fs.existsSync(filePath)) {
      event = require(`./event-private-${arg}.json`)
    } else {
      event = require(`./event-public-${arg}.json`)
    }
} else {
    let filePath = path.join(__dirname, 'event-private.json')
    if (fs.existsSync(filePath)) {
      event = require('./event-private.json')
    } else {
      event = require('./event-public.json')
    }
}

// use mock context in place of actual AWS context
let MockContext = require('./mock-context.js')
let mockContext = new MockContext(true, 'mocked-response')

// make a call to our Lambda entry function
let index = require('../index.js')
index.handler(event, mockContext)
