/*Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide 
y mostrarla en la consola.*/
export function pyramid(numFloor) {
  for (let i = 0; i < numFloor; i++) {
    let piso = '';
    for (let j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }
    console.log(piso);
  }
}

/*Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números.
Por parámetros se indicara la longitud, con un minimum de 6 caracteres.*/
export function watchWord(long) {
  const cara = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let pass = '';
  if (long < 6) {
    return 'Necesita al menos 6 caracteres';
  }
  long = Math.max(long, 6);
  for (let i = 0; i < long; i++) {
    const randomIndex = Math.floor(Math.random() * cara.length);
    pass += cara[randomIndex];
  }
  return pass;
}

/*Crea una función que filtre un array de nombres y devuelva solo los nombres con menos de cierta longitud.*/
export function longName(nam, length) {
  return nam.filter(function (nom) {
    return nom.length < length;
  });
}

/*Crea una función que sume todos los números de un array y devuelva también la media, mediana, moda y la suma total.*/

/*Crea una función que cuente la cantidad de palabras en una frase.*/
export function wordCount(phrase) {
  return phrase.trim().split(/\s+/).length;
}

/*Crea una función que ordene un array de nombres alfabéticamente.*/
export function wordOrder(nombres) {
  return nombres.sort();
}
/*Generador de números pares e impares: Escribe una función que tome un número como argumento y
genere dos arrays, uno con los números pares hasta ese número y otro con los números impares hasta ese número.*/
export function parImpar(num) {
  const pares = [];
  const impares = [];
  for (let i = 1; i <= num; i++) {
    if (pares % 2 === 0) {
      pares.push(i);
    } else {
      impares.push(i);
    }
  }
  return [pares, impares];
}
const [pares, impares] = parImpar(10);
console.log(pares);
console.log(impares);
/*Crea una función que reciba un texto en kebab-case y devuelva el texto escrito en camelCase. 
La función debe realizar las siguientes comprobaciones sobre el texto recibido:
p
Si tiene alguna mayúscula, debe devolver "The text contains capital letters"
Si tiene algún guion bajo, debe devolver "The text contains underscores"
Si el texto está vacío, debe devolver "You must provide some text"*/

/*Desafíos adicionales*/
/*Crea una función que reciba un texto en camelCase y devuelva el texto escrito en 
kebab-case, en snake_case, en camelCase y en PascalCase...*/

/*Crea una función que reciba un texto y devuelva el mismo texto con todas las vocales acentuadas reemplazadas por 
vocales sin acentuar y todas las vocales sin acentuar reemplazadas por vocales acentuadas.*/

/*Crea una función que reciba un texto y devuelva el mismo texto con todas las letras en 
mayúsculas y todas las letras en minúsculas intercambiadas*/
