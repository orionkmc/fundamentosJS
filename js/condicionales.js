const movie = 'Star Wars: El despertar de la fuerza';
const ageMin = 13

conWatchMovie = (name, age, idWithAdult = false) => {
    if(age >= ageMin){
        alert(`${name} puede pasar a ver ${movie}`);
    } else if(idWithAdult){
        alert(`${name} puede pasar a ver ${movie}
Aunque su edad es ${age}, se encuentra acompañado/o por un adulto`);
    }else {
        alert(`${name} no puede pasar a ver ${movie}.
        Tiene ${age} años y necesita tener ${ageMin}`);
    }
}


let name = prompt("Nombre de la parsona");
let age = prompt(`Edad de ${name}`);
if (age < ageMin) {
    let idWithAdult = prompt(`¿${name} viene acompañado de un adulto? ¿si o no?`);
    if (idWithAdult == 'si' || idWithAdult == 'Si') {
        conWatchMovie(name, age, true);
    }
    else{
        conWatchMovie(name, age);
    }
}
else{
    conWatchMovie(name, age);
}
