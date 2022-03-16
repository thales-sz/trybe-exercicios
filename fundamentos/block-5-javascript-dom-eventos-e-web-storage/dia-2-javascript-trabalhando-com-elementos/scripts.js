document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'green';

console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild);

document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerHTML = 'Adicionando texto como solicitado no exercicio!';

console.log(document.querySelector('#pai').firstElementChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

const pai = document.querySelector('#pai');
const exercicio2 = document.createElement('section');
exercicio2.id = 'exercicio2';
pai.appendChild(exercicio2);

let ondeEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta/exercicio3';
ondeEsta.appendChild(filhoOndeVoceEsta);

let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho/exercicio4';
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);

console.log(filhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling);
