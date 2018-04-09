## Error Definitions

### Miscellaneous Errors

`ERROR`: There is an error with the application.
`IM_A_TEACUP` : I'm a teacup.
`NO_ERROR` : Malformed error. No error was provided.
`UNKNOWN_CODE` : Malformed error. Code provided does not correspond to any error.

### Authentication Errors

`AUTHENTICATION_ERROR` : User could not be authenticated.

`AUTHORIZATION_ERROR` : User is not authorized.
`INVALID_TOKEN_ERROR` : Token provided is not valid.
`EXPIRED_TOKEN_ERROR` : Token provided has expired.

### Database Errors

`DB_ERROR` : Uncaught database error.

`DB_UNABLE_TO_CONNECT` : Unable to open database connection.

### Field Errors

`FIELD_MISSING` : A required field is missing.

`FIELD_INVALID` : The field entered is not valid.
`FIELD_NOT_ALPHANUMERIC` : Field must be alphanumeric.
`FIELD_PASSWORD_WEAK` : Password entered is too weak.
`FIELD_TOO_LONG` : Field maximum character limit exceeded.
`FIELD_TOO_SHORT` : Field minimum character limit exceeded.
`FIELD_USERNAME_TAKEN` : Username entered is already taken.

### File Errors

`FILE_ERROR` : There is an error with the file.

`FILE_EXTENSION_UNSUPPORTED` : File extension is not supported.
`FILE_MISSING` : File does not exist.
`FILE_TOO_LARGE` : File is too large.