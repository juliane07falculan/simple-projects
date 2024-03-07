const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");
const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");


function celsiusToFahrenheit(valueFrom) {
    const answer = (valueFrom * (9 / 5)) + 32;
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}

function celsiusToKelvin(valueFrom) {
    const answer = (valueFrom + 273.15);
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}
function fahrenheitToCelsius(valueFrom) {
    const answer = (valueFrom - 32) * (5 / 9);
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}

function fahrenheitToKelvin(valueFrom) {
    const answer = (valueFrom - 32) * (5 / 9) + 273.15;
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}

function kelvinToCelsius(valueFrom) {
    const answer = (valueFrom - 273.15);
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}

function kelvinToFahrenheit(valueFrom) {
    const answer = (valueFrom - 273.15) * (9 / 5) + 32;
    const result = answer.toFixed(1).replace(".0", "");
    toInput.value = result;
}


function reset() {
    fromInput.value = 0;
    toInput.value = 32;
    fromSelect.value = "Degree Celsius";
    toSelect.value = "Fahrenheit";
}

function convert() {

    let valueFrom = Number(fromInput.value);
    let scaleFrom = fromSelect.value;
    let valueTo = Number(toInput.value)
    let scaleTo = toSelect.value;

    switch(true) {
        case (isNaN(valueFrom) || isNaN(valueTo)):
            window.alert("Enter number only!")
            break;
        case (valueFrom === null) ||(valueTo === null):
            window.alert("Enter value");
            break;
        case scaleFrom === "Degree Celsius" && scaleTo === "Fahrenheit":
            celsiusToFahrenheit(valueFrom);
            break;
        case scaleFrom === "Degree Celsius" && scaleTo === "Kelvin":
            celsiusToKelvin(valueFrom);
            break;  
        case scaleFrom === "Fahrenheit" && scaleTo === "Degree Celsius":
            fahrenheitToCelsius(valueFrom);
            break;
        case scaleFrom === "Fahrenheit" && scaleTo === "Kelvin":
            fahrenheitToKelvin(valueFrom);
            break;
        case scaleFrom === "Kelvin" && scaleTo === "Degree Celsius":
            kelvinToCelsius(valueFrom);
            break;
        case scaleFrom === "Kelvin" && scaleTo === "Fahrenheit":
            kelvinToFahrenheit(valueFrom);
            break;
    }
}

convertButton.addEventListener("click", convert);

resetButton.addEventListener("click", reset);

