/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(arr, x) {
        let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(x)) {
            result.push(i)
        }
    }
    return result
};