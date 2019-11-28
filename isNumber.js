function isNumber(value) {
    if(typeof(value) !== 'number') {
        return false;
    }
    return true;
}
module.exports =  isNumber;