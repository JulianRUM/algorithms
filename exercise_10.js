/*Haga una función eqcuad(a, b, c) la cual retorne
la solución positiva de una ecuación cuadrática
cuyos parámetros son a, b y c respectivamente. */

var a = 1 * prompt ("Valor de (a).");
var b = 1 * prompt ("Valor de (b).");
var c = 1 * prompt ("Valor de (c).");

var raiz = (b ** 2) - 4 * (a * c);

if (raiz < 0){
    alert("Resultado de la raiz negativo, ingresa otros valores.");
} else if (raiz > 0){
    alert(eqcuad (a , b, raiz));
} else {
    alert("Algun valor que introduciste no es un numero.");
}

function eqcuad(a, b, raiz){
    console.log (raiz)
    var x = (b) + (Math.sqrt(raiz)) / (2 * a);
    return x
}