
function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}


function array_random_20_10() {
  var array_rand = [];
  for (var i = 0; i < 10; i++) {
    array_rand.push(random_int_number(0, 20));
  }
  return array_rand

}
function array_random_20_5() {
  var array_rand = [];
  for (var i = 0; i < 5; i++) {
    array_rand.push(random_int_number(0, 20));
  }
  return array_rand

}

var numbers1 = array_random_20_10();
var numbers2 = array_random_20_5();


console.log(numbers1);
console.log(numbers2);

function equal_arr(arr1, arr2) {
  while (arr2.length < arr1.length) {
    arr2.push(random_int_number(100, 200));
  }
  return arr2
}

var result = equal_arr(numbers1, numbers2);
console.log(result);
document.getElementById('result').innerHTML = result;
