const _ = require('lodash');

const numbers = [1, 34, 45, 56, 78];

_.each(numbers, (number, i) => {
    console.log(number);
})