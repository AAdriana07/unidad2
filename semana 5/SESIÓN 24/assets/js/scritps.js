// Sintaxis 
/* 
Bucle for: es un bucle finito, porque se indica la cantidad de veces que se debe 
repetir

Sintaxis 

for (inicio; fin; pasos) {
    Bloque de codigo a repetir (INTENTADO)
}

for: Palabra reservada 
inicio: Valor en el cual incia el blucle (let i = valor)
fin: Valor en el cual termina el bucle, lo indico como mayor, menor
pasos: Intervalo entre vaolor y valor

ESTAS TRES EXPRESIONES INDICAN QUE A i SE LE AUMENTA 1
i++
i += 1
i = i + 1

Iterador: Una variable que va recoriendo un objecto iterable

*/

// Ejercicio 1
// Imprimir la palabra 'hola' 10 veces
for (let i = 0; i < 10; i++) {
    console.log('Hola');
}

// Ejercicio 2
// Imprimir la palabra 'JavaScript' 25 veces 
for (let i = 0; i < 25; i++) {
    console.log('JavaScript');
}

// Ejercicio 3
// Mostrar los números del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("");

//Ejercicio 4
//Mostrar los numeros del 1 al 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("");

// Ejercicio 5
//Ir tres en tres del 4 hasta 23
for (let i = 4; i < 24; i += 3) {
    console.log(i);
}

console.log("");

// Ejercicio 6
// Mostrar los números del 10 al 100, de 10 en 10
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

console.log("");

//Ejercicio 7
// Mostar los números 9 al 0
for (let i = 9; i >=0; i--) {
    console.log(i);
}