const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);

console.log(Number.isInteger(peso1)); //Serve para saber se um número é inteiro ou não//

console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Serve para diminuir a quantidade de casa decimais o numero 2 significa a quantidade de casas//

console.log(media.toString(2));
console.log( typeof media);
console.log(typeof Number); // Nesse caso o Number passa a ser uma funtion por causa da função Number.isInteger(peso2). //




