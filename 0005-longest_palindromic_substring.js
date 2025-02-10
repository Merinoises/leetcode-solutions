/**
 * @param {string} s
 * @return {string}
 */

// const longestPalindrome = s => {
//     if (s.length == 1 || s.length == 0)
//         return s

//     let start = 0, end = 0

//     const checkPalindrome = (arr, index) => {
//         if (index === arr.length) return
//         let left = index, right = index, n = arr.length

//         while (right < n - 1 && arr[right] === arr[right + 1])
//             right++

//         index = right
//         while (left > 0 && right < n - 1 && arr[right + 1] === arr[left - 1]) {
//             right++
//             left--
//         }

//         if (right - left > end - start) {
//             start = left
//             end = right
//         }

//         checkPalindrome(arr, index + 1)
//         return arr
//     }

//     checkPalindrome(s.split(''), 0)
//     return s.substring(start, end + 1)
// }

var longestPalindrome = function(s) {

    let palindromoMasLargo = s[0];

    for (let i = 0; i < s.length - 1; i++) {
        for (j = i +1; j < s.length; j++) {
            
            if (s[i] === s[j]) {
                let esPalindromo = true;
                let idxi = i;
                let idxj = j;
                while (idxj > idxi) {
                    if (s[idxi] !== s[idxj]) {
                        esPalindromo = false;
                        break;
                    }
                    idxi++;
                    idxj--;
                }
                if (esPalindromo) {
                    let palindromoEncontrado = s.substring(i, j+1);
                    if (palindromoMasLargo.length < palindromoEncontrado.length) palindromoMasLargo = palindromoEncontrado;
                }
                
            }
        }
    }

    return palindromoMasLargo;
};

let ese = "abdkacc";

console.log(longestPalindrome(ese));