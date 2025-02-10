/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length === 0) return 0;

    let longestSubstring = s[0];

    let substringCandidato = s[0];

    let inicioCuandoSeRepite = 0;
    
    for (let i = 1; i < s.length; i++) {
        let estaEnSubstring = false;
        for (let j = 0; j < substringCandidato.length; j++) {
            if (substringCandidato[j] === s[i]) {
                inicioCuandoSeRepite += j + 1;
                estaEnSubstring = true;
                break;
            }
        }
        if (!estaEnSubstring) {
            substringCandidato += s[i];
            if (longestSubstring.length < substringCandidato.length) longestSubstring = substringCandidato;
        } else {
            i = inicioCuandoSeRepite;
            substringCandidato = s[i];
        }
    }

    return longestSubstring.length;

};

let palabra = 'dvdf'

console.log(lengthOfLongestSubstring(palabra));