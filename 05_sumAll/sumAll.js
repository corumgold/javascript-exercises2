const sumAll = function (firstNum, lastNum) {
    let total = 0;
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR';
    } else if (typeof firstNum != 'number' || typeof lastNum != 'number') {
        return 'ERROR';
    } else if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            total += i;
        } return total;
    } else if (firstNum > lastNum) {
        for (let i = lastNum; i <= firstNum; i++) {
            total += i;
        } return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
