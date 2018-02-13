const errors = {
    1000 : 'Malformed error. No error was provided.',
    1001 : 'Malformed error. Please use an integer for an error code.',
    1002 : 'Malformed error. Code provided does not correspond to any error.',

    1100 : 'A required field is missing.',
    1101 : 'Field max character limit exceeded.',
    1102 : 'Field must be alphanumeric.',
    1103 : 'Password entered is too weak.',
    1104 : 'Username entered is already taken.',

    1200 : 'Uncaught database error.',
}

/**
 * 1000-1099 - Malformed Error
 * 1100-1199 - Field error.
 * 1200-1299 - Database error.
 */


module.exports = errors;