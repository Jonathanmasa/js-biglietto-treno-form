// seleziono gli input
document.getElementById("calculate").addEventListener("click", function () {
    const kilometers = parseFloat(document.getElementById("kilometers").value);
    const age = parseInt(document.getElementById("age").value);

    // calcolo prezzo al km
    const priceKm = 0.21;
    let priceTicket = kilometers * priceKm;

    // calcolo e sconti
    if (age < 18) {
        priceTicket *= 0.8;
    } else if (age < 65) {
        priceTicket *= 0.6;
    }

    // stampo il risultato in console
    const output = document.getElementById("output");
    output.textContent = `Il prezzo biglietto: €${priceTicket.toFixed(2)}`; 
});





