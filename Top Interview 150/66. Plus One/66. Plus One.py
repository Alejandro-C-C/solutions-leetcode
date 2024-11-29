class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        rest=(digits[len(digits)-1]+1)
        if rest>=10:
            rest=1
            digits[len(digits)-1]=0
            for _ in range(len(digits)-2,-1,-1):
                digits[_]+=rest
                if digits[_]==10:
                    rest=1
                    digits[_]=0
                else:
                    rest=0
                    break
            if rest==1:
                digits[0]=0
                digits.insert(0,1)
        else:
            digits[len(digits)-1]+=1
        return digits