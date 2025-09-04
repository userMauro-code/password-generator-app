const password = document.getElementById("password");
const btnCopy = document.querySelector(".button_copy");
const rangeValue = document.getElementById("rangeValue");
const inputRange = document.getElementById("inputRange");
const checkBoxes = document.querySelectorAll(".container_checkbox input[type='checkbox']")
const textIndicator = document.getElementById("textIndicator");
const barColor = document.querySelectorAll(".bars bar");
const btnGenerate = document.getElementById("generate");
// --------bloquesPassword-----------------------
let bloqueUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let bloqueLowerCase = "abcdefghijklmnopqrstuvwxyz";
let bloqueNumber = "0123456789";
let bloqueSymbol = "!¡&%$#@*";


// ---------input&span-----------------
function updateRange() {
    const val = inputRange.value;
    rangeValue.textContent = val
}

inputRange.addEventListener('input', updateRange);

updateRange();

// ----------checkboxs-----------


checkBoxes.forEach(function(boxes) {
    let inSelect = "";
    
   if (boxes.checked) {
        if (boxes.id === "upperCase") {
            inSelect + bloqueUpperCase;
        }else if(boxes.id === "lowerCase"){
            inSelect + bloqueLowerCase;
        }else if(boxes.id === "numbers"){
            inSelect + bloqueNumber;
        }else if(boxes.id === "symbols"){
            inSelect + symbols;
        }
   }
   console.log(inSelect)
});

