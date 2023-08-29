/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.  */

let numero = parseInt(prompt("Ingrese un numero para determinar si es par o impar."));

let paridad = numero % 2;

if(numero == 0){
    alert(`El numero ${numero} no es ni par ni impar.`);
} else if (paridad == 0){
    alert(`El numero ${numero} es Par `);
} else{
    alert (`El numero ${numero} es Impar `);
}