'use strict'

const moment = require('moment');
const CryptoJS = require('crypto-js');

const restaurants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const totalIterations = 100000;

const getDayValue = (date) => {
    const reducer = (prev, cur) => prev + cur.codePointAt(0);
    return CryptoJS.SHA1(date.toISOString()).toString().split('').reduce(reducer, 0);
};

const result = Array(totalIterations)
    .fill()
    .map((a, i) => getDayValue(moment().startOf('day').add(i, 'day')) % restaurants.length)
    .reduce((acc, cur) => (acc[restaurants[cur]] = ++acc[restaurants[cur]] || 1) && acc, {});

const standartDeviation = Object.keys(results)
    .map(key => results[key])
    .reduce((prev, cur) => prv + cur, 0);

console.log(`A: ${result.A}`);
console.log(`B: ${result.B}`);
console.log(`C: ${result.C}`);
console.log(`D: ${result.D}`);
console.log(`E: ${result.E}`);
console.log(`F: ${result.F}`);
console.log(`G: ${result.G}`);
console.log(`H: ${result.H}`);
console.log(`I: ${result.I}`);
