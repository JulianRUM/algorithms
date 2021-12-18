
var torres = function(n, from, to, aux) {
    if (n === 1) {
        console.log('Mover disco de ' + from + ' a ' + to);
    } else {
        torres(n - 1, from, aux, to);
        console.log('Mover disco de ' + from + ' a ' + to);
        torres(n - 1, aux, to, from);
    }
    };

    torres(5, 'A', 'C', 'B');