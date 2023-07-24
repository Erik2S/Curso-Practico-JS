const form = document.querySelector('#formulario')
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

btn.addEventListener('click', sumarInputValues)

// Escuchar eventos de HTML en JS

function sumarInputValues(event) {
    // console.log({event})
    // event.preventDefault()
    if(input1.value == Number(input1.value)  && input2.value == Number(input2.value)) {
        const num1 = Number(input1.value)
        const num2 = Number(input2.value)
        let result = num1 + num2    
        pResult.innerText = "Resultado: " + result
    }
    else {
        alert ("PONE NUMERO LOCO")
    }
}