// secuencia de fibonacci con memorizacion
let cont = 0;
function fibonacci(num, memoria = {}){
    if(memoria[num]) return memoria[num]
    if (num == 1) return 0;
    if (num == 2) return 1;

    cont++;
    return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num - 2, memoria);
}
console.log(`fibonacci memoria`);
console.log(`El fibonacci de 20 es ${fibonacci(20)}`); // 
console.log(`Se invoco la funcion ${cont} veces`);