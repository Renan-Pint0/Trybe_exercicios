//Questão 01 - Calcular um fatorial//

let factorial = 10;
let result = 1;
for (let index = 1; index <= factorial; index+= 1) {
    result = result*index;
}
console.log(result);

// Questão 02 - Inverter uma palavra//

let word = 'renan'
let inverso = [];
for (let index = word.length - 1; index >= 0; index-= 1) {
   inverso.push(word[index]);
} 
var resultado = inverso.toString()
console.log(resultado);   

// Questão 3 -  //