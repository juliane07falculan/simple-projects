const counterAppLabel = document.getElementById("my-label")
const decrementButton = document.getElementById("decrement-button");
const resetButton = document.getElementById("reset-button");
const incrementButton = document.getElementById("increment-button");
let counter = 0

decrementButton.onclick = function(){
    counter--;
    counterAppLabel.textContent = counter;
}

resetButton.onclick = function(){
    counter = 0
    counterAppLabel.textContent = counter;
}

incrementButton.onclick = function(){
    counter++;
    counterAppLabel.textContent = counter;
}
