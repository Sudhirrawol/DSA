/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  function reverse(start, end) {
    while (start < end) {
      //   console.log(start);
      //   console.log(end);
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      console.log(nums[start]);
      start++;
      end--;
      //   console.log(nums[end]);
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
  return nums;
};