const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

presentarse(name, lastname, nickname)

function presentarse(name, lastname, nickname) {
    const nombreCompleto = name + lastname

    console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + nickname + ".");
}

const tipoDeSuscripcion1 = "Basic";

if (tipoDeSuscripcion1 == "Free") {
    console.log("Solo puedes tomar los cursos gratis");

}
if (tipoDeSuscripcion1 == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion1 == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion1 == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let a = 0
while (a < 5) {
    console.log("El valor de a es: " + a);
    a++
}

let b = 10
while (b > 0) {
    console.log("El valor de a es: " + b);
    b--
}

let resutado = prompt("Cuanto es 2+2?")
resutado = Number(resutado)
if (resutado === 4) {
    console.log("Capo")

}
else {
    console.log("incorrecto")

}
// tambien
while (respuesta != '4') {
    let pregunta = prompt('cuanto es 2+2?')
    respuesta = pregunta
}

let nombres = ["Pedro", "Juan", "Nicol", "nacho"]

imprimirNombre(nombres)
function imprimirNombre(nombres) {
    let nombre = nombres[0]
    console.log (nombre)
}

let nombres2 = ["Pedro", "Juan", "Nicol", "nacho"]

imprimirNombre(nombres2)
function imprimirNombre(array) {
    while (nombres2.length > 0) {
        console.log(array[0])
        nombres2.shift("")
    }
}
// TAMBIEN
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

autos = [
    {nombre: "EcoSport"},
    {nombre: 2020},
    {nombre: "Cupra"},
    {nombre: "Sandero"}
]

autos.forEach(function(naim) {
    console.log(naim.nombre)
})
// TAMBIEN
autos2 = {
    Ford: "EcoSport",
    anio: 2020,
    BMW: "Cupra",
    Renault: "Sandero",

}
imprimirElementoPorElemento(autos2)
function imprimirElementoPorElemento(obj) {
    const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// BONUS

tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un anio",
    expertDuo: "Tu y alguien mas pueden tomar TODOS lios cursos de Platzi durante un anio",
}

// let ejemploSuscripcion = 'free'
// tiposDeSuscripciones[ejemploSuscripcion] = "Solo puedes tomar los cursos gratis"

function nuevoTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        alert(tiposDeSuscripciones[suscripcion])
        return;
    }
    console.warn("Ese tipo de suscripcion no existe")
    alert("invalido")
}
indicarSuscripcion = prompt('indica Tu suscripcion')
nuevoTipoSuscripcion(indicarSuscripcion)