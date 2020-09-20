/* function pulaLinha() {
  document.write("<br>");
}; */

function mostra(frase) {
  document.write(`${frase} <br>`);
  pulaLinha();
};

function sorteia(n) {
  return Math.round(Math.random() * 10);
}

var numeroPensado = sorteia();
var chute = prompt('Já pensei. Qual você acha que é?');

if (isNaN(chute)) {
  mostra('Somente números são válidos.');
} else if (chute == numeroPensado) {
  mostra(`Uau! Você acertou, pois eu pensei no ${numeroPensado}`)
} else {
  mostra(`Você errou! Eu tinha pensado no ${numeroPensado}`)
  if (chute > numeroPensado) {
    mostra(`${chute} é maior que ${numeroPensado}`)
  } else {
    mostra(`${chute} é menor que ${numeroPensado}`)
  }
}

