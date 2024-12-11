class Solution:
    def trailingZeroes(self, n: int) -> int:
        count=0
        power=5
        while n >= power:
            count += n // power
            power *= 5
        return count