const thrower = require('./main')
const _ = require('lodash')
let methods = {
    rIsMissing: (param) => {
        if(_.isEmpty(param)) thrower.r('FIELD_MISSING')
    }
}

module.exports = methods;
