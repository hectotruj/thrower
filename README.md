# Thrower
[![codecov](https://codecov.io/gh/hectotruj/thrower/branch/master/graph/badge.svg)](https://codecov.io/gh/hectotruj/thrower) [![Build Status](https://travis-ci.org/hectotruj/thrower.svg?branch=master)](https://travis-ci.org/hectotruj/thrower)

Simplify throwing errors, write cleaner code, make testing a breeze. Plus, its fun to use: `thrower.r()`... get it? Throw Err. That's right. It's useful and it fun. 
## Introduction

We feel errors have turned into more of a pain than a tool, and we want to fix that. Normally we write custom errors and then forget about them, or we wait for an indecipherable stack trace. The idea is: Find the error that best fits the condition you'd like to prevent and throw it when you meet the condition. Use and reuse errors.

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

throws:
 `{ error : 1101, message : 'Field max character limit exceeded.'}`

You don't have to throw our errors, you can use our messages and throw your own. For example:

```js
const thrower = require('thrower');

let message = thrower.get(1100)
// message => 'A required field is missing.'
```
