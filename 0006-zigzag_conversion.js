/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    //Mal. No se respeta el zig zag
    
    let contadorLetrasAnadidas = 0;

    let salto = 2*(numRows - 1);

    let palabraEnZigZag = '';

    for (let i = 0; i < salto; i++) {
        for (let j = i; j < s.length; j += salto) {
            palabraEnZigZag += s[j] 
        }
    }

    return palabraEnZigZag;

};

console.log(convert('PAYPALISHIRING', 3));