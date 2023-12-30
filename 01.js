/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// Hipotesis: Lo que tenemos, la informacion, herramientas.
// Tesis: Lo que pide resolver

function soloNumeros(array) {
  // H: array= [enteros, strings]   T: arreglo=[enteros]
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  var arrayResultante = [];

  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResultante.push(array[i]);
    }
  }
  return arrayResultante;
}

// HenryChallenge practice - 16 feb 2023
// https://www.youtube.com/watch?v=yFjPLU79UVg&ab_channel=Henry

// No modifiques nada debajo de esta linea //

module.exports = soloNumeros;
