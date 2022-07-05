// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
  let stringName = arrayDeStrings[arrayDeStrings.length - 1 ] + ', ' + arrayDeStrings[0];
  return stringName;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pointsWin = 3;
  const pointsTies = 1;
  let totalPoints = pointsWin * wins + pointsTies * ties;
  return totalPoints;
}

// Desafio 6

function highestCount(numbers) {
  let count = 0;
  let numbersOrdenados = numbers.sort(function (a, b) { return a - b; });
  for (let index in numbers) {
    if (numbersOrdenados[numbersOrdenados.length - 1] === numbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mensagem = '';
  let distCat1 = mouse - cat1;
  distCat1 = Math.abs(distCat1);
  let distCat2 = mouse - cat2;
  distCat2 = Math.abs(distCat2);
  if (distCat1 < distCat2) {
    mensagem = 'cat1';
  } else if (distCat1 === distCat2) {
    mensagem = 'os gatos trombam e o rato foge';
  } else { mensagem = 'cat2'; }
  return mensagem;
}

// Desafio 8
// function ajudaFizz(numeros2) {
//  if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
//    newArray.push('fizzBuzz');
//  }
//  else if (numeros[indice] % 3 === 0) {
//    newArray.push('fizz');
//  }
//  else if (numeros[indice] % 5 === 0) {
//    newArray.push('buzz');
//  }
//  else {newArray.push('bug!');}
// }

// function fizzBuzz(numeros) {
//  let newArray = [];
//  for (let indice in numeros) {
//   }
// return newArray;
// }

function fizzBuzz(numeros) {
  let newArray = [];
  for (let indice in numeros) {
    if (numeros[indice] % 3 === 0 && numeros[indice] % 5 === 0) {
      newArray.push('fizzBuzz');
    }
    else if (numeros[indice] % 3 === 0) {
      newArray.push('fizz');
    }
    else if (numeros[indice] % 5 === 0) {
      newArray.push('buzz');
    }
    else {newArray.push('bug!');}
  }
  return newArray;
}

// Desafio 9

function encode(frase) {
  let vogaisCode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodeFrase = '';
  for (let i = 0; i < frase.length; i += 1) {
    let temVogal = vogaisCode[frase[i]];
    if (typeof (temVogal) === 'number') {
      encodeFrase += temVogal;
    } else { encodeFrase += frase[i]; }
  }
  return encodeFrase;
}

console.log(encode("hi there!"));

function decode(fraseComNumeros) {
  let vogaisUncode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodeFraseComNumeros = '';
  for (let i = 0; i < fraseComNumeros.length; i += 1) {
    if (fraseComNumeros[i] <= 5 && fraseComNumeros[i] >= 1) {
      decodeFraseComNumeros += vogaisUncode[fraseComNumeros[i]];
    } else { decodeFraseComNumeros += fraseComNumeros[i]; }
  }
  return decodeFraseComNumeros;
}

console.log(decode('h3 th2r2!'));

// Desafio 10
let objeto = {
  tech: ['React', 'Jest', 'HTML', 'CSS', 'JS'],
  name: 'Lucas',
};

let newObjeto = [];
let objetoOrdenado = [];

function ordenarObjeto (objeto) {
  objeto[tech].sort;
  
}

function techList(objeto) {
  for (let key in objeto.tech) {
    newObjeto.push({
      tech: objeto.tech[key],
      name: 'Lucas',
      });
    }
      return newObjeto;
}

techList(objeto);
console.log(newObjeto);

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
