function* fibonacci(){
    let a = 0, b = 1;

    while(true){
        let f = a;
        a = b;
        b = f + a;
        let reset = yield f;
        if (reset) a = 0, b = 1;
    }
}

/*
const fibo = {};
fibo[Symbol.iterator] = fibonacciItera;

let i = 0;
for(let value of fibo){
    console.log(value)
    i++
    if(i > 20) break
 } 
*/

const fibo = fibonacci();
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next(true) );

console.log( fibo.next() );
console.log( fibo.next() );
console.log( fibo.next() );