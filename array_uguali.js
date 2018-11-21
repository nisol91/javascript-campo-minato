//se un array ha meno posizioni di un altro, aggiungi numeri al piu piccolo finche non ha le stesse dimensioni dell array piu grande

function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}


function array_random(positions, numbers) {
  var array_rand = [];
  for (var i = 0; i < positions; i++) {
    array_rand.push(random_int_number(0, numbers));
  }
  return array_rand

}


var numbers1 = array_random(10, 50);
var numbers2 = array_random(5, 50);


console.log(numbers1);
console.log(numbers2);

function equal_arr(arr1, arr2) {
  while (arr2.length < arr1.length) {
    arr2.push(random_int_number(100, 200));
    console.log(arr2);
  }
  return arr2
}

var result = equal_arr(numbers1, numbers2);
console.log(result);
document.getElementById('array').innerHTML = 'Il primo array ' + numbers1;
document.getElementById('result').innerHTML = 'Il secondo array ' + result;
