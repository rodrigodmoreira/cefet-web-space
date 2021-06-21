// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botoes = document.querySelectorAll('#aliens .botao-expandir-retrair')
for (let botaoEl of botoes) {
    botaoEl.addEventListener('click', function(e) {
        let botaoEl = e.currentTarget
        let paragrafoEl = botaoEl.parentNode
        paragrafoEl.classList.toggle('expandido')
        botaoEl.innerHTML = botaoEl.innerHTML == '+' ? '-' : '+'
    })
}
