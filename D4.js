/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("----- Esercizio 1 -----");
function area(l1, l2) {
    return l1 * l2;
}

console.log(area(12, 3));

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 2 -----");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return num1 + num2;
}

console.log(crazySum(12, 4));

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 3 -----");

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(num) {
    if (num > 19) {
        return Math.abs(num - 19) * 3;
    }
    else {
        return Math.abs(num - 19);
    }
}

console.log(crazyDiff(20));

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 4 -----");

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(numb) {
    if (numb >= 20 || numb <= 100 || numb === 400) {
        return true;
    }
    else {
        return false;
    }
}

console.log("----- Esercizio 5 -----");

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(words) {
    let word = "EPICODE";
    if (!words.startsWith(word)) {
        return word + " " + words;
    }
    else {
        return words;
    }
}

console.log(epify("Corsi Full Stack Web"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 6 -----");

function check3and7(number) {
    if (number % 3 === 0 || number % 7 === 0) {
        console.log(number + " è un multiplo di 3 o 7");
    }
    else {
        console.log(number + " non è un multiplo di 3 o 7");
    }
}

check3and7(12);


console.log("----- Esercizio 7 -----");

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(word) {
    let arrayWord = word.split('');
    arrayWord.reverse();
    word = arrayWord.join('');
    return word;
}

console.log(reverseString("Walter"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----- Esercizio 8 -----");

function upperFirst(words) {
    let arrayWords = words.split(' ');
    for (let i = 0; i < arrayWords.length; i++) {
        arrayWords[i] = arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1).toLowerCase();
    }
    words = arrayWords.join(' ');
    return words;
}

console.log(upperFirst("io sono la luce della stanzetta"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 9 -----");

function cutString(word) {
    let arrayWord = word.split('');
    arrayWord.shift();
    arrayWord.pop();
    word = arrayWord.join('');
    return word;
}

console.log(cutString('Hello World'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----- Esercizio 10 -----");

function giveMeRandom(number) {
    let arrayRandom = [];
    for (let i = 0; i < number; i++) {
        arrayRandom.push(Math.floor(Math.random() * 11));
    }
    return arrayRandom;
}

console.log(giveMeRandom(10));


