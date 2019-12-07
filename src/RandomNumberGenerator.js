 //takes a number range in between which you want a random number ton be generated
 function randomNoGenerator(min, max) {
    if(typeof(max) !== 'number' && typeof(min) !== 'number') {
        min = 0;  max = 1;
    }
    return (Math.random() * (max-min)) + min;
}
 module.exports =  randomNoGenerator;