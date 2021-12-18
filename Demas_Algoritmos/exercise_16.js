/*Escriba un programa que solicite por pantalla
el número de horas trabajadas en una semana
y el salario por hora de un empleado. */

var H_Trabajadas = prompt("Número de horas trabajadas");
var salarioPorHora = prompt("Salario por hora");
var salarioBruto = H_Trabajadas * salarioPorHora;
var retenciones = 0;

function calcularRetenciones(salarioBruto) {
    if (salarioBruto <= 1100) {
        retenciones = salarioBruto * 0.1;
    } else if (salarioBruto <= 1500) {
        retenciones = 1100 * 0.1 + (salarioBruto - 1100) * 0.15;
    } else {
        retenciones = 1100 * 0.1 + (1500 - 1100) * 0.15 + (salarioBruto - 1500) * 0.25;
    }
}
calcularRetenciones(salarioBruto);
var salarioNeto = salarioBruto - retenciones;
console.log("Salario bruto: " + salarioBruto);
console.log("Retenciones: " + retenciones);
console.log("Salario neto: " + salarioNeto);