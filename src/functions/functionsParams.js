main();
// função main por convenção é o ponto de entrada do programa
function main(){
    toWriteMessage("Estou aprendendo ", "funções com parâmetros!");
    toAdd(20,30);

}

/*O parâmetro mensagem 3 = "OLá pessoal" se torna um argumento padrão. 
Caso a função seja chamada sem o terceiro argumento, ele assume esse valor. */
function toWriteMessage(menssage1, menssage2, menssage3 = "Olá pessoal! "){
    let phrase = menssage3 + menssage1 + menssage2; 
    console.log(phrase);

}

// Função que recebe dois números como parâmetros e exibe a soma deles
function toAdd(number1, number2) {
    let sum = number1 + number2;
    console.log(`A soma de ${number1} e ${number2} é igual a ${sum}`);
}









