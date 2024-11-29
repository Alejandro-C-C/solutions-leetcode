class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        k%=nums.size();
        vector<int>c,c1;
        for(int i = 0; i < nums.size()-k;i++){
            c.push_back(nums[i]);
        }
        for(int i = nums.size()-k; i < nums.size();i++){
            c1.push_back(nums[i]);
        }
        nums.clear();
        nums.insert(nums.end(),c1.begin(),c1.end());
        nums.insert(nums.end(),c.begin(),c.end());
    }
};