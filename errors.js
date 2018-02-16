const errors = {
    'NO_ERR' : 'Malformed error. No error was provided.',
    'NODE_CODE' : 'Malformed error. Code provided does not correspond to any error.',

    'FIELD_MISSING' : 'A required field is missing.',
    'FIELD_TOO_LONG' : 'Field max character limit exceeded.',
    'FIELD_NOT_ALPHANUM' : 'Field must be alphanumeric.',
    'FIELD_PASS_WEAK' : 'Password entered is too weak.',
    'FIELD_USERNAME_TAKEN' : 'Username entered is already taken.',

    'DB_ERROR' : 'Uncaught database error.',
}

module.exports = errors;