class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        result=[]
        for _ in nums:
            if _ not in result:
                result.append(_)
        nums.clear()         
        nums.extend(result)
        return len(result)