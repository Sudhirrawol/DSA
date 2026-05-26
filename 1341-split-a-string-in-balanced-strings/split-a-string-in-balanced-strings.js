/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(str) {
        let balance = 0
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "R") {
            balance += 1
        }
        else {
            balance--

        }
        if (balance === 0) {
            count++
        }
    }
    return count
};