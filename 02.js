/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) { // H: strings= [strings]    T: Retornar el string con mas caracteres
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca:
  var masLarga = strings[0];

  for(var i = 1; i < strings.length; i++){
    if(masLarga.length <= strings[i].length){ // masLarga = "hi" --> 2; strings[1] "hello" --> 4; "ni hao" --> 6; "guten tag" --> 9;
      masLarga = strings[i];
    }
  }

  return masLarga;
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga