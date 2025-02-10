/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    for (let num1 of nums) {
        for (let j = i+1; j < nums.length; j++) {
            if ((num1 + nums[j]) === target) return [i, j];
        }
        i++;
    }
};

let numeros = [3, 2, 4, 5, 78, 100, 23, 12];

console.log(twoSum(numeros, 178));