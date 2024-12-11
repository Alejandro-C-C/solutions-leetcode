class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        k%=len(nums)
        c=nums[0:len(nums)-k]
        c1=nums[len(nums)-k:]
        nums.clear()
        nums.extend(c1+c)