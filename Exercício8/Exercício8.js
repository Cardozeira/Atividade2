const idade = prompt(`Qual sua idade?`)
const peso = prompt(`Qual seu peso`)

if (idade <= 12) {
    document.write(`Categoria Infantil`)
} else if (idade >= 13 && idade <= 16 && peso <= 40) {
    document.write(`Categoria Juvenil leve`)
} else if (idade >= 13 && idade <= 16 && peso > 40) {
    document.write(`Categoria Juvenil pesado`)
} else if (idade >= 17 && idade <= 24 && peso <= 45) {
    document.write(`Categoria Sênior leve`)
} else if (idade >= 17 && idade <= 24 && peso > 45 && peso <= 60) {
    document.write(`Categoria Sênior médio`)
} else if (idade >= 17 && idade <= 24 && peso > 60) {
    document.write(`Categoria Sênior pesado`)
} else if (idade > 24){
    document.write(`Categoria Veterano`)
}