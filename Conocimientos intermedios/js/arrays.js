/*
function suma(...numeros){
    return numeros.reduce(function reduce(acum, numero){
        acum += numero;
        return acum;
    }, 0);
}
*/
const suma = (...numeros) => numeros.reduce( (acum, numero) => acum += numero );
/*
function dobles(...numeros){
    return numeros.map(function(numero){
        return numero * 2;
    });
}
*/

const dobles = (...numeros) => numeros.map(numero => numero *2);

/*function pares(...numeros){
    return numeros.filter(function(numero){
        return numero % 2 == 0;
    }); 
}*/
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0);

/*function max(...numeros){
    let maximo = numeros[0];
    numeros.find(function(numero){
        (numero > maximo) ? maximo = numero : '';
    });
    return maximo;
}*/

const max = (...numeros) => {
    let maximo = numeros[0];
    numeros.find( numero => { (numero > maximo) ? maximo = numero : '' })
    return maximo;
}

console.log(suma(4, 6, 12, 8, 5));
console.log(dobles(4, 8, 12, 8954, 7, 2));
console.log(pares(10, 2, 3))
console.log(max(10, 22, 39))