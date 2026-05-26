/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(str, k) {
        let arr = str.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp
            left++;
            right--
        }
    }
    return arr.join('')
};