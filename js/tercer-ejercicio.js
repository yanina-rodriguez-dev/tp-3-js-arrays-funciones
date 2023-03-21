/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios
 entre 1 y 6 para cada uno de los apariciones de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de 
 apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

// Declaro variable para guardar elementos del array
let apariciones = [];

//Inicia array con buclw for
for (let i = 0; i < 13; i++) {
  apariciones[i] = 0;
}

// Declaro variabls para guardar el resultado de los dados uno y dos
let dadoUno;
let dadoDos;
let suma;
// repetir 50 veces
for (let i = 0; i < 50; i++) {
  // numero aleatorio entre 1 y 6
  dadoUno = Math.floor(Math.random() * 6) + 1;
  dadoDos = Math.floor(Math.random() * 6) + 1;

  // suma de resiltqeow
  suma = dadoUno + dadoDos;

  // ingremento en uno lanzam
  apariciones[suma]++;
}
document.write(
  "<h4 >Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los apariciones de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.</h4>"
);

// tabla para mostrar por pantalla
document.write('<div class="container">');
document.write("<table><thead>");

document.write("<tr>");
document.write("<th>Suma</th>");
document.write("<th>Apariciones</th>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody>");

// recorro array y escribo la cantidad de filas
for (let i = 2; i < apariciones.length; i++) {
  //fila tr
  document.write("<tr>");

  // celda td
  document.write(`<td class="d-flex justify-content-center"> ${i} </td>`);
  document.write(`<td> ${apariciones[i]} </td>`);

  document.write("</tr>");
}

//cierre cuerpo y tabla
document.write("</table></tbody>");
document.write("</div>");

// let cantidadapariciones = parseInt(prompt('Ingresar la cantidad de veces que desea arrojar los dados'));

//variable del array:
// let apariciones = [];
//  //incicializo vueltas del bucle for para el array
//  for (let indice = 0 ; indice <= 13; indice++) {
//     document.write(apariciones[indice]= 0);

//  }

//eiemplo de tabla
// let lanzamiento =

// document.write('<table><tbody>')
// //bucle variable indice finals lo inicializo en 0 °° mientras indice filas sea menor que filas; incremento indice filas en 1
// for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
//     document.write('<tr>')
//         //celdas
//        for( let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
//         document.write('<td>')
//          let indiceCeldas = (filas * columnas) - indiceColumnas;
//             document.write(indiceCeldas);
//             document.write('</td>')
//         }
//     document.write('</tr>')
// }
// document.write('</tbody></table>');
