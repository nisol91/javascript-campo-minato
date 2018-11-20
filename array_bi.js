var bidimensionale = [
 ['Michele', 'Fabio', 'Roberto']
];

console.log(bidimensionale[0][2]);//roberto

var multidim = [
  [
    ['Michele', 'Fabio', 'Roberto']
  ]
]

console.log(multidim[0][0][1]);//fabio


// var multidimensionale = [
//   ['Michele', 'Beppe', 'Anna', 'Luca', 'Andrea'],
//   ['Michele', 'Fabio', 'Roberto', 'Luca', 'Andrea']
//  // 1,
//  // true,
//  // 'ciao'
// ];
//
// //NB gli array multidimensionali sono un po pericolosi perche se ci sono dentro numeri o booleani o stringhe e non array
// //non riesco a ciclare come fa qua sotto. Infatti si usano gli OGGETTI al posto degli array multidimensionali.
// for (var i = 0; i < multidimensionale.length; i++) {
//   // console.log(multidimensionale[i]);
//   for (var i = 0; i < multidimensionale[i].length; i++) {
//     console.log(multidimensionale[i]);
//   }
// }




// var multidimensionale = [
//   ['Michele', 'Beppe', 'Anna', 'Luca', 'Andrea'],
//   ['Francesco', 'Fabio', 'Roberto', 'Luca', 'Andrea'],
//   ['Mario', 'Fabio', 'Roberto', 'Luca', 'Andrea'],
//   ['Luca', 'Fabio', 'Roberto', 'Luca', 'Andrea'],
//   ['Riccardo', 'Fabio', 'Roberto', 'Luca', 'Andrea'],
// ];
// for (var i = 0; i < multidimensionale.length; i++) {
//   // console.log(multidimensionale[i]);
//   for (var i = 0; i < multidimensionale[i].length; i++) {
//     console.log(multidimensionale[i]);
//   }
// }

var cubes = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

for(var i = 0; i < cubes.length; i++) {
    for(var j = 0; j < cubes[i].length; j++) {
        console.log(cubes[i][j]);
    }
}
