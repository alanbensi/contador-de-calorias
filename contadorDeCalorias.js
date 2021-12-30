// function saludar (nombreUsuario) {
//     const NOMBRE = prompt (nombreUsuario);
//     alert ("Hola " + NOMBRE);
// }
// saludar ("Ingresa tu nombre"); 

// function calculoIMC (pesoUsuario, tallaUsuario) {
//     let tallaAlCuadrado = (tallaUsuario * tallaUsuario);
//     let resultadoPesoTalla = (pesoUsuario / tallaAlCuadrado);
//     alert (resultadoPesoTalla);
// }
// let pesoUsuario = prompt("¿Cuanto pesas? (Kilogramos) \nEj: 71.4");
// let tallaUsuario = prompt ("¿Cúal es tu altura (metros) \nEj: 1.75"); 

// calculoIMC ();

// function caloriasAlimento() {
//     let opcionesAlimentos = parseInt (prompt ("ELEGI UNO DE ESTOS ALIMENTOS PARA VER SUS CALORIAS EN 100 GRAMOS: \n1. Huevo \n2. Leche \n3. Leche descremada"))
//     switch (opcionesAlimentos) {
//         case 1:
//             opcionesAlimentos = "Huevo (100gr): 156 kcal";
//             break;
//         case 2:
//             opcionesAlimentos = "Leche (100gr): 59 kcal";
//             break;
//         case 3:
//             opcionesAlimentos = "Leche descremada (100gr): 45,5 kcal";
//             break;
//     }
//     return opcionesAlimentos;
// }

// let respuestaOpcionesAlimentos = caloriasAlimento();
// alert ("Elegiste " + respuestaOpcionesAlimentos);

class alimento {
    constructor (nombre, hidratosDeCarbono, proteinas, lipidos) {
    this.nombre = nombre;
    this.hidratos = hidratosDeCarbono;
    this.proteinas = proteinas;
    this.lipidos = lipidos;
    this.composicion = `${hidratosDeCarbono} Hidratos de Carbono, ${proteinas} Proteinas y ${lipidos} Lipidos`;
    }
    macrosAlimento (){
        alert (this.composicion);
    }
}
const huevo = new alimento ("Huevo",0, 12, 12);
const lecheEntera = new alimento ("Leche entera",5, 3, 3);
const lecheDescremada = new alimento ("Leche descremada",5, 3, 1.5);
huevo.macrosAlimento ();
lecheEntera.macrosAlimento ();
lecheDescremada.macrosAlimento ();

let hidratosDeCarbonoTotal; 
let proteinaTotal; 
let lipidosTotal; 

function multiplicarHidratos (cantidad, alimento) {
    let hdc = alimento.hidratos; 
    let hdcTotal = (hdc * cantidad) /100;
    hidratosDeCarbonoTotal= hidratosDeCarbonoTotal + hdcTotal; 
    console.log (`El alimento elegido es: ${alimento.nombre} y tiene ${hdcTotal} hidratos de carbono en la cantidad de alimento ingresada`); 
}
function multiplicarProt (cantidad, alimento) {
    let prot = alimento.proteinas; 
    let protTotal = (prot * cantidad) /100;
    proteinaTotal= proteinaTotal + protTotal; 
    console.log (`El alimento elegido es: ${alimento.nombre} y tiene ${protTotal} proteinas en la cantidad de alimento ingresada`); 
}
function multiplicarLipidos (cantidad, alimento) {
    let grasas = alimento.lipidos; 
    let grasasTotal = (grasas * cantidad) /100;
    lipidosTotal = lipidosTotal + grasasTotal; 
    console.log (`El alimento elegido es: ${alimento.nombre} y tiene ${grasasTotal} lipidos en la cantidad de alimento ingresada`); 
}

const arrayAlimentos = [huevo, lecheEntera, lecheDescremada]; 
arrayAlimentos.map (function (item) {multiplicarHidratos (50, item)});
arrayAlimentos.map (function (item) {multiplicarProt (50, item)});
arrayAlimentos.map (function (item) {multiplicarLipidos (50, item)});


