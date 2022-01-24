const inputs = Array.from (document.getElementsByClassName ("inputTable"));
const boxHDC = document.getElementById ("boxHDC"); 
const boxPROT = document.getElementById ("boxPROT"); 
const boxLIP = document.getElementById ("boxLIP"); 
const inputEdad = document.getElementById ("inputEdad"); 
const inputAltura = document.getElementById ("inputAltura"); 
const inputPeso = document.getElementById ("inputPeso");
const infoGuardada = JSON.parse (localStorage.getItem ("usuario")); 


class alimento {
    constructor (nombre, hidratosDeCarbono, proteinas, lipidos) {
    this.nombre = nombre;
    this.hidratos = hidratosDeCarbono;
    this.proteinas = proteinas;
    this.lipidos = lipidos;
    }
}
const huevo = new alimento ("Huevo",0, 12, 12);
const lecheEntera = new alimento ("Leche entera",5, 3, 3);
const lecheDescremada = new alimento ("Leche descremada",5, 3, 1.5);

function multiplicarHidratos (cantidad, alimento) {
    let hdc = alimento.hidratos; 
    let hdcTotal = (hdc * cantidad) /100;
    return hdcTotal;
}
function multiplicarProt (cantidad, alimento) {
    let prot = alimento.proteinas; 
    let protTotal = (prot * cantidad) /100;
    return protTotal;
}
function multiplicarLipidos (cantidad, alimento) {
    let grasas = alimento.lipidos; 
    let grasasTotal = (grasas * cantidad) /100;
    return grasasTotal;
}

const insertarTotal = ()=> {
    let totalHDC = 0;
    let totalPROT = 0; 
    let totalLIP = 0; 
    inputs.map (input => {
        if (!isNaN (Number(input.value))) {
            totalHDC = multiplicarHidratos (input.value, eval (input.name)) + totalHDC;
            totalPROT = multiplicarProt (input.value, eval (input.name)) + totalPROT;
            totalLIP = multiplicarLipidos (input.value, eval (input.name)) + totalLIP;
            boxHDC.innerHTML = totalHDC;
            boxPROT.innerHTML = totalPROT;
            boxLIP.innerHTML = totalLIP;
        }
        else {
            boxHDC.innerHTML = "Ingresá solo numeros";
            boxPROT.innerHTML = "Ingresá solo numeros";
            boxLIP.innerHTML = "Ingresá solo numeros";
        }
    })
}

inputs.map (input=> (input.addEventListener ("keyup", insertarTotal))); 

const guardarInfo = () => {
    const datosUsuario = {
        edad: inputEdad.value,
        altura: inputAltura.value, 
        peso: inputPeso.value
    }; 
    const jsonUsuario = JSON.stringify (datosUsuario);
    localStorage.setItem ("usuario", jsonUsuario);
    console.log (jsonUsuario);
}

document.getElementById ("calculoIMC").addEventListener ("click", guardarInfo);
document.getElementById ("calculoPesoIdeal").addEventListener ("click", guardarInfo); 
document.getElementById ("calculoCalorias").addEventListener ("click", guardarInfo);

if (infoGuardada){
    inputEdad.value = infoGuardada.edad;
    inputAltura.value = infoGuardada.altura;
    inputPeso.value = infoGuardada.peso;
};  
