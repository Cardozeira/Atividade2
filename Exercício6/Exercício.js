const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));
const opercao = prompt("Escolha uma operação (+ - * /)");
let conta;

switch (opercao) {
    case "+":
        conta = numero1 + numero2;
        break;
    case "-":
        conta = numero1 - numero2;
        break;
    case "*":
        conta = numero1 * numero2;
        break;
    case "/":
        conta = numero1 / numero2;
        break;
    default:
        document.write("Operação inválida, selecione as opções (+ - * /)");
}
document.write(`O resultado é ${conta}`);