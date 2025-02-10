/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {

    const mapaMultiplicacionesDePares = new Map();

    let numTuplas = 0;

    //Esta es una solución pero toma demasiado tiempo en computar

    // for (let a = 0; a < nums.length - 3; a++) {
    //     for (let b = a + 1; b < nums.length - 2; b++) {
    //         for (let c = b + 1; c < nums.length - 1; c++) {
    //             for (let d = c + 1; d < nums.length; d++) {
    //                 if (nums[a]*nums[b] === nums[c]*nums[d]) numTuplas += 8;
    //                 if (nums[a]*nums[c] === nums[b]*nums[d]) numTuplas += 8;
    //                 if (nums[a]*nums[d] === nums[c]*nums[b]) numTuplas += 8;
    //             }
    //         }
    //     }
    // }

    //Esta es otra solución utilizando un mapa

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (!mapaMultiplicacionesDePares.has(nums[i]*nums[j])) {
                mapaMultiplicacionesDePares.set(nums[i]*nums[j], 1)
            } else {
                mapaMultiplicacionesDePares.set(nums[i]*nums[j], mapaMultiplicacionesDePares.get(nums[i]*nums[j]) + 1);
            }
        }
    }

    for (let [clave, valor] of mapaMultiplicacionesDePares) {
        if (valor > 1) numTuplas += 4*(valor*(valor - 1));
    }

    return numTuplas;
};

console.log(tupleSameProduct([2,3,4,6]));