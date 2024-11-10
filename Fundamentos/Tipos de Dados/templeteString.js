//formas de concatenação//
const frase = "Olá ";
const frase2 = "mundo";
let concatenacao2 = frase + frase2;
console.log(concatenacao2);

const nome = "Will";
const idade = 26;
const concatenacao = "Olá" + nome + "!";
let concatenacao1 = `Olá, ${nome}! você tem ${idade} anos`; // opeção recomendada//
console.log(concatenacao1);

//Expressoes//

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUppperCase()
console.log(`Ei... ${up('cuidado')}!`);



