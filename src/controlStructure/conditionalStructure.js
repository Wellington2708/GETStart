// IF

let buyEggs = true;

if(buyEggs){
    console.log("Ovos comprados");
}

let nameClient = "";

if(nameClient == "Marcos"){
    console.log("Olá, " + nameClient);
}

if(nameClient == ""){
    nameClient = "Josefina";
}

console.log("Olá " + nameClient);

// ELSE

let haveEggs = false;
let purchasedItems = "";

if(haveEggs){
    purchasedItems = "leite"
} else {
    purchasedItems = "ovos"
}

console.log(`Ele comprou ${purchasedItems}.`);

// ELSE IF

let hungerLevel = 3;

if(hungerLevel === 1){
    console.log("Você está com pouca fome");
} else if(hungerLevel === 2){
  console.log("Você está com fome mediana");
} else if(hungerLevel === 3){
    console.log("Você está com muita fome");
} else {
    console.log("Morreu de fome.");
}
