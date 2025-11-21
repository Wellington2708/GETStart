let animals = ["Lion", "Cat", "Dog", "Rabbit"];
for(let i = 0 ; i < animals.length; i++){
    console.log(animals[i]);
    
}

let filter = animals.filter((word)=> word.includes("a"));
console.log(animals);
console.log(filter);

//Matrix

let cars = [
    ["Chevrolet", "Prata", 1998],
    ["Ferrari", "Vermelho", 2025],
    ["BMW", "Cinza", 2022],
    ["Mercedes", "Preta", 2024],
]

for(let i = 0; i < cars.length; i++){
    console.log(cars[i][2]);
}