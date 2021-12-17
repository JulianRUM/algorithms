/*Haga un programa que le ayude al rey a tomar esta decisión.
Haga una  estimación del peso de un grano de trigo y “pese” la
cantidad resultante. ¿Qué tamaño de  palabra necesitará tener
la máquina en que se pueda correr dicho programa?*/

const casillas = 64;
var peso = parseInt (prompt ("¿cuanto pesa un grano de trigo en gramos?"));
var result = 0;
var peso_final = 0;

for (i = 1; i <= casillas; ++i) {
    result = result + 2 ** i;
} 

peso_final = result * peso;

if (peso_final < 5972 * (10 ** 27)){
    alert("Pesa " + peso_final + " gramos.");
} else if (peso_final > 5972 * (10 ** 27)){
    alert("El peso es excesivamente grande.");
}