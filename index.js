const random = require("./RandomNumberGenerator");
const isNumber = require("./isNumber");
const objSize = require("./obj-size");

console.log('test from module');
module.exports = {
    Random: random,
    IsNumber: isNumber,
    ObjSize: objSize
};
