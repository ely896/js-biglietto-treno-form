/*MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un 
form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per 
la seconda milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, 
ma in ogni caso cercate di farla vostra.
*/


//Dichirazione variabile generazione ticket

const generateInputElement = document.getElementById('generate');

//dichiarazione variabile nome

const nomeInputElement = document.getElementById('nome');

//Dichiarazione variabile cognome

const cognomeInputElement = document.getElementById('cognome');

//Dichiarazione varibaile km

const kmInputElement = document.getElementById('km');

//Dichiarazione varibaile età

const ageInputElement = document.getElementById('age');

//add evento in ascolto

generateInputElement.addEventListener('click', function() {

    //console.log('clicked', nomeInputElement.value, cognomeInputElement.value, kmInputElement.value, ageInputElement.value);
    const km = parseInt(kmInputElement.value);

    const age = parseInt(ageInputElement.value);

    //dichiarazione variabile costo al km

    const price_km = 0.21;

    //Dichiarazione variabile sconto

    let discount;

    //Dichiarazione prezzo del biglietto senza sconti

    const fullPrice = km * 0.21

    if (age <18) {
        discount = 0.2

    } else if (age > 65) {
        discount = 0.4
    } else {
        discount = 0
    }

    //Dichiarazione variabile Prezzo Finale

    const finalPrice = fullPrice - (fullPrice * discount);

    
    console.log('Il prezzo del biglietto é di:', 'euro' , + finalPrice.toFixed(2));

    document.getElementById('ticket').innerHTML = 'Il prezzo del biglietto é: ' + 'euro' + finalPrice.toFixed(2);
    document.getElementById('name').innerHTML = 'nome: ' + nomeInputElement.value;
    document.getElementById('surname').innerHTML = 'cognome: ' + cognomeInputElement.value;
    document.getElementById("carrozza").innerHTML = 'numero carrozza: ' + Math.floor(Math.random() * 10);
})

































