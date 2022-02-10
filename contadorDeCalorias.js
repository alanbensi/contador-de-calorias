// CONSTANTES DOM

const inputs = Array.from (document.getElementsByClassName ("inputTable"));
const globalContainer = document.getElementById ("globalContainer");
const boxHDC = document.getElementById ("boxHDC"); 
const boxPROT = document.getElementById ("boxPROT"); 
const boxLIP = document.getElementById ("boxLIP");
const macroTotal = document.getElementById ("macroTotal"); 
const inputHombre = document.getElementById ("inputHombre");
const inputMujer = document.getElementById ("inputMujer"); 
const inputActSedentaria = document.getElementById ("inputActFisicaSedentaria");
const inputActModerada = document.getElementById ("inputActFisicaModerada");
const inputActIntensa = document.getElementById ("inputActFisicaIntensa");
const inputAltura = document.getElementById ("inputAltura"); 
const inputPeso = document.getElementById ("inputPeso");
const inputEdad = document.getElementById ("inputEdad");
const calculoIMC = document.getElementById ("calculoIMC"); 
const calculoPesoIdeal = document.getElementById ("calculoPesoIdeal");
const calculoCalorias = document.getElementById ("calculoCalorias");
const inyectarImcDOM = document.getElementById ("inyectarImcDOM");
const inyectarPesoIdealDOM = document.getElementById ("inyectarPesoIdealDOM");
const inyectarKcalDiariasDOM = document.getElementById ("inyectarKcalDiariasDOM");
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
        if (!isNaN (input.value) && (input.value > 0)) {
            totalHDC = multiplicarHidratos (input.value, eval (input.name)) + totalHDC;
            totalPROT = multiplicarProt (input.value, eval (input.name)) + totalPROT;
            totalLIP = multiplicarLipidos (input.value, eval (input.name)) + totalLIP;
            $(".macrosBox").animate ({"font-weight": "700","font-size": "18px","padding": "3rem 10rem"})
            .delay (10000)
            .animate ({"font-weight": "400","font-size": "16px","padding": "1rem"})
            .delay (2000)
            .animate ({"font-weight": "700","font-size": "18px","padding": "3rem 10rem"});
            boxHDC.innerHTML =`${totalHDC.toFixed (1)} GRAMOS`;
            boxPROT.innerHTML = `${totalPROT.toFixed (1)} GRAMOS`;
            boxLIP.innerHTML = `${totalLIP.toFixed (1)} GRAMOS`;
            const resultadoCalorias = (totalPROT + totalHDC) *4 + (totalLIP)*9;
            macroTotal.innerHTML = `${resultadoCalorias.toFixed (0)} KCAL`;
            const totalBarra = totalHDC + totalPROT + totalLIP;
            const porcentajeHDC = (100 * totalHDC) / totalBarra; 
            const porcentajeProt = (100 * totalPROT) / totalBarra;
            const porcentajeLIP = (100 * totalLIP) / totalBarra;
            barraResultadosDOM.className = "barraResultados"; 
            barraResultadosDOM.innerHTML= `
            <div>
                <p class="text-center"> Los porcentajes totales de macronutrientes en las cantidades elegidas son: </p>
            </div>
            <div class="d-flex">    
                <div id="resultadoHDC" style ="width: ${porcentajeHDC}%" class="bg-warning d-flex justify-content-center">
                    <p class ="centrarTotalGrCalorias"> ${porcentajeHDC.toFixed (0)}% </p> 
                </div>
                <div id= "resultadoProt" style ="width: ${porcentajeProt}%" class ="bg-danger d-flex justify-content-center">
                    <p class="centrarTotalGrCalorias"> ${porcentajeProt.toFixed (0)}%</p> 
                </div>
                <div id="resultadoLip" style = "width: ${porcentajeLIP}%" class ="bg-success d-flex justify-content-center">
                    <p class="centrarTotalGrCalorias"> ${porcentajeLIP.toFixed (0)}% </p> 
                </div>
            </div>`
            if (totalBarra === 0){ 
                barraResultadosDOM.className = "none"
            }
        } else if (input.value < 0) {
            boxHDC.innerHTML =`Ingresá solo numeros positivos`;
            boxPROT.innerHTML = `Ingresá solo numeros positivos`;
            boxLIP.innerHTML = `Ingresá solo numeros positivos`;
            barraResultadosDOM.className = "none";
            macroTotal.innerHTML = "";
        }
    })
}

inputs.map (input=> (input.addEventListener ("keyup", insertarTotal)));

//AGREGO BOTON DE REINICIAR CALORIAS CON JQUERY Y VACIA LOS VALORES DEL CONTADOR DE CALORIAS

$("#containerClearButton").prepend (`<button id="btn-reiniciarCalorias">Reiniciar contador de calorías</button>`);
$("#btn-reiniciarCalorias").css({"padding": "1rem",
    "border": "solid 1px",
    "font-weight": "600",
    "border-radius": "20px",
    "margin": "1rem",
    "background-color": "darkcyan",
    "color": "white",
    "margin-top": "3rem"});

$("#btn-reiniciarCalorias").click (function (){
    $(".inputTable").val("");
    if ($(".inputTable").val("")) {
        boxHDC.innerHTML = "";
        boxPROT.innerHTML = "";
        boxLIP.innerHTML = "";
        macroTotal.innerHTML = "";
        barraResultadosDOM.className = "none"; 
        $(".macrosBox").css ({"padding":"1rem"});
    }
});


// AGREGAR BOTON DE + RECETAS QUE LLAMA A JSON

