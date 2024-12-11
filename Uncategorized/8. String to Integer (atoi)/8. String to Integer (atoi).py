class Solution:
    def myAtoi(self, s: str) -> int:
        isNegative,f = False,False
        answer = ""
        if len(s)==1:
            if s.isdigit():
                return int(s)
            return 0
        for i in range(len(s)):
            if s[i].isdigit():
                f=True
                answer+=s[i]
            else:
                f=False
            if answer!="":
                if f:
                    continue
                break
            else:
                if s[i]!='-' and s[i]!=' ' and s[i]!='+':
                    return 0
                if i!=0:
                    if s[i-1]!=' ':
                        return 0
            if i < len(s)-1:
                if s[i+1].isdigit() and s[i]=='-':
                    isNegative=True
        if answer=="":
            return 0
        if int(answer)>=2**31:
            return ((2**31)*(-1)) if isNegative else (2**31)-1          
        return (int(answer))*(-1) if isNegative else int(answer) 