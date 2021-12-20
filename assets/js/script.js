

var btnPWD = document.querySelector("#btnGenPWD");
var thePWD = document.querySelector("#pwd");

var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = "!~#$%&*+=<>@/:;-^{]}[".split("");

var pwdOption;
var generatedPWD = [];
var obj = 0;

var lowerChar;
var upperChar;
var numChar;
var specialChar;
var pwdLen;

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * max) + 1;
    return value;
}

//Prompt the user for lowercase characters
function lowerChoice() {
    lowerChar = parseInt(window.prompt("Include lowercase characters? Enter 1 for yes, 0 for no"));
    if ((!(lowerChar === 1) && !(lowerChar === 0)) || (lowerChar === null)) {
        alert("Please enter 1 or 0");
        lowerChoice();
    }
}

//Prompt the user for uppercase characters
function upperChoice() {
    upperChar = parseInt(window.prompt("Include uppercase characters? Enter 1 for yes, 0 for no"));
    if ((!(upperChar  === 1) && !(upperChar  === 0)) || (upperChar  === null)) {
        alert("Please enter 1 or 0");
        upperChoice();
    }
}

//Prompt the user for numeric characters
function numChoice() {
    numChar = parseInt(window.prompt("Include numeric characters? Enter 1 for yes, 0 for no"));
    if ((!(numChar  === 1) && !(numChar  === 0)) || (numChar  === null)) {
        alert("Please enter 1 or 0");
        numChoice();
    }
}

//Prompt the user for special characters
function specialChoice() {
    specialChar = parseInt(window.prompt("Include special characters? Enter 1 for yes, 0 for no"));
    if ((!(specialChar  === 1) && !(specialChar  === 0)) || (specialChar  === null)) {
        alert("Please enter 1 or 0");
        specialChoice();
    }
}

//Prompt the user for the password length
function pwdLenChoice() {
    pwdLen = parseInt(window.prompt("Please enter a number between 8 and 128 for the password length"));
   if (!((pwdLen >= 8) && (pwdLen <= 128)) || (pwdLen === null)) {
        alert("Please enter a number between 8 and 128");
        pwdLenChoice();
    }
}


console.log("pwd length is " + pwdLen);

//Create the password
function createPWD() {
    var i = 1;
    while (i <= parseInt(pwdLen)) {

        //Randomize the user selections
        pwdOption = randomNumber(1, 4);
        if (pwdOption === 1) {
            if (parseInt(lowerChar)) {
                obj = randomNumber(0, (letters.length - 1));
                console.log("pwdOption for lowercase is " + pwdOption);
                console.log("lowercase is " + letters[obj]);
                generatedPWD.push(letters[obj]);
                i++;
            }
        }
        else if (pwdOption === 2) {
            if (parseInt(upperChar)) {
                obj = randomNumber(0, (letters.length - 1));
                console.log("pwdOption for uppercase is " + pwdOption);
                console.log("uppercase is " + letters[obj].toUpperCase());
                generatedPWD.push(letters[obj].toUpperCase());
                i++;
            }
        }
        else if (pwdOption === 3) {
            if (parseInt(numChar)) {
                obj = randomNumber(0, (numbers.length - 1));
                console.log("pwdOption for number is " + pwdOption);
                console.log("Number is " + numbers[obj]);
                generatedPWD.push(numbers[obj]);
                i++;
            }
        }
        else if (pwdOption === 4) {
            if (parseInt(specialChar)) {
                obj = randomNumber(0, (special.length - 1));
                console.log("pwdOption for special is " + pwdOption);
                console.log("special is " + special[obj]);
                generatedPWD.push(special[obj]);
                i++;
            }
        }
    }
    thePWD.innerHTML = generatedPWD.join("");
    btnPWD.disabled = true;
}

//Prompt the user for info
function getUserInfo() {
    lowerChoice();
    upperChoice();
    numChoice();
    specialChoice();
    pwdLenChoice();

    //Check to see if the user selected at least on option
    if ((lowerChar === 1) || (upperChar == 1) || (numChar === 1) || (specialChar === 1)) {
        alert("You may now select the button to generate your password");
        btnPWD.disabled = false;
        btnPWD.addEventListener("click", createPWD);
    }

    else {
        alert("Cannot generate password. No options were selected.");
        
    }
}

//Get User Info
getUserInfo();
