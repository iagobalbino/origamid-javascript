function pulaLinha() {
  document.write("<br>");
};
function mostra(frase) {
  document.write(frase);
  pulaLinha();
};

function calculaIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
};

var imc = Math.round(calculaIMC(1.68, 70));

document.write(`Meu IMC é ${imc} estou distante ${imc - 35} pontos da obesidade severa.`);
