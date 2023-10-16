const dia= prompt("Digite um numero de 1 a 7")

switch(dia){
    case "1":
        document.write("Segunda-feira")
        break;
    case "2":
        document.write("Terça-feira")
        break;
    case "3":
        document.write("Quarta-feira")
        break;
    case "4":
        document.write("Quinta-feira")
        break;
        case "5":
        document.write("Sexta-feira")
        break;
    case "6":
        document.write("Sabado")
        break;
    case "7":
        document.write("Domingo")
        break; 
        default:
    document.write("Numero invalido, digite um numero de 1 a 7")
}