'use strict'

var isArray = require('isarray')

module.exports = function createReducer () {
  var array
  return function reducer (previous, current, index) {
    if (array == null) array = isArray(previous)
    if (array) return previous.concat(current)
    return previous + current
  }
}
