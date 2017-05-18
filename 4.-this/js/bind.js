class Toggable{
    constructor(el){
        //inicializar el estado interno
        this.el = el;
        this.el.innerHTML = 'Off';
        this.activated = false;
        //usando bind para setear this.
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick(){
        //Cambiar el estado interno
        //llamar a toggletext
        this.activated = !this.activated;
        this.toggleText();
    }

    toggleText(ev) {
        //cambiar el texto
        this.el.innerHTML = this.activated ? 'On' : 'Off';
    }
}

const button = document.getElementById('boton');
const miBoton = new Toggable(button)

//otro uso de bind

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar("Juan", "Bustamante");

// Lo utilizamos para colocar un parametro por defecto.
const saludarPedros = saludar.bind(null, "pedro");
saludarPedros("Gomez");
saludarPedros("Rodriguez");