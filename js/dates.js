
let day = prompt('Dia de tu cumpleaños');
let month = prompt('Mes de tu cumpleños en numero');
let age = prompt('año de tu cumpleaños');

const birthday = new Date(age, month-1, day);
const today = new Date();

const milliseconds = today - birthday;
const second = milliseconds / 1000;
const minutes = second / 60;
const hour = minutes / 60;
const days = hour / 24;

const nextbirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

const week = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];



console.log(`Han pasado ${milliseconds} milisegundos desde el dia de tu nacimiento`);
console.log(`Han pasado ${second} segundos desde el dia de tu nacimiento`);
console.log(`Han pasado ${minutes} minutos desde el dia de tu nacimiento`);
console.log(`Han pasado ${hour} horas desde el dia de tu nacimiento`);
console.log(`Han pasado ${days} dias desde el dia de tu nacimiento`);

console.log(`Tu proximo cumpleaños sera ${nextbirthday}`);
console.log(`Tu proximo cumpleaños sera el dia ${week[nextbirthday.getDay()]}`);


/*const el = document.createElement('h3');
el.textContent = days;
document.getElementsByTagName("body")[0].appendChild(el);*/