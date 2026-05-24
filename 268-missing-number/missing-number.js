/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {
    let obj = {};
        let sum = 0;
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    let total = n * (n + 1) / 2;
    return total - sum;
};