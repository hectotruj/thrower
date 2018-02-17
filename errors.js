const errors = {
    'NO_ERR' : 'Malformed error. No error was provided.',
    'UNKNOWN_CODE' : 'Malformed error. Code provided does not correspond to any error.',

    'FIELD_MISSING' : 'A required field is missing.',
    'FIELD_TOO_LONG' : 'Field maximum character limit exceeded.',
    'FIELD_TOO_SHORT' : 'Field minimum character limit exceeded.',
    'FIELD_NOT_ALPHANUMERIC' : 'Field must be alphanumeric.',
    'FIELD_PASSWORD_WEAK' : 'Password entered is too weak.',
    'FIELD_USERNAME_TAKEN' : 'Username entered is already taken.',

    'DB_ERROR' : 'Uncaught database error.',
    'DB_UNABLE_TO_CONNECT' : 'Unable to open database connection.',

    'IM_A_TEACUP' : 'I\'m a teacup'
}

module.exports = errors;