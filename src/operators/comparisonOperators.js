// Exemplos de Operadores relacionais ou comparação

let firstName = "Pedro";
console.log(firstName == "Pedro");
console.log(firstName != "Pedro");
console.log(firstName !== "Pedro");
console.log(firstName === "Pedro");

let number = 2;
console.log(number === "2"); //Avalia também tipo de variável
console.log(number == "2");


let minimumAge = 18;
let userAge = 17;
let licenceDrive = userAge >= minimumAge;
console.log(`O usuário tem permissão para dirigir? ${licenceDrive}`);

userAge = 18;
licenceDrive = userAge >= minimumAge;
console.log(`O usuário tem permissão para dirigir? ${licenceDrive}`);