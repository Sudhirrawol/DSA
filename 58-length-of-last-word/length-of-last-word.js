/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(arr1) {
    let arr = arr1.trim()
         let j = 0;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            j = i + 1
        }

    }
    while (j < arr.length) {
        count++
        j++
    }
    return count

};