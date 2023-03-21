/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.
*/
let cadena = prompt('Ingrese un texto')
function tipoDeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write('<p class="contenedor fs-2">El texto esta formado solo por mayusculas.</p>');
    } else if (cadena === cadena.toLowerCase()) {
        document.write('<p class="contenedor fs-2">El texto esta formado solo por minusculas.</p>');
    } else {
        document.write('<p class="contenedor fs-2">El texto esta formado por una mezcla de minusculas y mayusculas</p>');
    }
}

tipoDeCadena(cadena);