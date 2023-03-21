/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
let ladoA = parseInt(prompt('Introduce el valor del primer lado del rectángulo:'));
let ladoB = parseInt(prompt('Introduce el valor del segundo lado del rectángulo:'));
function perimetroRec() {
    let perimetro = 2 * (ladoA + ladoB);
    document.write("El perímetro del rectángulo es " + perimetro);
}
perimetroRec();
