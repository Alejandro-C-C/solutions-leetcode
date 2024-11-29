class Solution:
    def removeElement(self, nums: List[int], val: int):
        result=[i for i in nums if i!=val]
        nums.clear()
        nums.extend(result)
        return len(nums)