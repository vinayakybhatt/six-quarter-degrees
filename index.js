const random = require("./RandomNumberGenerator");
const isNumber = require("./isNumber");
const objSize = require("./obj-size");
const onlyUnique = require("./OnlyUnique");
const sortAOB = require("./SortArrayOfObjects");
const formatter = require("./DateTimeFormatter");

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
