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

btnGenerate.addEventListener('click', () => {
    let inSelect = "";
    
    checkBoxes.forEach(function(boxes) {
        if (boxes.checked === true) {
            if (boxes.id === "upperCase") {
                inSelect = inSelect += bloqueUpperCase;
                // console.log(inSelect)
            }else if(boxes.id === "lowerCase"){
                inSelect = inSelect += bloqueLowerCase;
                //    console.log(inSelect)
            }else if(boxes.id === "numbers"){
                inSelect = inSelect += bloqueNumber;
                // console.log(inSelect)
            }else if(boxes.id === "symbols"){
                inSelect = inSelect += bloqueSymbol;
            }
        }
    });
    let newPassword = "";
    let longitud = inputRange.value;
    
    for (let i=0; i < longitud; i++) {
        let caracter = Math.floor( Math.random() * inSelect.length) ;
        caracter = inSelect[caracter];
        newPassword = newPassword + caracter;  
    };
    
    password.textContent = newPassword;
});

