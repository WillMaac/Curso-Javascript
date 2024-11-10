//Usando negação para declarar false ou true//

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

   //Valores true//
isAtivo = 1;
console.log(!!isAtivo);
console.log("os verdadeiros..");
console.log(!!3);
console.log(!!-1);
console.log(!! '');
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

    //Valores false
    console.log("Valores false");
    
    console.log(!!0);
    console.log(!!"");
    console.log(!!null);
    console.log(!!NaN);
    console.log(!!undefined);
    console.log(!!(isAtivo = false));
    
    console.log(!!("" || null || 0 || ""));
        //Caso a vaviavel nome não receber nem um dado sera usado desconhecido no sistema//
    let nome = "";
    console.log(nome || "Desconhecido");
    







