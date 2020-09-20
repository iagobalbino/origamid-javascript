function mostra(frase) {
  document.write(`${frase} <br>`);
};

for (var linha = 0; linha < 10; linha++) {
  for (var coluna = 0; coluna < 10; coluna++) {
    document.write('');
  }
  document.write('<br>');
}