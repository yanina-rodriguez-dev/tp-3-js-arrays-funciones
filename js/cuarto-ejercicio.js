/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de
 texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

let valor = parseInt(prompt('Ingresa un numero entero:'));
function parOimpar(valor){
    if( valor % 2 === 0){
document.write('<p class="contenedor container fs-1">El numero ingresado es par.</p>')
}
else{
    document.write('<p class="contenedor container fs-1">El numero ingresado es impar.</p>')
} 
}
parOimpar(valor)







