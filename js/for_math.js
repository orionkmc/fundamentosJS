const name = 'kuai'
const days = [
    'lunes', 
    'martes', 
    'miercoles', 
    'jueves', 
    'viernes', 
    'sabado',
    'domingo'
]

function correr() {
    const min = 5;
    const max = 15
    return Math.round(Math.random() * (max - min)) +min
}

let totalKms = 0;
length = days.length
for(let i in days){
    const kms = correr();
    totalKms += kms;
    console.log(`El dia ${days[i]} ${name} corrio ${kms} kms`);
}
promedioKms =  totalKms / length;
console.log(`En promedio, ${name} corrió ${promedioKms.toFixed(2)} kms`);

