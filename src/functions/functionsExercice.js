function getFirstName(name, splitChar = " "){
    let firstName = name.split(splitChar)[0];
    return firstName;
}


let userName = getFirstName("Wellington Junior")
console.log(`Welcome to my Github, ${userName}!`);

userName = getFirstName("Juan-Carlo", "-");
console.log(`Welcome to my Github, ${userName}!`);