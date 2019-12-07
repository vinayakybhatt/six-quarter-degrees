//takes a value which you want to know if it is number or not.
function isNumber(value) {
    if(typeof(value) !== 'number') {
        return false;
    }
    return true;
}
module.exports =  isNumber;