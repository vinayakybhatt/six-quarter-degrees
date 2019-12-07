const random = require("./src/RandomNumberGenerator");
const isNumber = require("./src/isNumber");
const objSize = require("./src/obj-size");
const onlyUnique = require("./src/OnlyUnique");
const sortAOB = require("./src/SortArrayOfObjects");
const formatter = require("./src/DateTimeFormatter");

// console.log('test from module');
module.exports = {
    Random: random,
    IsNumber: isNumber,
    ObjSize: objSize,
    OnlyUnique: onlyUnique,
    SortAOB: sortAOB,
    Date: formatter.date,
    Time: formatter.time
};
