const errors = require('../errors')
const _ = require('lodash')
let thrower = {
    r: (error) => {
        if (!_.isInteger(error) && _.isEmpty(error)) error = 1000;
        if (!_.isInteger(error)) error = 1001;
        if (_.isEmpty(errors[error])) error = 1002;
        throw { error: error, message: errors[error] };
    },
    get: (error) => {
        if (!_.isInteger(error) && _.isEmpty(error)) error = 1000;
        if (!_.isInteger(error)) error = 1001;
        if (_.isEmpty(errors[error])) error = 1002;
        return errors[error];
    }
}

module.exports = thrower;
