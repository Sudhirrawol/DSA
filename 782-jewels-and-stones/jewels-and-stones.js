/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(value, str) {
        let count = 0
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < value.length; j++) {
            if (str[i] === value[j]) {
                count++;
            }
        }
    }
    return count;
};