/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
*/


//Dichiarazione variabile prezzo finale

const generateBtnElement = document.getElementById('generate');

//Dichiarazione variabile km da percorrere
const kmInputElement = document.getElementById('km');


//Dichiarazione variabile età
const ageInputElement = document.getElementById('age');

//Dichiarazione variabile prezzo al km
const price_per_km = 0.21;

generateBtnElement.addEventListener('click', function () {

    //console.log('clicked', ageInputElement.value, kmInputElement.value);

    const km = parseInt(kmInputElement.value);

    const age = parseInt(ageInputElement.value);

    const full_price = km * price_per_km;

    //Dichiarazione variabile sconto
    let discount;


    if (age < 18) {
        console.log('apply a 20% discuount');

        discount = 0.2

    } else if (age > 65) {

        console.log('apply a 40% discuount');
        discount = 0.4

    } else {
        console.log('apply full price');
        discount = 0
    }

    console.log(discount);

    const final_price = full_price - (full_price * discount);

    //Dichiarazione variabile prezzo finale

    console.log('Il prezzo del biglietto é:', 'euro' + final_price.toFixed(2));

    document.getElementById('ticket').innerHTML = 'Il prezzo del biglietto é: ' + 'euro' + final_price.toFixed(2);

})






























