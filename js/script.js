console.log("Hello");
// Inizializzo le variabili che mi serviranno del DOM
const startButton = document.querySelector("#start-button");
const countDown = document.querySelector("#countdown");
const gameInstructions = document.querySelector("#instructions");
const numberList = document.querySelector("#number-list");

// Il gioco inizia quando clicco su "Inizia"
// Mi serve un eventListener per far partire il gioco

startButton.addEventListener("click", (_simon_says) => {
    // Al click devono scomparire le istruzioni e il pulsante "Inizia"
    gameInstructions.classList.add("d-none");
    startButton.classList.add("d-none");
    // E compare il countdown di 30 secondi e i numeri da memorizzare

    // Ma prima mi creo una variabile che mi mostrerà i secondi ad ogni ripetizione
    let timerValue = 30;
    countDown.innerText = timerValue;
    console.log(timerValue);
    console.log(countDown.innerText);

    // Il valore da visualizzare lo dovrà prendere dal timeValue che ha come valore di partenza 30 - visto che devo fare il conto alla rovescia
    // Le ripetizioni si dovranno fermare allo 0 quindi creo una costante che contenga il mio setInterval
    const timerId = setInterval(() => {
        if (timerValue === 0) {
            // quando il countdown arriva allo 0, devo fermare le ripetizioni e far sparire i numeri mostrati e il countdown stesso
            clearInterval(timerId);
            countDown.classList.add("d-none");
            numberList.classList.add("d-none");

        } else {
            // Altrimenti continuo a fare il conto alla rovescia, andando in decremento con i numeri del timerValue
            timerValue = --timerValue;
            // Riassegno questo valore al countDown.innerText
            countDown.innerText = timerValue;
            console.log(timerValue);

        }
    }, 1000);
    // Adesso devo far apparire il form e permettere al giocatore di scrivere i suoi numeri, contemporaneamente appare il bottone "Conferma"

    // Una volta inseriti i numeri, dobbiamo fare un check con quelli precedentemente visualizzati e contare quanti numeri sono stati indovinati - e lo dobbiamo visualizzare in pagina
}); 