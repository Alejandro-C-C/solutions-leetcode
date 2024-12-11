class Solution:
    def reverse(self, x: int) -> int:
        number = str(x)
        if number[0]=='-':
            isNegative=True
            number=number[1:]
        else:
            isNegative=False
        number=number[::-1]
        x=int(number)
        if x >= 2**31:
            return 0
        return x*(-1) if isNegative else x 