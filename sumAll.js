const sumAll = function(a, b) {
    let acumulation = 0;
    if (a < b && a >= 0 && b >= 0){
    for (let i = a; i <= b; i++) {
        acumulation += i;
    }
    return acumulation;
    } else if (a > b && a >= 0 && b >= 0){
        for (let i = b; i <= a ; i++) {
            acumulation += i;
        }
        return acumulation;
    } else if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number'){
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
