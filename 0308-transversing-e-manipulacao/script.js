// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);
copy.appendChild(novoMenu);

// Correção
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');

// const cloneMenu = menu.cloneNode(true);
// copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista');
const firstDt = faq.children[0];
console.log(firstDt);

// Correção
// const faq = document.querySelector('faq');
// const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const dd = firstDt.nextElementSibling;
console.log(dd);

// Correção
// const proximoDD = primeiroDt.nextElementSibling;
// console.log(proximoDD);


// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.parentElement.replaceChild(animais, faq);

// Correção
// const animais = document.querySelector('.animais');
// faq.innerHTML = animais.innerHTML;
