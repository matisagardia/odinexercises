const reverseString = function(str) {
    let strToArray = str.split('');
    reversed = strToArray.reverse();
    stringed = reversed.join('');
    return stringed;
};

// Do not edit below this line
module.exports = reverseString;
