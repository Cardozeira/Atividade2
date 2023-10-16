const multa = 5
let valorMulta
const velocidade = Number(prompt(`Digite a Velocidade do carro`))

if (velocidade > 80) {
    valorMulta = (velocidade -80) * multa
    document.write(`Velocidade passou dos 80 km/h, valor da multa R$${valorMulta}`)
}
    
  
