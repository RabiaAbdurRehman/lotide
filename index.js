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
    head: head,
    tail: tail,
    middle: middle,
    eqArrays: eqArrays,
    assertEqual: assertEqual,
    assertArrayEqual: assertArrayEqual,
    without: without,
    flatten: flatten,
    countOnly: countOnly,
    countLetters: countLetters,
    letterPositions: letterPositions,
    findKeyByValue: findKeyByValue,
    eqObject: eqObject,
    assertObjectEqual: assertObjectEqual,
    map: map,
    takeUntil: takeUntil,
    findKey: findKey
}