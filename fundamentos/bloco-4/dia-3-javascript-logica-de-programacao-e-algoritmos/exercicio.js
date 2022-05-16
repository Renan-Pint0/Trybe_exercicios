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
let array = ['java', 'javascript', 'python', 'html', 'css'];
//console.log(array[0])
let maior = 0;
let menor = array[0].length;
let pMaior;
let pMenor;
for (let index = 0; index < array.length; index+=1) {
    if (array[index].length > maior) {
        pMaior = array[index];
        maior = array[index].length;
    }
}
for (let index = 0; index < array.length; index+=1) {
    if (array[index].length < menor) {
        pMenor = array[index];
        menor = array[index].length;
    }
}
    console.log(pMaior);
    console.log(pMenor);