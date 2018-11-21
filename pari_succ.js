//inserisci un numero, se e' pari stampalo, se e' dispari stampa il successivo

var numero = parseInt(prompt('Inserisci un numero'));


function pari_dispari(n) {

  var ris = false;

  if (n % 2 == 0) {
    ris = true;
  }
  return ris
}


// if (pari_dispari(numero) == true) {
//   console.log(numero);
//   document.getElementById('result').innerHTML = numero;
// } else {
//   console.log(numero + 1);
//   document.getElementById('result').innerHTML = numero + 1;
// }

switch (pari_dispari(numero)) {
  case true:
  console.log(numero);
  document.getElementById('result').innerHTML = numero;
    break;
  default:
  console.log(numero + 1);
  document.getElementById('result').innerHTML = numero + 1;
}
