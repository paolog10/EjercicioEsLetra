let letter = 10.8;

const isLetter = isItLetter(letter);
console.log(`It is a letter: ${isLetter}`);

function isItLetter(letter) {
  let arrayMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let arrayMayusculas = arrayMinusculas.map(l => l.toUpperCase()) 
  let arrayUnido = arrayMinusculas.concat(arrayMayusculas)

  const isLetter = arrayUnido.includes(letter);
  
  return isLetter;
}