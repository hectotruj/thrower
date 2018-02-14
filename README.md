# Thrower
[![codecov](https://codecov.io/gh/hectotruj/thrower/branch/master/graph/badge.svg)](https://codecov.io/gh/hectotruj/thrower) [![Build Status](https://travis-ci.org/hectotruj/thrower.svg?branch=master)](https://travis-ci.org/hectotruj/thrower)

Simplify throwing errors, write cleaner code, make testing a breeze. Plus, its fun to use: `thrower.r()`... get it? Throw Err. That's right. It's useful and it fun. 

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