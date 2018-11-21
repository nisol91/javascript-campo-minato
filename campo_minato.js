/*Il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all’utente di inserire un numero da 1 a
100 alla volta, se il numero è presente nella lista dei numeri
generati, la partita termina, altrimenti continua chiedendo
all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero
“vietato” o raggiunge il numero massimo possibile di numeri
consentiti.
Al termine della partita il software deve comunicare il punteggio,
cioè il numero di volte che l’utente ha inserito un numero
consentito.

BONUS: all’inizio il software richiede anche una difficoltà
all’utente che cambia il range di numeri casuali.
Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
difficoltà 2=> da 1 a 50*/



function array_random(numbers, difficulty) {

  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }

  if (difficulty == 0) {
    massimo = 100;
  } else if (difficulty == 1) {
    massimo = 80;
  } else if (difficulty == 2) {
    massimo = 50;
  } else if (difficulty == 3) {
    massimo = 20;
  } else {
    alert('errore')
  }
  console.log(massimo);

  var array_rand = [];
  /*qui non posso usare for perche no e' detto che debba ciclare 16 volte, perche se uso for si stoppa appena c e un numero doppio e l array risulta piu corto di 16*/
  while (array_rand.length < numbers) {
    var rand = random_int_number(1, massimo);
    // console.log(rand);
    if (!array_rand.includes(rand)) {
      array_rand.push(rand);
    }
  }
  return array_rand
}
// -------------------------------------
var numeriCPU = array_random(16, parseInt(prompt('Inserisci una difficoltà')));
console.log(numeriCPU);
var count = [];
// var numeroUtente = parseInt(prompt('Inserisci un numero'))
// -------------------------------------
while (!numeriCPU.includes(numeroUtente) && count.length < (massimo - 16 - 1)) {
  var numeroUtente = parseInt(prompt('Inserisci un numero'));
  if (numeroUtente > massimo) {
    /*qui credo di aver usato massimo come variabile globale, perche non l ho mai definita con var, ne dentro la funzione ne fuori,
    e infatti cosi facendo quando scrivo massimo fuori dalla funzione e' la stessa variabile che dentro la funzione e la riconosce.
    E' globale e quindi e' la stessa ovunque.*/
    alert('errore, hai inserito un numero troppo elevato')
  }

  if (count.includes(numeroUtente)) {
    alert('errore, numero ripetuto due volte')
  }

  count.push(numeroUtente);
  console.log(numeroUtente);
  console.log(count);
}

console.log(count);
var tentativi = count.length;

if (tentativi >= (massimo - 16)) {
  document.getElementById('result').innerHTML = 'Hai vinto! Hai utilizzato il numero max di tentativi: ' + (massimo - 16);
} else {
  document.getElementById('result').innerHTML = 'Hai perso. Numero di tentativi: ' + tentativi;
}
