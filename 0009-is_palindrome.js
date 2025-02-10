/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numStr = x.toString();
  let i = 0;
  let j = numStr.length - 1;
  for (let i = 0; i < Math.floor(numStr.length/2); i++) {
    if (numStr[i] !== numStr[j]) return false;
    j--;
  }
  return true;   
};

let num = 1232;

console.log(isPalindrome(num));