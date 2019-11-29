const random = require("./RandomNumberGenerator");
const isNumber = require("./isNumber");


console.log('test from module');
module.exports = {
    Random: random,
    IsNumber: isNumber,
};
