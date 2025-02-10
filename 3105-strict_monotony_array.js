/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let maxSubLength = 1;

    let contadorCrec = 1;
    let contadorDec = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i+1]) {
            contadorDec = 1;
            contadorCrec++;
            if (contadorCrec > maxSubLength) {
                maxSubLength = contadorCrec;
            }
        }
        if (nums[i] > nums[i+1]) {
            contadorCrec = 1;
            contadorDec++;
            if (contadorDec > maxSubLength) {
                maxSubLength = contadorDec;
            }
        }
        if (nums[i] === nums[i+1]) {
            contadorCrec = 1;
            contadorDec = 1;
        }
    }

    return maxSubLength;
};