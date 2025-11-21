let animals = ["Lion", "Cat", "Dog", "Rabbit"];
for(let i = 0 ; i < animals.length; i++){
    console.log(animals[i]);
    
}

let filter = animals.filter((word)=> word.includes("a"));
console.log(animals);
console.log(filter);

