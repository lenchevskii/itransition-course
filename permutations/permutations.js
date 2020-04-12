'use strict'

const { head, noop }  = require('lodash')
const args            = process.argv.slice(2)

const compose         = (...fns) => (x) => fns.reduce((y, f) => f(y), x)
const hasDuplicates   = (arr) => arr.some((item) => arr.indexOf(item) != arr.lastIndexOf(item))

const sortInside      = (arr) => arr.map((x) => x.split('').sort().join(''))

const checkAll        = (arr) => hasDuplicates(arr) ? repeatables(arr) : Array([0])

const repeatables     = (arr)   => arr.map((x) => arr.map((elem, index) => elem === x ? index : noop())
                                              .filter(z => z != undefined))
                                            .filter(list => list.length > 1)

const getMaxOf2dArray = (arr) => arr.reduce((max, p) => p.length > max.length ? p : max, head(arr))

const getElemsByArray = (arr) => arr.map(x => args[x])

const prettyPrint     = (arr) => arr.map(x => x != undefined ? console.log(x) : noop())

const permutations    = compose(sortInside, checkAll, getMaxOf2dArray, getElemsByArray, prettyPrint)

permutations(args)