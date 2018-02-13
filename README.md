# Thrower
[![codecov](https://codecov.io/gh/hectotruj/thrower/branch/master/graph/badge.svg)](https://codecov.io/gh/hectotruj/thrower)

Throwing errors gets messy, and, more often than not, is not uniform. We aim to solve the error problem. 
## Installation
```
npm install thrower --save
```

## Usage
Pick the error code that best matches the error you would like to throw. For example:
```js
const thrower = require('thrower');

insertName(name) {
    if(name.length > 5) thrower.r(1101)
    .
    .
    .
}

insertName('Star Lord')
```

throws `{ error : 1101, message : 'Field max character limit exceeded.'}`