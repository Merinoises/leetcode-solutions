var NumberContainers = function () {
    this.container = new Map();
    this.numerosAIndices = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {

    if (this.container.has(index)) {
        const antiguoValor = this.container.get(index);
        this.container.set(index, number);
        //Eliminar el indice del array correspondiente al número antiguo
        this.numerosAIndices.set(antiguoValor, this.numerosAIndices.get(antiguoValor).filter(idx => idx !== index));
        if (this.numerosAIndices.get(antiguoValor).length === 0) this.numerosAIndices.delete(antiguoValor);
        //Añadir el número al array de indices
        if (!this.numerosAIndices.has(number)) {
            this.numerosAIndices.set(number, [index]);
        } else {
            this.numerosAIndices.get(number).push(index);
            this.numerosAIndices.get(number).sort((a, b) => a - b);
        }
    }

    if (!this.container.has(index)) {
        this.container.set(index, number);
        if (!this.numerosAIndices.has(number)) {
            this.numerosAIndices.set(number, [index]);
        } else {
            this.numerosAIndices.get(number).push(index);
            this.numerosAIndices.get(number).sort((a, b) => a - b);
        }
    }
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    if (this.numerosAIndices.has(number)) {
        return this.numerosAIndices.get(number)[0];
    }
    return -1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

var obj = new NumberContainers();
obj.change(1, 10);
console.log(obj.find(10));
obj.change(1, 20);
console.log(obj.find(10));
console.log(obj.find(20));
console.log(obj.find(30));