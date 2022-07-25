const removeFromArray = function(array, ...para) {

    for (let i = 0; i < para.length; i++) {
        let position = array.indexOf(para[i]);
        if(position > -1){
        array.splice(position, 1);
        } else {
            array.splice(position, 0);
        }
    }  
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
