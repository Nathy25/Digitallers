//Vamos a crear una lista de juegos que son objetos json (Un array de objetos nominos)
//Version 1: Array de objetos JSON

/*let juegos = [
    {
        nombre: "Pac Man",
        genero: "Plataforma",
        descripcion: "waka waka waka waka waka waka",
        imagen: "img/pac.jpg",
        puntuacion: 5
    },
    {
        nombre: "Mario Bros",
        genero: "Aventura",
        descripcion: "Rescatar a la reina",
        imagen:"img/mario.jpg"
    },
    {
        nombre:"Assesin Creed",
        genero:"Acción",
        descripcion:"Un asesino del pasado que mata a todos",
        imagen:"img/creed.jpg"
    }
]*/


//Version 2: sintaxis objetos con fuction con el nombre de la function en mayusculas
/*function Juego(nombre, genero, descripcion, imagen){
    this.nombre = nombre;
    this.genero = genero;
    this.descripcion = descripcion;
    this.imagen = imagen;
}*/
    


//Versioón 3: con la sintaxis de clase
class Juego {
    constructor(nombre, genero, descripcion, imagen){
        this.nombre = nombre;
        this.genero = genero;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    //getter (Encapsulamiento)
    getNombre() {
        //Siempre lo muestro con la primer letra en mayusculas
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    }

    getGenero() {
        return this.toUpperCase();
    }
    getDescripcion() {
        return this.descripcion.charAt(0).toUpperCase() + this.descripcion.slice(1);
    }

    getImagen() {
        return this.imagen;
    }

    //El toString es un metodo que ya existe, lo estoy sobrescribiendo
    //Le estoy sobrescribiendo el comportamiento por defecto
    //Polimorfismo
    toString(){
        return this.constructor.name + " " + this.nombre;
    }
}

let juegos = [
    new Juego("Pac Man", "Plataforma", "waka waka waka waka waka waka", "img/pac.jpg"),
    new Juego("Mario Bros", "Aventura", "Rescatar a la reina", "img/mario.jpg"),
    new Juego("Assesin Creed", "Acción", "Un asesino del pasado que mata a todos", "img/creed.jpg" )
]

function crearCarta(imagen, titulo, descripcion) {
    return `
    <div class="col-4">
        <div class="card h-100" style="width: 100%;">
            <img class="card-img-top" src="${imagen}" alt="Card image cap" style="height:150px"></img>
            <div class="card-body">
                <h5>${titulo}</h5>
                <p class="card-text">${descripcion}</p>
            </div>
        </div>
    </div>`
}


//$(document).ready(()->{..})
window.addEventListener("load", () => {

    setInterval(() => {
        let fecha = new Date(); //Invocando al constructo de la clase fecha. new = crear objeto
        document.getElementById("txtFecha").innerText =
            `${fecha.getDay()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
         document.getElementById("txtHora").innerText =
            `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    }, 1000);

    for (juego of juegos) {
        //alert([].constructor.name)
        //alert(juego.constructor.name)  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        alert(juego); //<<<<<<<<<<<<<<<<<<<<<
        //document.getElementById("secJuegos").innerHTML = document.getElementById("secJuegos").innerHTML + elem;

    document.getElementById("secJuegos").innerHTML
        += crearCarta(juego.getImagen(), juego.getNombre(), juego.getDescripcion());
    }
})