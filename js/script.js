console.log("Witam :)");

let formElement = document.querySelector(".js-form");
let labelElement = document.querySelector(".js-label");
let sellElement = document.querySelector(".js-sell");
let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
safdsaf

let EUR = 4.50;
let CHF = 4.77;
let USD = 4.51;
let GBP = 5.45;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let sell = sellElement.value;
    let label = labelElement.value;
    let pln = plnElement.value;
    let result = resultElement.value;

    switch (sell) {
        case "EUR":
            resultElement.innerHTML = label * EUR;
            break;
        case "USD":
            resultElement.innerHTML = label * USD;
            break;
        case "GBP":
            resultElement.innerHTML = label * GBP;
            break;
        case "CHF":
            resultElement.innerHTML = label * CHF;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)}`;
});
