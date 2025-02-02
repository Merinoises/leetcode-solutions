/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    //Si la longitud del array no es par, seguro que hay algún caracter mal
    if (s.length % 2 !== 0) return false;

    let parentesis = [];

    if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;

    for (let  i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') parentesis.push(s[i]);
        if (s[i] === ')') {
            if (parentesis[parentesis.length - 1] === '(') {
                parentesis.splice(parentesis.length - 1, 1);
            } else {
                return false;
            }
        }
        if (s[i] === '}') {
            if (parentesis[parentesis.length - 1] === '{') {
                parentesis.splice(parentesis.length - 1, 1);
            } else {
                return false;
            }
        }
        if (s[i] === ']') {
            if (parentesis[parentesis.length - 1] === '[') {
                parentesis.splice(parentesis.length - 1, 1);
            } else {
                return false;
            }
        }
    }

    if (parentesis.length === 0) return true;
    return false
};

let parentesis = '(((()))))'

console.log(isValid(parentesis));