class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        r=0
        for i in range(len(s)-1,-1,-1):
            if s[i] !=' ':
                r+=1
            else:
                if r==0:
                    continue
                else:
                    break
        return r