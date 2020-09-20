function mostra(frase) {
  document.write(`${frase} <br>`);
};

var anoComoTexto = prompt('Informe o ano inicial');
var anoDeCopa = parseInt(anoComoTexto);

var anoLimite = prompt('Qual o ano limte?');
parseInt(anoLimite);

// var anoDeCopa = 1930;

while (anoDeCopa <= anoLimite) {
  mostra(`${anoDeCopa} tem Copa!`);
  anoDeCopa += 4;
}

mostra(`Ufa esses foram os anos de copa até 2014`);

