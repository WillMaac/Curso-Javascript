/* Descrição: Escreve uma função que receba três números e retorne o maior entre eles.
Objetivo: Praticar estruturas condicionais (if, else if, else).
javascript*/

function numeros(n1, n2, n3) {
if(n1 >= n2 && n1>= n3) return n1;

else if(n2 >= n1 && n2>= n3) return n2;
    return n3;
}

let resultado = numeros(10, 12, 20)
console.log(resultado);
