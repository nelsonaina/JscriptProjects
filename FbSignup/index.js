const emailLogin = document.getElementById("emailOne");
const passwordLogin = document.getElementById("password");
const errorText = document.getElementById("errorText");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const signupEmail = document.getElementById("signupEmail");
const newPassword = document.getElementById("newPassword");




const capitalAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passswordNumbers = "1234567890";
const passAndSymbols = "1234567890!@#$%^&*()_+-=:<>?;',./'"
const symbols = "!@#$%^&*()_+-=:<>?;',./'";
const gmailConstant = "@gmail.com";



function login() {

        const userEmail = emailLogin.value;
        const userLoginPassword = passwordLogin.value;
    if (userEmail !== "" && userLoginPassword !== "") {
        
        if (userEmail.includes(gmailConstant)) {
            console.log("We are logged in!")
        }
        else {
            console.log("Invalid email Try again");
        }
    }
    else {
        console.log("You need to type out an email or password!");
    }


}


function forgotPassword() {
    console.log("Forgot Password!");
}






function signUp() {

    const userFirstName = firstName.value;
    const userLastName = lastName.value;
    const userSignUpEmail = signupEmail.value;
    const userNewPassword = newPassword.value;

    for (let i = 0; i < passAndSymbols.length; i++) {
        if (userFirstName.includes(passAndSymbols[i]) || userLastName.includes(passAndSymbols[i])) {
            errorText.textContent = "Invalid First/Last Name";
            errorText.style.display = "flex";
            break;
        }
    }
    if (userSignUpEmail !== "") {
        if (userSignUpEmail.includes(gmailConstant)) {
            console.log("nice");
        }
        else {
            errorText.textContent = "Invalid email";
            errorText.style.display = "flex";
        }
    }
    else {
        console.log("You need to type out an email or password!");
    }



    let iscapitalAlpha = false;
    let ispassswordNumbers = false;
    let issymbols = false;

    for (let j = 0; j < userNewPassword.length; j++) {
        const userValues = userNewPassword[j];


        if(capitalAlpha.includes(userValues)) {
            iscapitalAlpha = true;
        }
        if(passswordNumbers.includes(userValues)) {
            ispassswordNumbers = true;
        }
        if(symbols.includes(userValues)) {
            issymbols = true;
        }
    }

    if(!iscapitalAlpha) {
        errorText.textContent = "New Password must contain a capital letter";
        errorText.style.display = "flex";
        iscapitalAlpha = false;
    }
    if(!ispassswordNumbers) {
        errorText.textContent = "New Password must contain a number";
        errorText.style.display = "flex";  
        ispassswordNumbers = false; 
    }
    if(!issymbols) {
        errorText.textContent = "New Password must contain a symbol";
        errorText.style.display = "flex";   
        issymbols = false;
    }


    if(iscapitalAlpha === true && ispassswordNumbers === true && issymbols === true) {
        console.log("goodPassword");

    }


}


