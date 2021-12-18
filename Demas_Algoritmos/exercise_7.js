/*Los conejos de Fibonacci. El matemático Leonardo Fibonacci
expuso el siguiente problema, haga un programa para solucionarlo:
Suponga que una pareja de conejos tiene un par de  crías cada mes
y a su vez las crías se hacen fértiles al cabo de un mes y empiezan
a tener sus  propias crías. Si comenzamos con una pareja fértil y no muere
¿Cuántos pares de conejos se  tendrán al cabo de un año?*/

var meses = 1 * prompt ("¿Cantidad de meses como limite?");
var conejos = fibonacci (meses);

alert (" En " + meses + " meses tendras " + conejos + " conejos.");

function fibonacci (meses) {
    if (meses == 1 || meses == 2){
        return 1
    } else {
        return fibonacci (meses - 1) + fibonacci (meses - 2)
    }
}