const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end) || start<0 || end<0) return "ERROR";
    if(end<start){
        let temp = start;
        start = end;
        end = temp;
    }
    let gauss1 = end*(end+1)/2;
    let gauss2 = start*(start+1)/2;
    return gauss1-gauss2+start;
};

// Do not edit below this line
module.exports = sumAll;
