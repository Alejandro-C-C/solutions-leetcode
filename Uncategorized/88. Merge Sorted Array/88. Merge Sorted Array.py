class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int):
       result = list(sorted(nums1[:m]+nums2))
       nums1.clear()
       result.sort()
       nums1.extend(result)