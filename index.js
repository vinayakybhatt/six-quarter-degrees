const random = require("./RandomNumberGenerator");
const isNumber = require("./isNumber");
const button = require("./component");


console.log('test from module');
module.exports = {
    Random: random,
    IsNumber: isNumber,
    Tag: button
};
