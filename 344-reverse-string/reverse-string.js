/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
        i++;
        j--

    }
    return arr
};