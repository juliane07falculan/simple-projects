const calcScreen = document.getElementById("screen");

function buttonClick(value) {
    calcScreen.value += value;
}

function clearScreen() {
    calcScreen.value = "";
}

function equal() {
    calcScreen.value = eval(calcScreen.value);
}