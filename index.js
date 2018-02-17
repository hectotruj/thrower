const errors = require('./errors')
const main = require('./main')
const methods = require('./methods')
const _ = require('lodash')
let thrower = {
    get: main.get,
    r: main.r,
    rIsMissing : methods.rIsMissing
}

module.exports = thrower;
