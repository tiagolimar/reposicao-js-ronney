// declaração de variável

// var - modo antigo de declarar variáveis

// let - modo novo de declarar variáveis, permite reatribuição

// const - modo novo de declarar variáveis, não permite reatribuição

let nome = 'Tiago';
console.log(nome);
nome = 'Ronney';
console.log(nome);

const idade = 30;
console.log(idade);
// idade = 31; Erro: Assignment to constant variable.

// Sobre strings

console.log("Pode ser com aspas duplas")
console.log('Pode ser com aspas simples')
console.log(`Escrve alguma coisa aqui ${nome}`)

// Comparador de igualdade

// == - comparação de valor
// === - comparação de valor e tipo


// Conversão para inteiro

let n1 = '10';
n1 = parseInt(n1);
n2 = parseFloat(n1);
n3 = Number(n1);
n4 = +n1;


// Verificação de número

let numero = 10;

typeof(numero) == 'number' && Number.isNaN(numero)

// Operadores - Resto da divisão

let divisao = 10/3; // 3.3333333333333335
let divisaoInteira = 10/3 | 0; // 3
let resto = 10 % 3; // 1

let ePar = 3 % 2 == 0; // false

// Operadores Ternários

let num1 = 3;

num1 % 2 == 1 ? console.log('É ímpar') : console.log('É par')