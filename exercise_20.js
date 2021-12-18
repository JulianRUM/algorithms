
var latas = 1 * (45);

var sobrador = 0;
var temp = 1;
var contador = 1;
var niveles = 0;

while (latas >= contador){
    temp = temp + 2;
    sobrador = latas - contador;
    contador = contador + temp;
    niveles = niveles + 1;
}

console.log( niveles );
console.log( sobrador);
