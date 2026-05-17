/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        let sign = 1;
    let sum = 0;
    if (x < 0) {
        sign = -1
        x = x * -1;
    }
    while (x > 0) {
        let digit = x % 10;
        sum = sum * 10 + digit;
        x = Math.floor(x / 10);
    }
    sum = sign * sum
    if(sum < -(2**31) || sum > (2**31)-1){
        return 0
    }
    return sum
};