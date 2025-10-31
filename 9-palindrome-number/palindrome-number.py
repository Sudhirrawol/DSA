class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        num1 = x
        total =0
        while num1 > 0:
            last_digit = num1%10
            total = (total *10 )+last_digit
            num1 = num1 // 10

        return total == x
