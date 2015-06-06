'use strict'

var test = require('tape')
var accumulate = require('./')

test(function (t) {
  t.equal([0, 1, 2, 3].reduce(accumulate()), 6)
  t.equal(['0', '1', '2'].reduce(accumulate()), '012')
  t.deepEqual([[0, 1], [2, 3]].reduce(accumulate()), [0, 1, 2, 3])
  t.end()
})
