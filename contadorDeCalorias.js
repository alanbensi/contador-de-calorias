// CONSTANTES A USAR DOM

const inputs = Array.from (document.getElementsByClassName ("inputTable"));
const globalContainer = document.getElementById ("globalContainer");
const boxHDC = document.getElementById ("boxHDC"); 
const boxPROT = document.getElementById ("boxPROT"); 
const boxLIP = document.getElementById ("boxLIP");
const macroTotal = document.getElementById ("macroTotal"); 
const inputGenero = document.querySelector('input[name="gender"]:checked');
const inputHombre = document.getElementById ("inputHombre");
const inputMujer = document.getElementById ("inputMujer"); 
const inputActividadFisica = document.querySelector('input[name="actividadFisica"]:checked');
const inputAltura = document.getElementById ("inputAltura"); 
const inputPeso = document.getElementById ("inputPeso");
const inputEdad = document.getElementById ("inputEdad");
const calculoIMC = document.getElementById ("calculoIMC"); 
const calculoIMC2 = document.getElementById ("calculoIMC2");
const calculoPesoIdeal2 = document.getElementById ("calculoPesoIdeal2");
const calculoCalorias2 = document.getElementById ("calculoCalorias2");
const infoGuardada = JSON.parse (localStorage.getItem ("usuario")); 
const barraResultadosDOM = document.getElementById ("barraResultadosDOM");

// CONTADOR DE CALORIAS ... Constructor de los alimentos 

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
const quesos = new alimento ("Quesos", 0, 22, 24); 
const carneVacuna = new alimento ("Carne Vacuna", 0, 20, 7);
const pollo = new alimento ("Pollo", 0, 20, 5); 
const pescado = new alimento ("Pescado", 0, 18, 1); 
const vegetales = new alimento ("Vegetales", 5.5, 1, 0); 
const tuberculos = new alimento ("Papa, batata y choclo", 20, 2, 0);
const frutas = new alimento ("Frutas", 12, 1, 0);
const cereales = new alimento ("Cereales", 20, 2, 0);
const legumbres = new alimento ("Legumbres", 59, 20, 2);
const pan = new alimento ("Pan", 60, 10, 0);
const azucar = new alimento ("Azucar", 100, 0, 0);
const aceite = new alimento ("Aceite", 0, 0, 100);
const manteca = new alimento ("Manteca", 0, 0, 84);

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
            const resultadoCalorias = (totalPROT + totalHDC) *4 + (totalLIP)*9;
            macroTotal.innerHTML = `Las calorias totales son: ${resultadoCalorias.toFixed (0)}`;
            const totalBarra = totalHDC + totalPROT + totalLIP;
            const porcentajeHDC = (100 * totalHDC) / totalBarra; 
            const porcentajeProt = (100 * totalPROT) / totalBarra;
            const porcentajeLIP = (100 * totalLIP) / totalBarra;
            barraResultadosDOM.className = "barraResultados"; 
            barraResultadosDOM.innerHTML= `
            <div id="resultadoHDC" style ="width: ${porcentajeHDC}%" class="bg-warning">
                <p id="parrafo1"> ${porcentajeHDC.toFixed (0)}% </p> 
            </div>
            <div id= "resultadoProt" style ="width: ${porcentajeProt}%" class ="bg-danger">
                <p class"parrafo1"> ${porcentajeProt.toFixed (0)}%</p> 
            </div>
            <div id="resultadoLip" style = "width: ${porcentajeLIP}%" class ="bg-success">
                <p class"parrafo1"> ${porcentajeLIP.toFixed (0)}% </p> 
            </div>`
            if (totalBarra === 0){ 
                barraResultadosDOM.className = "none"
            }
        }
    })
}

inputs.map (input=> (input.addEventListener ("keyup", insertarTotal)));

// CALCULAR IMC E INYECTAR EN DOM
const calcularImcDOM = () => {
    const tallaEnMetros= inputAltura.value/100; 
    const tallaAlCuadrado = tallaEnMetros * tallaEnMetros;
    const valorImcUsuario = inputPeso.value / tallaAlCuadrado;
    // let contenedorImcResultado = document.createElement ("p");
    if (calculoIMC2.className === "none") {
        calculoIMC2.className = "inyectarDomImc";
        calculoPesoIdeal2.className = "hidden";
        calculoCalorias2.className = "hidden";
    } else {
        calculoIMC2.className = "none";
        calculoPesoIdeal2.className = "none";
        calculoCalorias2.className = "none";
    }
    calculoIMC2.innerHTML = `Tu IMC es: ${valorImcUsuario.toFixed (2)}`
}

calculoIMC.addEventListener ("click", calcularImcDOM);

//CALCULAR PESO IDEAL E INYECTAR EN DOM

// const calcularPesoIdealDom = () => {
//     const pesoIdealHombre = inputAltura.value -100;
//     const pesoMenosDiezPorciento = (pesoIdealHombre * 0.1); 
//     const pesoIdealMujer = pesoIdealHombre - pesoMenosDiezPorciento;
//     if (inputGenero == inputHombre) {
//         pesoIdealHombre.innerHTML =; 
//     }else {
//         pesoIdealMujer.innerHTML = ; 
//     }
// } 


const guardarInfo = () => {
    const datosUsuario = {
        edad: inputEdad.value,
        altura: inputAltura.value, 
        peso: inputPeso.value,
        // genero: inputGenero.value,
        // actividadFisica: inputActividadFisica.value 
    }; 
    const jsonUsuario = JSON.stringify (datosUsuario);
    localStorage.setItem ("usuario", jsonUsuario);
    console.log (jsonUsuario);
}

calculoIMC.addEventListener ("click", guardarInfo);
document.getElementById ("calculoPesoIdeal").addEventListener ("click", guardarInfo); 
document.getElementById ("calculoCalorias").addEventListener ("click", guardarInfo);

if (infoGuardada){
    inputEdad.value = infoGuardada.edad;
    inputAltura.value = infoGuardada.altura;
    inputPeso.value = infoGuardada.peso;
}; 


