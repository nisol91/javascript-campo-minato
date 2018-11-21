
function array_random_20() {
  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }
  var array_rand = [];
  for (var i = 0; i < 5; i++) {
    array_rand.push(random_int_number(0, 20));
  }
  return array_rand

}

var numbers = array_random_20();

var somma = 0;
for (var i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    somma = somma + numbers[i];
  }
}
console.log(somma);
document.getElementById('array').innerHTML = numbers;
document.getElementById('result').innerHTML = somma;
