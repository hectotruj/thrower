const errors = require('./errors')
const _ = require('lodash')
let thrower = {
    r: (error) => {
        if (_.isEmpty(error)) error = 'NO_ERR';
        if (_.isEmpty(errors[error])) error = 'NODE_CODE';
        throw { error: error, message: errors[error] };
    },
    get: (error) => {
        if (_.isEmpty(error)) error = 'NO_ERR';
        if (_.isEmpty(errors[error])) error = 'NODE_CODE';
        return errors[error];
    }
}

module.exports = thrower;
