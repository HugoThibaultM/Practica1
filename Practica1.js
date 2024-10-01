var hanoi = function (numero, inicial, final, aux) {
    if (numero === 1) {
        console.log("Se mueve disco" + inicial + "->" + final);
    }
    else {
        hanoi(numero - 1, inicial, aux, final);
        console.log("Se mueve disco" + inicial + "->" + final);
        hanoi(numero - 1, aux, final, inicial);
    }
};
var n = 3;
hanoi(n, 1, 2, 3);
