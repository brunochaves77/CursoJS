function contarPasso() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Insira um numero valido!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                 res.innerHTML += `${c} \u{1F449}`   
            }
         } else {
             //Contagem regressiva
             for(let c = i; c>= f; c -= p) {
                 res.innerHTML += `${c} \u{1F449}`
             }
         }
         res.innerHTML += '\u{1F3C1}'
    }
}

