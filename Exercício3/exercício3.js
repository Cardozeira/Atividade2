// Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.
const numero = prompt("Digite um número")
if (numero > 0) {
    document.write(`O número ${numero} é positivo` )
}else if (numero < 0) {
    document.write(`O número ${numero} é negativo` )
}else {
    document.write(`O número é zero`)
}
