/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let i = nums.length - 1;

    while (i >= 0) {
        let leftSq = Math.abs(nums[left]);
        let rightSq = Math.abs(nums[right]);

        if (leftSq > rightSq) {
            result[i] = leftSq * leftSq;
            left++;
        } else {
            result[i] = rightSq * rightSq;
            right--;
        }
        i--;
    }
    return result;
};