function mostra(frase) {
  document.write(`${frase} <br>`);
};

var numeroPensado = parseInt((Math.round(Math.random() * 10)));

var numeroDaTentiva = 1;

while (numeroDaTentiva <= 3 && chute == numeroPensado) {
  var chute = prompt('Já pensei. Qual você acha que é?');
  numeroDaTentiva++;

  console.log(numeroPensado);

  if (chute == numeroPensado) {
    alert('Uau! Você acertou!');
  } else {
    if (numeroPensado < chute) {
      alert('Você errou! Será que ainda tem mais tentativas. Tente um número menor.')
    } else {
      alert('Você errou! Será que ainda tem mais tentativas. Tente um número maior.')
    }
  }
}

/*
Pág 85, não consegui resolver
4) Há uma forma de escrever esse nosso jogo sem utilizar o break, apenasmudando
a condição do while, adicionando mais uma clausula através do operador que
significa E (o &&). Consegue adivinhar como? */