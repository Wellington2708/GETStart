// Operadores lógicos

// AND

let ageClient = 18;
let visaPermit = true;
let canTravel = ageClient >= 18 && visaPermit == true;

console.log("O cliente pode viajar? " + canTravel);

// OR

ageClient = 17;
visaPermit = true;
canTravel = ageClient >= 18 || visaPermit == true;

console.log("O cliente pode viajar? " + canTravel);

// NOT

let weather = "chuva";
let oClock = 8;
let result = ((weather !== "chuva") && (oClock > 6));
console.log(result);

result = !((weather !== "chuva") && (oClock > 6));
console.log(result);



let valor = true && false
console.log(valor);
