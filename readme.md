# accumulate-values [![Build Status](https://travis-ci.org/bendrucker/accumulate-values.svg?branch=master)](https://travis-ci.org/bendrucker/accumulate-values) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/accumulate-values.svg)](https://greenkeeper.io/)

> Accumulate values via a reducer

## Install

```
$ npm install --save accumulate-values
```


## Usage

```js
var accumulate = require('accumulate-values')
;[0, 1, 2].reduce(accumulate()) // => 3
;['0', '1', '2'].reduce(accumulate()) // => '012'
;[[0, 1], [2, 3]].reduce(accumulate()) // => 6
```

## API

#### `accumulate()` -> `function`

Returns a function to be passed to [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). If the first item in the array is a number, future values are added to the initial value. If it is a string, future values are concatenated. If it is an array, future values are concatenated via `[].concat`.

## License

MIT © [Ben Drucker](http://bendrucker.me)
