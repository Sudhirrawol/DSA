/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
     let i = 0
    let count = 0
    let maxCount = 0;
    while (i < arr.length) {
        if (arr[i] === 1) {
            count = count + 1
            if (count > maxCount) {
                maxCount = count
            }
        }
        else {
            count = 0
        }
        i++
    }
    return maxCount
}
