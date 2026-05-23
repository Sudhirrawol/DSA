/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
        let i = 0;
    let j = 0
    while (j < arr.length) {
        if (arr[j] !== 0) {
            arr[i] = arr[j]
            i++
        }
        j++
    }

    while (i < arr.length) {
        arr[i] = 0;
        i++;
    }
    return arr
};