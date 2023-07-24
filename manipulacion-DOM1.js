console.log("Hello, world")

// Llamando elementos del HTML

const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.getElementsByClassName('parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('.boton')

console.log(input.value)
console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,
})

// Escribiendo y editando HTML desde el JS

// h1.innerHTML = 'Patito <br>Feo' METE CODIGO EN HTML
// h1.innerText = 'Patito <br>Feo' METE STRING
// h1.getAttribute('class') TOMA EL ATRIBUTO DEL HTML
// h1.setAttribute('class', 'rojo') CAMBIA SU ATRIBUTO
h1.classList.add('rojo')
h1.classList.remove('verde') 
// h1.classList.toggle('verde') ES UN SWITCH
// h1.classList.contains('verde') ES UN TRUE OR FALSE

input.value = "456"

// Creando un elemento

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png')
console.log(img)

pid.innerHTML = ""
pid.append(img);