class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int idx=nums.front(),idxCount=0;
        unordered_map <int,int> hm;
        for (auto i : nums){
            if (hm[i]==NULL){
                hm[i]=1;
            }else {
                hm[i]++;
            }
        }
        
        for (auto i : nums){
            if(hm[i]>idxCount){
                idx=i;
                idxCount=hm[i];
            }
        }
        return idx;
    }
};