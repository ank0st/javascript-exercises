const removeFromArray = function(arr, ...unwanted) {
    return arr.filter((val) => !unwanted.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
