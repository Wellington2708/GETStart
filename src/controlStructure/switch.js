// switch / case / break / default

let iLike = "Eu gosto de ";
let fruit = "laranja";

switch (fruit) {
  case "banana":
    console.log(iLike + fruit);

    break;
  case "maçã":
    console.log(iLike + fruit);
    break;
  case "laranja":
    console.log(iLike + fruit);
    break;
  case "morango":
    console.log(iLike + fruit);
    break;
  case "tangerina":
    console.log(iLike + fruit);
    break;
  default:
    console.log(fruit + " não está na lista");
    break;
}


// Outra possibilidade para o uso do Switch

let sports = "Ping pong"

switch (sports) {
    case "corrida":
    case "natação":
        console.log("Competição de velocidade");
        break
    case "futebol":
    case "basquete":
    case "vôlei":
        console.log("Esporte praticado com bola");
        break
    case "judô":
    case "karatê":
        console.log("Esporte de luta");
        break
    default:
        console.log("Seu esporte não é interessante");    
        break;

}

