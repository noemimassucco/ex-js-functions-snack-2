//Crea una funzione dichiarativa chiamata somma che 
// accetta due numeri e restituisce la loro somma.

const numero1 = 7;
const numero2 = 1000;

function somma(numero1,numero2) {
    return numero1 + numero2;
}

//Poi, definisci la stessa funzione somma ma come 
// funzione anonima assegnata a una variabile

const sommaAnonima = function (numero1, numero2) {
    return numero1 + numero2;
};
 


//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const sommaArrow = (numero1, numero2) => {
    return numero1 + numero2;
}   

console.log(sommaAnonima(numero1, numero2)); // Output: 7