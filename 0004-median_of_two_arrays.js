/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let listaOrdenada = [];

    while (0 < nums1.length && 0 < nums2.length) {
        
        if (nums1[0] <= nums2[0]) {
            listaOrdenada.push(nums1[0]);
            nums1.splice(0,1);
        }

        if (nums1[0] >= nums2[0]) {
            listaOrdenada.push(nums2[0]);
            nums2.splice(0,1);
        }
    }

    if (nums1.length === 0) {
        listaOrdenada = listaOrdenada.concat(nums2);
    }

    if (nums2.length === 0) {
        listaOrdenada = listaOrdenada.concat(nums1);
    }

    if (listaOrdenada.length % 2 === 0) {
        let mitad = Math.floor(listaOrdenada.length/2);
        let median = (listaOrdenada[mitad] + listaOrdenada[mitad - 1])/2;
        return median
    } else {
        let mitad = Math.floor(listaOrdenada.length/2);
        let median = parseFloat(listaOrdenada[mitad]);
        return median
    }
};

let nume1 = [1,2];
let nume2 = [3,4];

console.log(findMedianSortedArrays(nume1, nume2));