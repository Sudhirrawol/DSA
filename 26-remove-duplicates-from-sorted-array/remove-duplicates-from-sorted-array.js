/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
     let i = 0;
    let j = i + 1;

    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        j++
    }
    return i+1

};