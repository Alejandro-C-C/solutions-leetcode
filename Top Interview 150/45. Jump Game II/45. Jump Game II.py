class Solution:
    def jump(self, nums) -> int:
        aux= 0 
        nj = 0 
        m = 0 
        for i in range(len(nums)):
            if m>=len(nums)-1:
                break
            aux = max(aux,i+nums[i]) 
            if i==m: 
                nj+=1 
                m = aux 
        return nj