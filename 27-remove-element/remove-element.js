/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {
      let i = 0;
    let j = 0;
    while (j < arr.length) {
        if (arr[j] !== val) {
            arr[i] = arr[j]
            i++
        }
        j++
    }
    return i
};