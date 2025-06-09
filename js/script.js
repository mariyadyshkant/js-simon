console.log("Hello");
// Inizializzo le variabili che mi serviranno del DOM
const startButton = document.querySelector("#start-button");
const countDown = document.querySelector("#countdown");
const gameInstructions = document.querySelector("#instructions");
let numberList = document.querySelector("#numbers-list");
let answersForm = document.getElementById("answers-form");
const confirmButton = document.querySelector("#confirm-button");
const userAnswers = document.querySelectorAll("input");
let resultMessage = document.getElementById("message");

//! Potrei aggiungere una frase sotto al pulsante inizia che avvisa dei 30 secondi
// Il gioco inizia quando clicco su "Inizia"
// Mi serve un eventListener per far partire il gioco

startButton.addEventListener("click", (_event) => {
    // Al click devono scomparire le istruzioni e il pulsante "Inizia"
    gameInstructions.classList.add("d-none");
    startButton.classList.add("d-none");

    // E compare il countdown di 30 secondi e i numeri da memorizzare
    numberList.classList.remove("d-none");

    // Tramite un ciclo for genero 5 numeri casuali da 1 a 50 (da memorizzare) che aggiungerò ad un array e poi questi numeri li aggiungo numberList come list items
    let listRandomNumbers = [];
    for (i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        listRandomNumbers.push(randomNumber);
        console.log(listRandomNumbers);
        numberList.innerHTML += `<li>${randomNumber}</li>`;
        // console.log(numberList);
        //! Vengono generati numeri troppo vicini tra loro, quindi facilmente memorizzabili (quindi probabilmente bisognerebbe aumentare il range) e a volte anche due uguali (questo grave!)
    }
    // Mi creo una variabile che mi mostrerà i secondi ad ogni ripetizione
    let timerValue = 2;
    countDown.innerText = timerValue;
    console.log(timerValue);
    console.log(countDown.innerText);

    // Il valore da visualizzare lo dovrà prendere dal timeValue che ha come valore di partenza 30 - visto che devo fare il conto alla rovescia
    // Le ripetizioni si dovranno fermare allo 0 quindi creo una costante che contenga il mio setInterval
    const timerId = setInterval(() => {
        if (timerValue === 0) {
            // quando il countdown arriva allo 0, devo fermare le ripetizioni e far sparire i numeri mostrati e il countdown stesso - e far apparire form e bottone "conferma"
            clearInterval(timerId);
            countDown.classList.add("d-none");
            numberList.classList.add("d-none");
            answersForm.classList.remove("d-none");
            confirmButton.classList.remove("d-none");

        } else {
            // Altrimenti continuo a fare il conto alla rovescia, andando in decremento con i numeri del timerValue
            timerValue = --timerValue;
            // Riassegno questo valore al countDown.innerText
            countDown.innerText = timerValue;
            // console.log(timerValue);

        }
    }, 1000);

    // Una volta inseriti i numeri, dobbiamo fare un check con quelli precedentemente visualizzati e contare quanti numeri sono stati indovinati - e lo dobbiamo visualizzare in pagina

    confirmButton.addEventListener("click", (_event) => {
        // Trasformo la nodelist userAnswers che mi raccoglie tutti gli input inseriti in un array ccosì da poter utilizzare tutti i metodi degli array
        const userAnswersArray = Array.from(userAnswers, input => input.value);
        console.log(userAnswersArray);
        // Eseguo un ciclo for per confrontare i numeri inseriti dal giocatore con quelli generati casualmente - quindi confronto gli elementi dei due array
        let guessedNumbers = [];
        for (i = 0; i < listRandomNumbers.length; i++) {
            const thisUserNumber = Number(userAnswersArray[i]);
            if (listRandomNumbers.includes(thisUserNumber)) {
                guessedNumbers.push(thisUserNumber);
            }
        }
        // console.log(guessedNumbers);
        // console.log(guessedNumbers.length);

        // Faccio comparire il messaggio con il punteggio
        let stringNumbers = guessedNumbers.join(" , ");
        resultMessage.innerText =
            `Hai indovinato ${guessedNumbers.length} numeri!
            ${stringNumbers}`




    });
}); 