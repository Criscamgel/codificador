const json = require('./assets/json.json');
let base = 2;
let sumTemp; /* Suma temporal dos ultimas posiciones */
let temp = []; /* arreglo temporal Últimas dos posiciones */
let tempJson = [];/* Nuevo Arreglo despues de eliminar el remanente */
let size = 5;
let matrix = new Array(size);

/* Igualación de la Matrix */
matrix[0] = json;

console.log("----------------------------");

for (let index = 0; index < matrix.length; index++) {

    console.log(index);
    
    
    temp = matrix[index].slice(-1 * base);
    console.log(temp, "temp");
    sumTemp = temp.reduce(function(temp, b) { return temp + b; }, 0);
    tempJson = json.slice(0, base * -1);
    tempJson.push(sumTemp);
    tempJson.sort();
    matrix.push(tempJson);    

}

console.log(matrix, "matrix");
