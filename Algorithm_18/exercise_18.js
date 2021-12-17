/*Haga una función tripoTriang(a, b, c) a la
cual se le pase como parámetros las longitudes
de  los lados y retorne 1, 2 o 3 según el
triángulo sea equilátero, isósceles o escaleno. */

var a = 1 * prompt ("Longitud del lado (A).");
var b = 1 * prompt ("Longitud del lado (B).");
var c = 1 * prompt ("Longitud del lado (C).");
    

if (a == b && b == c){
    document.write ("<h1>Es Equilatero</h1>");
} else if (a != b && b != c && a != c){
    document.write ("<h1>Es Escaleno</h1>");
} else {
    document.write ("<h1>Es Isoceles</h1>");
}