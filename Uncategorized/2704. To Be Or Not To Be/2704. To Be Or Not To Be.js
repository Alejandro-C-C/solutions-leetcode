var expect = function(val) {
    return {
        toBe:function(a){
            
            if(a===val){
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe:function(a){
            
            if(a!==val){
                return true;
            }
            else {
                throw new Error("Equal");
            }
        }
    }
};