/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    let sum = 0
    let c= x
    while (c > 0) {
        let digit = c % 10;
        sum = sum * 10 + digit;
        c = Math.floor(c / 10);

    }
    return sum===x|| c === Math.floor(sum / 10);

};