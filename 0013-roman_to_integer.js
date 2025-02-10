/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let suma = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i+1] !== 'V' && s[i+1] !== 'X') {
            suma += 1;
            continue;
        } else if (s[i] === 'I' && s[i+1] === 'V') {
            suma += 4;
            i++;
            continue;
        } else if (s[i] === 'I' && s[i+1] === 'X') {
            suma += 9;
            i++;
            continue;
        }

        if (s[i] === 'V') {
            suma += 5;
            continue;
        }

        if (s[i] === 'X' && s[i+1] !== 'L' && s[i+1] !== 'C') {
            suma += 10;
            continue;
        } else if (s[i] === 'X' && s[i+1] === 'L') {
            suma += 40;
            i++;
            continue;
        } else if (s[i] === 'X' && s[i+1] === 'C') {
            suma += 90;
            i++;
            continue;
        }

        if (s[i] === 'L') {
            suma += 50;
            continue;
        }

        if (s[i] === 'C' && s[i+1] !== 'D' && s[i+1] !== 'M') {
            suma += 100;
            continue;
        } else if (s[i] === 'C' && s[i+1] === 'D') {
            suma += 400;
            i++;
            continue;
        } else if (s[i] === 'C' && s[i+1] === 'M') {
            suma += 900;
            i++;
            continue;
        }

        if (s[i] === 'D') {
            suma += 500;
            continue;
        }

        if (s[i] === 'M') {
            suma += 1000;
            continue;
        }

    }
    return suma;
};

let romano = 'DCXXI';

console.log(romanToInt(romano));
console.log(romano);