var i = 64
console.log(`Voce tem ${i} anos.`)
if (i < 16) {
    console.log('Não vota')
} else if (i < 18 || i > 65)  {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}