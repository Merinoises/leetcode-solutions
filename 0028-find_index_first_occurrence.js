/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) break;
            if (j === needle.length - 1) return i;
        }
    }

    //Implementación que usa el método includes para strings
    // if (haystack.includes(needle)) {
    //     return haystack.indexOf(needle);
    // }
    // return -1;

    return -1;

    
};

console.log(strStr('palabra', 'bro'));