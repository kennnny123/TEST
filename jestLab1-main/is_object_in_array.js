function isPresent(array, object){
    var i;
    for (i = 0; i < array.length; i++) {
        if (array[i] === object) {
            return true;
        }
    }

    return false;
}
module.exports = isPresent;
