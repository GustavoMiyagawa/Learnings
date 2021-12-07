// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, hight) {
  return (base * hight) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = [];
  word = sentence.split(' ');
  return word;
}

// Desafio 4
function concatName(param) {
  let names = String;
  names = `${param[param.length - 1]}, ${param[0]}`;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(higherNumber) {
  let number = Math.max(...higherNumber);
  let score = 0;
  for (let index = 0; index < higherNumber.length; index += 1) {
    if (number === higherNumber[index]) {
      score += 1;
    }
  }
  return score;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let blend = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 15 === 0) {
      blend.push('fizzBuzz');
    }
    if (blend[index] !== 'fizzBuzz') {
      if (numbers[index] % 3 === 0) {
        blend.push('fizz');
      } if (numbers[index] % 5 === 0) {
        blend.push('buzz');
      } if (blend[index] !== 'fizz' && blend[index] !== 'buzz') {
        blend.push('bug!');
      }
    }
  }
  return blend;
}

// Desafio 9
function encode(text) {
  let word = text.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}
function decode(text) {
  let word = text.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
}

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
};
