
var a = parseInt (prompt ("Valores que quieres que tenga A (Catetos)."));
var b = parseInt (prompt ("Valores que quieres que tenga B (Catetos)."));
var c = parseInt (prompt ("Valores que quieres que tenga C (Hipotenusa)."));
    

if (a ** 2 + b ** 2 === c ** 2)
{
    console.log( + a + ", " + b +" y "+ c + "son numeros de pitagoras.");
} else {
    console.log("No son numeros de pitagoras.");
}