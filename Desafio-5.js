function saludar (nombreUsuario) {
    const NOMBRE = prompt (nombreUsuario);
    alert ("Hola " + NOMBRE);
}
saludar ("Ingresa tu nombre"); 

function calculoIMC (pesoUsuario, tallaUsuario) {
    let tallaAlCuadrado = (tallaUsuario * tallaUsuario);
    let resultadoPesoTalla = (pesoUsuario / tallaAlCuadrado);
    alert (resultadoPesoTalla);
}
let pesoUsuario = prompt("¿Cuanto pesas? (Kilogramos) \nEj: 71.4");
let tallaUsuario = prompt ("¿Cúal es tu altura (metros) \nEj: 1.75"); 

calculoIMC ();

function caloriasAlimento() {
    let opcionesAlimentos = parseInt (prompt ("ELEGI UNO DE ESTOS ALIMENTOS PARA VER SUS CALORIAS EN 100 GRAMOS: \n1. Huevo \n2. Leche \n3. Leche descremada"))
    switch (opcionesAlimentos) {
        case 1:
            opcionesAlimentos = "Huevo (100gr): 156 kcal";
            break;
        case 2:
            opcionesAlimentos = "Leche (100gr): 59 kcal";
            break;
        case 3:
            opcionesAlimentos = "Leche descremada (100gr): 45,5 kcal";
            break;
    }
    return opcionesAlimentos;
}

let respuestaOpcionesAlimentos = caloriasAlimento();
alert ("Elegiste " + respuestaOpcionesAlimentos);

class alimento {
    constructor (hidratosDeCarbono, proteinas, lipidos) {
    this.hidratos = hidratosDeCarbono;
    this.proteinas = proteinas;
    this.lipidos = lipidos;
    this.composicion = `${hidratosDeCarbono} Hidratos de Carbono, ${proteinas} Proteinas y ${lipidos} Lipidos`;
    }
    macrosAlimento (){
        alert (this.composicion);
    }
}
let huevo = new alimento (0, 12, 12);
let lecheEntera = new alimento (5, 3, 3);
let lecheDescremada = new alimento (5, 3, 1.5);
huevo.macrosAlimento ();
lecheEntera.macrosAlimento ();
lecheDescremada.macrosAlimento ();
