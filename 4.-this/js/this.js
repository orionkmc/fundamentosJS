class Persona{
    constructor(nombre, amigos = []){
        this.nombre = nombre;
        this.amigos = amigos;
    }

    listarAmigos_This(){
        // Primera solucion
        const _this = this;
        this.amigos.map(function (amigo){
            console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
        });
    }

    listarAmigosBind(){
        // Segunda solucion
        this.amigos.map(function (amigo){
            console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this));
    }

    listarAmigosArrowFunction(){
        //con arrow function
        this.amigos.map(amigo => console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`));
    }
}

const ciudadano = new Persona("jose", ["Pedro", "Juan", "Carlos"]);
console.log("--------_this--------");
ciudadano.listarAmigos_This();

console.log("--------Bind--------");
ciudadano.listarAmigosBind();
console.log("--------Arroy function--------");
ciudadano.listarAmigosArrowFunction();