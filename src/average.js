/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const itsANumbers = (array) => {
  let numbers = [];
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return false; 
    }
  }
  return true;
};

const roundNumber = (array) => {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(Number(array[index].toFixed()));
  }
  return newArray;
};

const media = (array) => {
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    soma += array[index];
  }
  return Number((soma / array.length).toFixed());
};

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  if (!itsANumbers(array)) {
    return undefined;
  }
  let round = roundNumber(array);
  let resultado = media(round);
  return resultado;
};

module.exports = average;
