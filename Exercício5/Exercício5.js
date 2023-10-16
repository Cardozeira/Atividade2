const altura = Number(prompt("Digite sua altura em metros"));
const peso = Number(prompt("Digite o seu peso em kg"));

let imc = peso / altura ** 2;

document.write(imc.toFixed(2));

if (imc < 18.5) {
    document.write("Você está abaixo da faixa de peso ideal");
} else if (imc > 24.99) {
    document.write("Você está acima da faixa de peso ideal");
} else if(imc == 18.5 || imc > 18.5){
    document.write("Você está dentro da faixa de peso ideal");
}