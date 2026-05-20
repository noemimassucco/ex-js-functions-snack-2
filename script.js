//SNACK 1


//Crea una funzione dichiarativa chiamata somma that 
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



//------------------------------------------------------------------------------------

//SNACK2

//Crea una arrow function che calcola il quadrato di un numero.
//Definisci una funzione chiamata quadrato
 //che accetta un numero e restituisce il suo quadrato in una sola riga.

 const numeroQuadrato = (numero) => {
    return numero * numero 
 }

//==========================================================================================

//snack3

//Definisci una funzione eseguiOperazione 
// che accetta tre parametri: due numeri e una funzione operatore 
// (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const moltiplica = (a, b,) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b)