$("#containerBtnRecetas").prepend(`<button id="btn-masRecetas">Click para ver recetas</button>`);
$("#btn-masRecetas").css({"padding": "1rem",
    "border": "solid 1px",
    "font-weight": "600",
    "border-radius": "20px",
    "margin-right": "3rem",
    "background-color": "brown",
    "color": "white",
    "margin-top": "3rem"});

$("#btn-masRecetas").click (function () {
    $.get ("datos.json", (data)=> {
        data.forEach((receta) => {
            $("#containerRecetas").prepend (`
            <div class="cardsRecetas" style="width: 20rem;">
                <img src="${receta.Imagen}" class="card-img-top imagenesCards">
                <div class="card-body">
                    <h4 class="alimentoCard">${receta.Alimento}</h4>
                    <p class="ingredientesCard">${receta.Ingredientes}</p>
                    <div class ="textoKcalRecetas"> 
                        <p id="totalKcalReceta" >En 100 gramos:  ${receta.Calorías} </p> 
                    </div>
                </div>
            </div>`
            )
            if (receta.Kcal <= 100) {
                $("#totalKcalReceta").css ({
                    "color": "white",
                    "background-color": "#198754",
                    "border": "solid 1px black",
                    "border-radius": "15px",
                    "text-align": "center", 
                    "padding": "0.5rem",
                    "font-weight": "600",

                })
            } else if (receta.Kcal >=100 && receta.Kcal <= 200) {
                $("#totalKcalReceta").css ({
                    "color": "white",
                    "background-color": "#FFC107",
                    "border": "solid black 1px",
                    "border-radius": "15px",
                    "text-align": "center", 
                    "padding": "0.5rem",
                    "font-weight": "600"
                })
            } else {
                $("#totalKcalReceta").css ({
                    "color": "white",
                    "background-color": "#DC3545",
                    "border": "solid black 1px",
                    "border-radius": "15px",
                    "text-align": "center", 
                    "padding": "0.5rem",
                    "font-weight": "600"
                })
            }
        });
    })
});

// CALCULAR IMC E INYECTAR EN DOM
const calcularImcDOM = () => {
    const tallaEnMetros= inputAltura.value/100; 
    const tallaAlCuadrado = tallaEnMetros * tallaEnMetros;
    const valorImcUsuario = inputPeso.value / tallaAlCuadrado;
    inyectarImcDOM.className = "inyectarDomImc";
    if (!isNaN (valorImcUsuario)) {
        inyectarImcDOM.innerHTML = `Tu IMC es: ${valorImcUsuario.toFixed (2)}`;
    } else {
        inyectarImcDOM.innerHTML = `Uno o más valores no son numeros. Por favor ingresa solo numeros (Ejemplo: Peso 64.6)`;
    }
    if (!inputHombre.checked && !inputMujer.checked) {
        inyectarImcDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputActSedentaria.checked && !inputActModerada.checked && !inputActIntensa.checked){
        inyectarImcDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputAltura.value && !inputPeso.value && !inputEdad.value){
        inyectarImcDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    }
}

calculoIMC.addEventListener ("click", calcularImcDOM);

//CALCULAR PESO IDEAL E INYECTAR EN DOM

const calcularPesoIdealDom = () => {
    const pesoIdealHombre = inputAltura.value -100;
    const pesoMenosDiezPorciento = (pesoIdealHombre * 0.1); 
    const pesoIdealMujer = pesoIdealHombre - pesoMenosDiezPorciento;
    inyectarPesoIdealDOM.className = "inyectarDomPesoIdeal";
    if (inputHombre.checked) {
        inyectarPesoIdealDOM.innerHTML = `Tu peso ideal es: ${pesoIdealHombre} KG`;
    }else if (inputMujer.checked) {
        inyectarPesoIdealDOM.innerHTML = `Tu peso ideal es: ${pesoIdealMujer} KG`;
    }
    if (!inputHombre.checked && !inputMujer.checked) {
        inyectarPesoIdealDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputActSedentaria.checked && !inputActModerada.checked && !inputActIntensa.checked){
        inyectarPesoIdealDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputAltura.value && !inputPeso.value && !inputEdad.value){
        inyectarPesoIdealDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    }
}; 

calculoPesoIdeal.addEventListener ("click", calcularPesoIdealDom);


// CALCULAR CALORIAS DIARIAS E INYECTAR EN DOM

const calculoCaloriasDOM = ()=> {
    const kcalSedentario = inputPeso.value * 20;
    const kcalModerado = inputPeso.value * 25;
    const kcalIntenso = inputPeso.value * 30;
    inyectarKcalDiariasDOM.className = "inyectarKcalDiariasDom"
    if (inputActSedentaria.checked) {
        inyectarKcalDiariasDOM.innerHTML = `${kcalSedentario} KCAL /día`;
    } else if (inputActModerada.checked) {
        inyectarKcalDiariasDOM.innerHTML = `${kcalModerado} KCAL /día`;
    } else if (inputActIntensa.checked) {
        inyectarKcalDiariasDOM.innerHTML = `${kcalIntenso} KCAL /día`;
    }
    if (!inputHombre.checked && !inputMujer.checked) {
        inyectarKcalDiariasDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputActSedentaria.checked && !inputActModerada.checked && !inputActIntensa.checked){
        inyectarKcalDiariasDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    } else if (!inputAltura.value && !inputPeso.value && !inputEdad.value){
        inyectarKcalDiariasDOM.innerHTML = `Completá todos los datos para obtener este resultado`;
    }
};

calculoCalorias.addEventListener ("click", calculoCaloriasDOM);

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


