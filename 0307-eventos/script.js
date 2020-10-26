// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');
console.log(links);

function addAtivo(event) {
  event.preventDefault();
  event.target.classList.toggle('ativo');
  console.log(event.currentTarget);
};

links.forEach((link) => {
  link.addEventListener('click', addAtivo);
});

// Correção

const linksInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linksInternos);

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTagert.classList.add('ativo');
};

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');
// console.log(allElements);

function mostraElement(element) {
  element.preventDefault();
  // console.log(element.currentTarget);
  element.currentTagert.remove();
};

allElements.forEach((element) => {
  element.addEventListener('click', mostraElement);
});

// Correção

const todosElementos = document.querySelectorAll('body *');
// console.log(todosElementos);

function handleElemento(event) {
  console.log(event.currentTarget);
};

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Correção;
function handleElemento(event) {
  event.currentTarget.remove();
};

//Se o usuário clicar na tecla(t), aumente todo o texto do site.

Correção

function handleClickT(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', handleClickT);