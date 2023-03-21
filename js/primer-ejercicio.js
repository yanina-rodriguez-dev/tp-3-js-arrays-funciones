
let ejercicios=prompt('Ingresar numero de ejercicio que desea visualizar');
document.write()
//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let uno= meses 
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log(meses);
console.log(meses.length);

//muestro por pantalla incluyendo etiquetas html
document.write('<h2 class="container">Meses del año</h2>');

document.write('<ul>'); 
for(let indice=0 ; indice < meses.length; indice++){
    document.write(`<li>${meses[indice] } </li>`)
}

document.write('</ul>')
