/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

// ciudades es igual a un array
let ciudades = [];
let ciudad = '' ;

while(ciudad !== null){
  //ciudad es igual a lo que el usuario ingrese por vuelta 
  ciudad = prompt('Ingrese una ciudad');
  if(ciudad !== null){
    ciudades.push(ciudad);
  }
}
document.write(`<div clss="container px-3">`)

document.write(`<p class="contenedor container">La longitud del arreglo es ${ciudades.length}</p><br>`)
//cantidad de elementos del array o longitud
console.log('La longitud es ' + ciudades.length);
//muestro 1,3 y ultimo, por consola. Ya uwe por pantalla no me dejo decia que habia muchos document write y que funcionaba mal asi la pagina
console.log('los elementos que se encuentran en las posiciones 1,3 y ultimo son:' );
console.log(ciudades[0]);
console.log(ciudades[2]);
console.log(ciudades[ciudades.length - 1])

//RECORRE EL ARREGLO PARA VISUALIZAR POR CONSOLA
console.log('Ciudades:');

for(let indice=0 ; indice < ciudades.length; indice++){
    console.log(`${ciudades[indice] }`)
}

//AGREGO ELEMENTO AL FINAL DEL ARRAY 
document.write('<ul class="container">'); 
for(let indice=0 ; indice < ciudades.length; indice++){
    document.write(`<li>${ciudades[indice] } </li>`)
}
document.write('</ul>')

  ciudades.push("Paris");

document.write(`<p class="contenedor container">El elemento que ocupa la segunda posicion es: ${ciudades[1]}</p>`);

//REEMPLAZO EL SEGUNDO ELEMENTO DEL ARRAY POR BARCELONA
document.write('<h2>Reemplazo el elemento de la segunda posicion por Barcelona</h2>')

ciudades.splice(1,1, 'Barcelona')
document.write('<ul class="container">'); 
for(let indice=0 ; indice < ciudades.length; indice++){
    document.write(`<li>${ciudades[indice] } </li>`)
}

document.write('</ul>')


//Mostramos por pantalla las posiciones 1, 3 y ultima del array.
document.write('<h2 class="me-2">Los elementos de las posiciones 1,2 y 3 son:</h2>')
document.write('<ul');

  document.write(`<li>Primer elemento:${ciudades[0]}</li>`);
  document.write(`<li>Tercer elemento:${ciudades[2]}</li>`);
  document.write(`<li>Ultimo elemento:${ciudades[ciudades.length - l]}</li>`);

document.write('</ul>')
document.write(`</div>`)








// let ciudades = prompt('Ingrese una ciudad');
// let 

// let ciudades = [];
// let consultauno= '';

// while (let === []) {
  
// }
// while (condition) {
  
// }




// ){
//   let ciudad = prompt('Ingresa el nombre de una ciudad:');

//   if (ciudad === null) {
//     break; // El usuario canceló, salimos del ciclo
//   }

//   ciudades.push(ciudad);
// }

// // Mostramos el arreglo generado
// console.log(ciudades);
// document.write(`<p class="contenedor">Las ciudades ingresadas son ${ciudades}}</p>`);
// document.write(`<p>La cantidad de ciudades ingresadas es ${ciudades.length(0)}</p>`);
// document.write(`<p>El elemento de la primera posicion es: ${ciudades[0]} </p>`)
