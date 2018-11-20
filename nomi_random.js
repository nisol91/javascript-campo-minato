//nomi e cognomi generati da due array. possono essere generati piu di una volta gli stessi nomi e cognomi.

var listaNomi = ['Luca', 'Marco', 'Andrea', 'Anna', 'Giulia', 'Matteo', 'Riccardo'];

var listaCognomi = ['Rossi', 'Bianchi', 'Ferrari', 'Bocchi', 'Feltri', 'Raggi'];


function nomi_cognomi_random(nomi, cognomi) {
for (var i = 0; i < 10; i++) {

    function random_int_number(min, max) {
      return Math.floor(Math.random() * (max - min +  1) + min);
    }


    var nomeRand = nomi[random_int_number(0, (nomi.length - 1))];
    var cognomeRand = cognomi[random_int_number(0, (cognomi.length - 1))];


    console.log(nomeRand);
    console.log(cognomeRand);
    document.writeln(nomeRand + ' ' + cognomeRand + '<br>');

  }
  return
}


var nomi_cognomi = nomi_cognomi_random(listaNomi, listaCognomi)
