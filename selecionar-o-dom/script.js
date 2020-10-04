// Retorne no console todas as imagens do site
let todasAsImagens = document.querySelectorAll('img');
console.log(todasAsImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
let linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
let ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);

