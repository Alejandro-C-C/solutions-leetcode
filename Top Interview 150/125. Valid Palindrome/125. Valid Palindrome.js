var isPalindrome = function(s) {
    let ls = s.replace(/[^a-zA-Z0-9]/g, "");;
    return ls.toLowerCase()===ls.split("").reverse().join("").toLowerCase()?true:false; 
};