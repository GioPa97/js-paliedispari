/*Esercizio di oggi: Palindroma / Pari e Dispari 
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno:
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/

//Chiedo una parola all'utente attraverso prompt e la stampo in console;


let pariDispari = true;
let scelta = true;

while (pariDispari) {

  let scelta = prompt("pari o dispari?");
  

  if (!isNaN(scelta)) {

    console.log("Inserisci pari o dispari");

  } else {

    switch (scelta) {
      case "pari":
        pariDispari = false;
        console.log("Hai scelto: Pari");
        break;
      case "dispari":
        pariDispari = false;
        console.log("Hai scelto: Dispari");
        break;
    }
  }
}

let numeroUtente = (0);

do {
  numeroUtente = parseInt(prompt("inserisci un numero compreso tra 1 e 5:"));
} while (!(numeroUtente >= 1 && numeroUtente <= 5)) {
  console.log("Hai scelto: " + numeroUtente);

}




// Salvo in una variabile il numero generato dalla funzione pcRandomizer.

let pcNumber = pcRandomizer(1, 5);
console.log("Il pc ha scelto: " + pcNumber);

// Stampo la somma tra il numero dell'utente e quello del pc.
let somma = numeroUtente + pcNumber;
console.log("La somma tra i due numeri è: " + somma);

// Verifico se il numero generato dalla somma tra utente e pc è pari o dispari.
if (somma % 2 == 0) {
  console.log('La somma è pari.');
  // altrimenti
} else {
  console.log('La somma è dispari.');
}

if (scelta == "pari" && somma % 2 == 0) {
  console.log("Hai vinto!");
} else if (scelta == "pari" && somma % 2 == 1) {
  console.log("Ha vinto il computer!:( ");
} else if (scelta == "dispari" && somma % 2 == 0) {
  console.log("Ha vinto il computer!");
} else {
  console.log("Hai vinto!");
}





//-------------------------------FUNZIONI DICHIARATE--------------------------------------


function pcRandomizer(min, max) {
  return Math.floor(Math.random() * (max) + min);
}



  //-------------------------------FUNZIONI DICHIARATE--------------------------------------