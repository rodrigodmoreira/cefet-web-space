// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const constanteEl = document.querySelector('#gravitacao #constante')
const massa1El = document.querySelector('#gravitacao #massa1')
const massa2El = document.querySelector('#gravitacao #massa2')
const distanciaEl = document.querySelector('#gravitacao #distancia')

const calcularEl = document.querySelector('#gravitacao #calcular')
const resultadoEl = document.querySelector('#gravitacao #resultado')

calcularEl.addEventListener('click', function(e) {
    const constante = constanteEl.value || 0
    const massa1 = massa1El.value || 0
    const massa2 = massa2El.value || 0
    const distancia = distanciaEl.value || 1

    resultadoEl.value = constante*massa1*massa2/(distancia**2)
})
