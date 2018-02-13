# Thrower
[![codecov](https://codecov.io/gh/hectotruj/thrower/branch/master/graph/badge.svg)](https://codecov.io/gh/hectotruj/thrower)

Throwing errors gets messy, and, more often than not, is not uniform. We aim to solve the error problem. 
## Installation
```
npm install thrower --save
```

## Usage

```js
const thrower = require('thrower');

insertName(name) {
    if(name.length > 10) thrower.r(1101)
    .
    .
    .
}
```