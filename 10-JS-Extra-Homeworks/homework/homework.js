// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // return Object.entries(objeto);
  const arr = [];
  for (const key in objeto){
    arr.push([key,objeto[key]]);
  }
  console.log(arr);
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // const obj = {};
  // var letter = /[A-Z]+/gi;
  // var match = string.match(letter);
  const arr = Array.from(string);
  const acc = {};
  return arr.reduce((acc,current) => {
    if (!acc.hasOwnProperty(current)){
      return {
        ...acc,
        [current]: 1
      }
    }
    return {
      ...acc,
      [current]: acc[current]+1
    }
  },acc)

  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const arr = s.split("");
  const mayus = [];
  const minus = [];
  arr.filter((letra) => {
    if (letra.toUpperCase() !== letra){
      return minus.push(letra);
    }
    return mayus.push(letra);
  })
  return mayus.concat(minus).join("");




}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
const words = str.split(" ");
const filtro = words.map((elem) => {
  return  elem.split("").reverse().join("");
});
const mirror = filtro.join(" ");
return mirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var str = numero.toString();
var arr = Array.from(str);
var revesarr = arr.reverse();
var reves = revesarr.join("");
console.log(str,arr,revesarr,reves)
if (reves == numero){
  return "Es capicua";
}
return "No es capicua";

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arr = Array.from(cadena);
  const filtro = arr.filter((elem) => {
    return elem !== "a"&& elem !== "b"&& elem !== "c"
  })
  console.log(filtro)
  return filtro.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
return arr.sort((a,b) => a.length - b.length)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const interseccion = arreglo1.filter(elemento => arreglo2.includes(elemento));

  return interseccion;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

