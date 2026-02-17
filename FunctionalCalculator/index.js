const display = document.getElementById("myText");
const clearbtn = document.getElementsByTagName("button");

function appendToDisplay(input) {
    if (display.value === "Error") {
        eraseData();
    }
    else {
    display.value += input;
    }

}

function eraseData() {
    display.value = "";
}


function calculateData() {
    try {
    display.value = eval(display.value).toFixed(2);
    }
    catch (error) {
        display.value = "Error";
    }

}

