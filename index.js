const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
const assertArrayEqual = require('./assertArraysEqual')
const without = require('./without')
const flatten = require('./flatten')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const letterPositions = require ('./letterPositions')
const findKeyByValue = require('./findKeyByValue')
const eqObject = require('./eqObjects')
const assertObjectEqual = require('./assertObjectsEqual')
const map = require('./map')
const takeUntil = require('./takeUntil')
const findKey = require('./findKey')

module.exports = {
    head,
    tail,
    middle,
    eqArrays,
    assertEqual,
    assertArrayEqual,
    without,
    flatten,
    countOnly,
    countLetters,
    letterPositions,
    findKeyByValue,
    eqObject,
    assertObjectEqual,
    map,
    takeUntil,
    findKey
}