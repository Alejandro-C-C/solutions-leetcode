class Solution {
public:
    bool isPalindrome(int x) {
        if (x<0) return false;
        else{
            string a=to_string(x),s=a;
            reverse(s.begin(),s.end());
            if(a==s) return true;
            return false;
        }
    }
};