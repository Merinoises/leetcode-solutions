/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;

    for (let i = 0; i < s2.length - 1; i++) {
        for (let j = i + 1; j < s2.length; j++) {
            let palabraCambiada = s2.split('');
            [palabraCambiada[i], palabraCambiada[j]] = [palabraCambiada[j], palabraCambiada[i]];
            if (palabraCambiada.join('') === s1) return true;
        }
    }

    return false;
};

console.log(areAlmostEqual('antonoi', 'antonio'));