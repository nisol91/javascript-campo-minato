// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.

// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50



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
  for (var i = 0; i < numbers; i++) {
    array_rand.push(random_int_number(1, massimo));
  }
  return array_rand
}
// -------------------------------------
var numeriCPU = array_random(16, parseInt(prompt('Inserisci una difficoltà')));
console.log(numeriCPU);
var numeroUtente = parseInt(prompt('Inserisci un numero'))
if (numeroUtente > massimo) {
  alert('errore')
}
// -------------------------------------
var count = [];
while (!numeriCPU.includes(numeroUtente) && count.length < (massimo - 16 - 1)) {
    numeroUtente = parseInt(prompt('Inserisci un altro numero'));
    count.push(numeroUtente);
    if (count.includes(numeroUtente)) {
      alert('errore, numero ripetuto due volte')
    }
}
console.log(count);
var tentativi = count.length + 1;

if (tentativi >= (massimo - 16)) {
  document.getElementById('result').innerHTML = 'Hai utilizzato il numero max di tentativi: ' + (massimo - 16);
} else {
  document.getElementById('result').innerHTML = 'Hai perso. Numero di tentativi: ' + tentativi;
}
