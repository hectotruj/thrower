const errors = require('./errors')
const _ = require('lodash')
let thrower = {
    r: (error, message = '') => {
        if (_.isEmpty(error)) error = 'NO_ERROR';
        if (_.isEmpty(errors[error])) error = 'UNKNOWN_CODE';

        let details = ((new Error().stack).split("at ")[3]).trim();

        let toThrow = _.isEmpty(message) ? { error: error, description: errors[error], details: details } : { error: error, description: errors[error], details: details, message : message };
        throw toThrow;
    },
    get: (error) => {
        if (_.isEmpty(error)) error = 'NO_ERROR';
        if (_.isEmpty(errors[error])) error = 'UNKNOWN_CODE';
        return errors[error];
    }
}

module.exports = thrower;
