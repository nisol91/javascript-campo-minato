var array = [];
var somma = 0;
var i = 0;
while (somma < 50) {
  array.push(parseInt(prompt('Inserisci un numero')));
  somma = somma + array[i];
  // console.log(array[i]);
  console.log(somma);
  i++
}
console.log(array);
// console.log(somma);
document.getElementById('array').innerHTML = 'Array ' + array;
document.getElementById('result').innerHTML = 'Somma ' + somma;
