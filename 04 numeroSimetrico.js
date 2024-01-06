/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // H:
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let numStr = num.toString();

  let reverseStr = numStr.split("").reverse().join("");

  return numStr === reverseStr;
}

// HenryChallenge practice - 16 feb 2023
// https://www.youtube.com/watch?v=yFjPLU79UVg&ab_channel=Henry

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
