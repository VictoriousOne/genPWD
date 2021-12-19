
var pwdPrompts = {
    lowercase: window.prompt("Would you like lowercase characters? Enter 1 for yes, 0 for no"),
    uppercase: window.prompt("Would you like uppercase characters? Enter 1 for yes, 0for no"),
    numeric: window.prompt("Would you like numeric characters? Enter 1 for yes, 0 for no"),
    special: window.prompt("Would you like special characters? Enter 1 for yes, 0 for no"),
    pwdLen: window.prompt("How many characters would you like in your password? It must be at least 8 charracdters but no more than 128.")
}

var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = "!~#$%&*+=<>@/:;-^{]}[".split("");

var pwdOption;
var generatedPWD = [];
var obj = 0;

var randomNumber = function(min, max) {
    //var value = Math.floor(Math.random() * (max - min + 1));
    var value = Math.floor(Math.random() * max) + 1;
    return value;
}

console.log("pwd length is " + pwdPrompts.pwdLen);
/*for (var i = 0; i < parseInt(pwdPrompts.pwdLen); i++) {
    pwdOption = randomNumber(1,4);
    console.log("pwdOption is " + pwdOption);

    switch (pwdOption) {
        case 1 :
            if (parseInt(pwdPrompts.lowercase)) {
                obj = randomNumber(0, (letters.length - 1));
                console.log("lowercase is " + letters[obj]);

                //generatedPWD.push(letters[obj]);
                generatedPWD[i] = letters[obj];
                break;
            }
        case 2 :
            if (parseInt(pwdPrompts.uppercase)) {
                obj = randomNumber(0, (letters.length - 1));
                console.log("uppercase is " + letters[obj].toUpperCase());
                //generatedPWD.push(letters[obj].toUpperCase());
                generatedPWD[i] = letters[obj].toUpperCase();
                break;
            }
        case 3 :
            if (parseInt(pwdPrompts.numeric)) {
                obj = randomNumber(0, (numbers.length - 1));
                console.log("Number is " + numbers[obj]);
                //generatedPWD.push(numbers[obj]);
                generatedPWD[i] = numbers[obj];
                break;
            }
        case 4 : 
            if (parseInt(pwdPrompts.special)) {
                obj = randomNumber(0, (special.length - 1));
                console.log("pwdOption for special is " + pwdOption);
                console.log("special is " + special[obj]);
                //generatedPWD.push(special[obj]);
                generatedPWD[i] = special[obj];
                break;
            }
    }
}*/

var i = 1;
while (i <= parseInt(pwdPrompts.pwdLen)) {

    pwdOption = randomNumber(1,4);
    if (pwdOption === 1) {
        if (parseInt(pwdPrompts.lowercase)) {
            obj = randomNumber(0, (letters.length - 1));
            console.log("pwdOption for lowercase is " + pwdOption);
            console.log("lowercase is " + letters[obj]);
            generatedPWD.push(letters[obj]);
            i++;
        }
    }
    else if (pwdOption === 2) {
        if (parseInt(pwdPrompts.uppercase)) {
            obj = randomNumber(0, (letters.length - 1));
            console.log("pwdOption for uppercase is " + pwdOption);
            console.log("uppercase is " + letters[obj].toUpperCase());
            generatedPWD.push(letters[obj].toUpperCase());
            i++;
        }
    }
    else if (pwdOption === 3) {
        if (parseInt(pwdPrompts.numeric)) {
            obj = randomNumber(0, (numbers.length - 1));
            console.log("pwdOption for number is " + pwdOption);
            console.log("Number is " + numbers[obj]);
            generatedPWD.push(numbers[obj]);
            i++;
        }     
    }
    else if (pwdOption === 4) {
        if (parseInt(pwdPrompts.special)) {
            obj = randomNumber(0, (special.length - 1));
            console.log("pwdOption for special is " + pwdOption);
            console.log("special is " + special[obj]);
            generatedPWD.push(special[obj]);
            i++;
        }
    }
}

    alert("Yourpassword is " + generatedPWD.join(""));