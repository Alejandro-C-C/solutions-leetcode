class Solution:
    def intToRoman(self, num: int) -> str:
        result=""
        
        if num>=1000:
            m="M"*(num//1000)
            num-=1000*(num//1000)
            result+=m
        if num >= 100:
            if num//100==9:
                c="CM"
            elif num//100>=5:
                c="D"+("C"*((num//100)-5))
            elif num//100==4:
                c="CD"
            else :
                c=("C"*(num//100))
            num-=100*(num//100)
            result+=c
        if num >= 10:
            if num//10==9:
                d="XC"
            elif num//10>=5:
                d="L"+("X"*((num//10)-5))
            elif num//10==4:
                d="XL"
            else:
                d="X"*(num//10)
            num-=10*(num//10)
            result+=d
        if num >= 1:
            if num==9:
                u="IX"
            elif num>=5:
                u="V"+("I"*((num)-5))
            elif num==4:
                u="IV"
            else:
                u="I"*(num)
            result+=u
        return result