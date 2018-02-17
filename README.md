# Thrower
[![Build Status](https://travis-ci.org/hectotruj/thrower.svg?branch=master)](https://travis-ci.org/hectotruj/thrower)
[![codecov](https://codecov.io/gh/hectotruj/thrower/branch/master/graph/badge.svg)](https://codecov.io/gh/hectotruj/thrower) 

Simplify throwing errors, write cleaner code, make testing a breeze. Plus, its fun to use: `thrower.r()`... get it? Throw Err. That's right. It's useful and it fun. 
## Introduction

We feel errors have turned into more of a pain than a tool, and we want to fix that. Normally we write custom errors and then forget about them, or we wait for an indecipherable stack trace. The idea is: Find the error that best fits the condition you'd like to prevent and throw it when you meet the condition. Use and reuse errors.

## Installation
```
npm install thrower --save
```

## Usage
[Error Definitions](https://hectotruj.gitbooks.io/thrower/content/error-codes.html)

Pick the error code that best matches the error you would like to throw. For example:

### thrower.r(error : string, message? : string)
```js
const thrower = require('thrower');
insertName(name) {
    if(name.length > 5) thrower.r('FIELD_TOO_LONG')
    ...
}

insertName('Star Lord')
/**
 * throws => 
 * { 
 *    error : 'FIELD_TOO_LONG, 
 *    description : 'Field max character limit exceeded.', 
 *    details : 'at insertName(/home/example/index.js:3:10)'
 * }
 * /
 
```

or

 ```js
const thrower = require('thrower');
const MAX_FIELD_LENGTH = 5
insertName(name) {
    if(name.length > MAX_FIELD_LENGTH) 
        thrower.r('FIELD_TOO_LONG', `Name must be less than ${MAX_FILED_LENGTH} chars.`)
    ...
}

insertName('Star Lord')
/**
 * throws => 
 * { 
 *    error : 'FIELD_TOO_LONG, 
 *    description' : 'Field max character limit exceeded.', 
 *    details : 'at insertName(/home/example/index.js:5:10)', 
 *    message : 'Name must be less than 5 chars.'
 * }
 * /
 
```

### thrower.get(error : string)
You don't have to throw our errors, you can use our description and throw your own. For example:

```js
const thrower = require('thrower');

let description = thrower.get('FIELD_MISSING')
// description => 'A required field is missing.'
```

## Constributions
Tell us how we can do better!

We love our community. We are not perfect and we don't aim to be, but we do aim to provide a tool our community loves. Feel free to open an issue to suggest new codes and definitions or methods. 