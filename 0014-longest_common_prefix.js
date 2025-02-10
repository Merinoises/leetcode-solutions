/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    //Encontrar la palabra de menor longitud
    let palabraMenor = strs[0];

    for (let palabra of strs) {
        if (palabraMenor.length > palabra.length) {
            palabraMenor = palabra;
        }
    }

    console.log(palabraMenor);

    //Comparar todas las palabras del array a las letras de palabra menor

    const restoPalabras = strs.filter(palabra => palabra !== palabraMenor);
    let prefComun = '';
    let terminar = false;

    console.log(restoPalabras);

    for (let i = 0; i < palabraMenor.length; i++) {
        for (let palabra of restoPalabras) {
            if (palabraMenor[i] !== palabra[i]) {
                terminar = true;
                break;
            }
        }
        if (terminar) break;
        prefComun += palabraMenor[i];
    }

    return prefComun;
};

let palabritas = ["capitalizar", "capitan", "capital", "capear"];

console.log(palabritas);
console.log(longestCommonPrefix(palabritas));

console.log("flotar".indexOf("flor"));