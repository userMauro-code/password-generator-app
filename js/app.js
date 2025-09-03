const password = document.getElementById("password");
const btnCopy = document.querySelector(".button_copy");
const rangeValue = document.getElementById("rangeValue");
const inputRange = document.getElementById("inputRange");
const checkBoxes = document.querySelectorAll(".container_checkbox input[type='checkbox']")
const textIndicator = document.getElementById("textIndicator");
const barColor = document.querySelectorAll(".bars bar");
const btnGenerate = document.getElementById("generate");


function updateRange() {
    const val = inputRange.value;
    rangeValue.textContent = val
}

inputRange.addEventListener('input', updateRange);

updateRange();