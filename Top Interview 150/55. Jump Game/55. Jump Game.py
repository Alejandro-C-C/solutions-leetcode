class Solution:
    def canJump(self, nums: List[int]) -> bool:
        p=0
        if len(nums)==1:
            return True
        for _ in range(len(nums)-1):
            if _ > p:
                return False
            if _ + nums[_]>=len(nums)-1:
                return True
            p=max(_+nums[_],p)
        return False