var divide = function(dividend, divisor) {
    let division = dividend/divisor;
    let limit=division>=0?Math.pow(2,31)-1:Math.pow(2,31)*(-1);
    return Math.abs(division)>=Math.pow(2,31)?limit:parseInt(division);
};