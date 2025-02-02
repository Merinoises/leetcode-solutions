/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let chequeo = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length) {
            if (nums[i] <= nums[0]) chequeo++;
        }
        if (i !== nums.length)  {
            if (nums[i] <= nums[i + 1]) chequeo++;
        }
    }

    if (chequeo === nums.length || chequeo === nums.length - 1) return true;
    
    return false;
};