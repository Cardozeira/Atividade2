// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.
let custoDefabrica = Number (prompt (" Qual o valor do carro?" ))
let percentualDistribuidor = (custoDefabrica * 28)/100
let percentualImposto = (custoDefabrica * 45)/100
let custoFinal = custoDefabrica + percentualDistribuidor + percentualImposto
document.write (`O custo final ao consumidor é: ${custoFinal}  <br>` )
document.write (`${percentualDistribuidor}  <br>` )
document.write (`${percentualImposto}  <br>`) 