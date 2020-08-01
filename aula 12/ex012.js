var a = new Date()
var h = a.getHours()
console.log(`Agora são exatamente ${h} horas.`)
if (h < 12) {
    console.log('Bom dia!')
} else if (h <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
