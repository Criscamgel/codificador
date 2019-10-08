/* const {crearTabla} = require('./multiplicar/multiplicar'); */
/* crearTabla(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`)); */
    let base = 2;
    const json = [
        0.4,
        0.2,
        0.1,
        0.1,
        0.05,
        0.05,
        0.05,
        0.05
    ];

    /* const json = [
        0.3,
        0.4,
        0.3
    ]; */
let sumTemp; /* Suma temporal dos ultimas posiciones */
let temp = [];
let tempX = new Array(0); /* arreglo temporal Últimas dos posiciones */
let tempJson = [];/* Nuevo Arreglo despues de eliminar el remanente */
let matrix = new Array(0);/* Matrix que alojará todas las operaciones*/
let binario = new Array(0); /* Matriz que alojará el codigo binario */

/* Igualación de la Matrix */
matrix[0] = json;

console.log("----------------------------");


        for (let index = 0; index < matrix.length; index++) {
            if(matrix[index].length !== 2){
            sumTemp = '';    
            /* Dos posiciones temporales */
            temp = matrix[index].slice(-1 * base);
            /* Añadiendo a la matrix de codificación */
            tempX.push(temp);
            /* Suma del remanente, convierte a decimal de dos posiciones */
            sumTemp = parseFloat(temp.reduce(function(temp, b) { return temp + b; }, 0).toFixed(2));
            console.log(sumTemp);          
            /* Añadiendo la suma a la matriz de codificación */
            tempX[index].push(sumTemp + 0.001);
            /* Quitando dos posiciones del arreglo  general y dejandolas en uno nuevo */
            tempJson = matrix[index].slice(0, base * -1);
            /* Añadiendo la suma del remanente al arreglo temporal */
            sumTemp += 0.001;
            tempJson.push(sumTemp);            
            /* Organizando el arreglo */        
            tempJson.sort().reverse();
            /* Haciendo la incorporación a la matriz final */
            matrix.push(tempJson);                         
            }
        }
        /* Reorganizando el arreglo de verificación */
        tempX.reverse();

        /* Codificando */
        for (let index = 0; index < matrix.length; index++) {
          if(index != 0){
          console.log(matrix[matrix.length-index], "Reversa Matrix");

          for (let bin = 0; bin <= 1; bin++) {
            if(binario.length > 0){
              console.log(binario[index], "binario[index]");
              binario[index].push([bin]);                                       
            }else{
              binario.push(bin); 
            }
          }

          }else{
          /* Poniedo Ceros y unos en la primera posición - Excepción 1 */
            /* array.forEach(element => { */
              for (let bin = 0; bin <= 1; bin++) {
                  if(binario.length > 0){
                    console.log(binario[index], "binario[index]");
                    binario[index].push(bin);                                       
                  }else{
                    binario.push([bin]); 
                  }
                }
            /* }); */
            
          }
          
          if(tempX[index]){
            console.log(tempX[index][tempX[index].length-1], "tempX[Clave]");       
          }          
        }
        
        
function generaTabla(){
        console.log(matrix);
        
        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];
       
        // Crea un elemento <table> y un elemento <tbody>
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
       
        // Crea las celdas
        for (var i = 0; i < 1; i++) {
          // Crea las hileras de la tabla
          var hilera = document.createElement("tr");
       
          for (var j = 0; j < matrix.length; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            /* matrix[j].forEach(function(element){
            }) */



            var textoCelda = document.createTextNode(matrix[j]);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
          }
       
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(hilera);
        }
       
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        tabla.setAttribute("border", "2");
}


console.log(matrix, "matrix");






