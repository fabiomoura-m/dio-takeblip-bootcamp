//Crie uma função que recebe dois números como parâmetros.
//Confira se os números são iguais.
//Confira se a soma dos números é maior que 10 ou menor que 20.
//Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
//Ex:
//Input: 1, 2
//Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

// Minha resolução
function compararNumeros(num1, num2) {
  let soma = num1 + num2;
  let saoIguais = num1 === num2;
  if (saoIguais && soma < 10) {
    console.log(
      `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`
    );
  } else if (saoIguais && soma > 10 && soma < 20) {
    console.log(
      `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior que 10 e menor que 20`
    );
  } else if (saoIguais && soma > 20) {
    console.log(
      `Os números ${num1} e ${num2} são iguais. Sua soma é ${soma} que é maior que 10 e maior que 20`
    );
  } else if (!saoIguais && soma < 10) {
    console.log(
      `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`
    );
  } else if (!saoIguais && soma > 10 && soma < 20) {
    console.log(
      `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`
    );
  } else if (!saoIguais && soma > 20) {
    console.log(
      `Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`
    );
  }
}
// compararNumeros(15, 10);

//Resolução da Stephany

function comparaNumeros(num1, num2) {
  if (!num1 || !num2) {
    return 'Defina dois números';
  }
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = '';

  if (num1 !== num2) {
    saoIguais = 'não';
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}
function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = 'menor';
  let resultado20 = 'menor';
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = 'maior';
  }

  if (compara20) {
    resultado20 = 'maior';
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(1, 1));
