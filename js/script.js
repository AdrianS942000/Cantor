<<<<<<< HEAD
{
    console.log("Witam :)");

=======
console.log("Witam :)");

let formElement = document.querySelector(".js-form");
let labelElement = document.querySelector(".js-label");
let sellElement = document.querySelector(".js-sell");
let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
safdsaf
>>>>>>> be95465ef8fde977df658c1c21cd98b598ca8083

    const calculateResult = (label, sell) => {
        const EUR = 4.50;
        const CHF = 4.77;
        const USD = 4.51;
        const GBP = 5.45;

        switch (sell) {
            case "EUR":
                resultElement.innerHTML = label * EUR;

            case "USD":
                resultElement.innerHTML = label * USD;

            case "GBP":
                resultElement.innerHTML = label * GBP;

            case "CHF":
                resultElement.innerHTML = label * CHF;

        }
    };
const updateResultText = () =>  {resultElement.innerText = `${result.toFixed(2)}`;
}

    const onFormSubmit = (event) => {
        event.preventDefault();

        const labelElement = document.querySelector(".js-label");
        const sellElement = document.querySelector(".js-sell");
        const plnElement = document.querySelector(".js-pln");
        const resultElement = document.querySelector(".js-result");


        const sell = sellElement.value;
        const label = labelElement.value;
        const pln = plnElement.value;
        const result = resultElement.value;

        const result  = calculateResult(label, sell);

        updateResultText(resultElement.innerText, result );
    };
}

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
};
init();
}