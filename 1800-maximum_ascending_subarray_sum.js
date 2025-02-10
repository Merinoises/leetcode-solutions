/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let suma = nums[0];

    let candidatoSuma = nums[0];

    for (i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i+1]) {
            candidatoSuma += nums[i+1]
            if (candidatoSuma > suma) suma = candidatoSuma;
        } else {
            candidatoSuma = nums[i + 1];
        }
    }

    return suma;
};


let numeros = [10, 9, 8, 7, 12];

console.log(maxAscendingSum(numeros));