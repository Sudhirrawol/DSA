/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let num1 = x;
let total = 0;
while (num1 > 0) {
  let last_digit = num1 % 10;
  //   console.log(last_digit);
  total = total * 10 + last_digit;
  num1 = Math.floor(num1 / 10);
}
return total === x
};