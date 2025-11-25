function multiply(factor1, factor2) {
  let resultFunction = factor1 * factor2;
  console.log(`O valor que a função retornou foi ${resultFunction}`);
  return resultFunction;
}

function result() {
  let resultReturnFunction = multiply(3, 4);
  console.log(
    `O valor da variavel resultReturnFunction sendo atribuida pela função multiply é ${resultReturnFunction}`
  );
  console.log(
    "Resumo da lógica: Criei a função multiply que recebe dois parâmetros e que retorna o valor multiplicado. Depois, chamei a função multiply dentro da função result, atribuindo seu retorno à variável resultReturnFunction e exibindo esse valor no console. E por fim chamei a função result para executar todo o processo. Observação: Código criado apenas para entendimento do retorno. Observar que pode conter erros de boa práticas"
  );
}

result();

