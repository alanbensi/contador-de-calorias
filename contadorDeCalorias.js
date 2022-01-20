// function calculoIMC (pesoUsuario, tallaUsuario) {
//     let tallaAlCuadrado = (tallaUsuario * tallaUsuario);
//     let resultadoPesoTalla = (pesoUsuario / tallaAlCuadrado);
//     alert (resultadoPesoTalla);
// }
// let pesoUsuario = prompt("¿Cuanto pesas? (Kilogramos) \nEj: 71.4");
// let tallaUsuario = prompt ("¿Cúal es tu altura (metros) \nEj: 1.75"); 

// calculoIMC ();

class alimento {
    constructor (nombre, hidratosDeCarbono, proteinas, lipidos) {
    this.nombre = nombre;
    this.hidratos = hidratosDeCarbono;
    this.proteinas = proteinas;
    this.lipidos = lipidos;
    this.composicion = `El alimento es ${nombre} y contiene: 
        ${hidratosDeCarbono} Hidratos de Carbono
        ${proteinas} Proteinas 
        ${lipidos} Lipidos`;
    }
    macrosAlimento (){
        console.log (this.composicion);
    }
}
const huevo = new alimento ("Huevo",0, 12, 12);
const lecheEntera = new alimento ("Leche entera",5, 3, 3);
const lecheDescremada = new alimento ("Leche descremada",5, 3, 1.5);
huevo.macrosAlimento ();
lecheEntera.macrosAlimento ();
lecheDescremada.macrosAlimento ();

let hidratosDeCarbonoTotal = 0; 
let proteinaTotal = 0; 
let lipidosTotal = 0; 
let caloriasTotales = hidratosDeCarbonoTotal + proteinaTotal + lipidosTotal;

let totalesMacronutrientes = [hidratosDeCarbonoTotal, proteinaTotal, lipidosTotal, caloriasTotales];

totalesMacronutrientes.map (item => {
    const divDom = document.createElement ("DIV");
    console.log (divDom); 
})
// arrayAlimentos.map (function (item) {multiplicarHidratos (50, item)});
// arrayAlimentos.map (function (item) {multiplicarProt (50, item)});
// arrayAlimentos.map (function (item) {multiplicarLipidos (50, item)});

function multiplicarHidratos (cantidad, alimento) {
    let hdc = alimento.hidratos; 
    let hdcTotal = (hdc * cantidad) /100;
    hidratosDeCarbonoTotal= hidratosDeCarbonoTotal + hdcTotal;
    let boxHDC = document.getElementById ("boxHDC");
    boxHDC.innerHTML = hidratosDeCarbonoTotal;
}
function multiplicarProt (cantidad, alimento) {
    let prot = alimento.proteinas; 
    let protTotal = (prot * cantidad) /100;
    proteinaTotal= proteinaTotal + protTotal;
    let boxProt = document.getElementById ("boxProt");
    boxProt.innerHTML = proteinaTotal;
}
function multiplicarLipidos (cantidad, alimento) {
    let grasas = alimento.lipidos; 
    let grasasTotal = (grasas * cantidad) /100;
    lipidosTotal = lipidosTotal + grasasTotal; 
    let boxLip = document.getElementById ("boxLip");
    boxLip.innerHTML = lipidosTotal;
}

let inputHuevo = document.getElementById ("inputHuevo");
let inputLecheEntera = document.getElementById ("inputLecheEntera");
let inputLecheDescremada = document.getElementById("inputLecheDescremada");  
function mostrarInput () {
    let huevoValue = inputHuevo.value;
    let lecheEnteraValue = inputLecheEntera.value;
    let lecheDescremadaValue = inputLecheDescremada.value;
    console.log (huevoValue, lecheDescremadaValue, lecheEnteraValue);
} 

// HIDRATOS DE CARBONO INPUTS 
inputHuevo.addEventListener ("change", ()=> multiplicarHidratos (inputHuevo.value, huevo)); 
inputLecheEntera.addEventListener ("change", ()=> multiplicarHidratos (inputLecheEntera.value, lecheEntera));
inputLecheDescremada.addEventListener ("change", ()=> multiplicarHidratos (inputLecheDescremada.value, lecheDescremada));

// PROTEINAS INPUTS
inputHuevo.addEventListener ("change", ()=> multiplicarProt (inputHuevo.value, huevo));
inputLecheEntera.addEventListener ("change", ()=> multiplicarProt (inputLecheEntera.value, lecheEntera));
inputLecheDescremada.addEventListener ("change", ()=> multiplicarProt (inputLecheDescremada.value, lecheDescremada));

// LIPIDOS INPUTS 
inputHuevo.addEventListener ("change", ()=> multiplicarLipidos (inputHuevo.value, huevo));
inputLecheEntera.addEventListener ("change", ()=> multiplicarLipidos (inputLecheEntera.value, lecheEntera));
inputLecheDescremada.addEventListener ("change", ()=> multiplicarLipidos (inputLecheDescremada.value, lecheDescremada));

