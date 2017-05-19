// secuencia de fibonacciRecur
let contRecur = 0;
function fibonacciRecur(num){
    if (num == 1) return 0;
    if (num == 2) return 1;

    contRecur++;
    return fibonacciRecur(num - 1) + fibonacciRecur(num - 2);
}
console.log(`fibonacci recursuvo`);
console.log(`El fibonacci de 20 es ${fibonacciRecur(20)}`); // 
console.log(`Se invoco la funcion ${contRecur} veces`);