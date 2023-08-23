const passwordContainer = document.querySelector("#password");
const length = 10;

const easy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const medium = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
const hard = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()>?{}";
// const symbol = "!@#$%^&*()>?{}";




function createPassword() {
    let password = "";
    for(let i = 0; i < length; i++) {
        password += hard[Math.floor(Math.random() * hard.length)];
        // switch (userInput){
        //     case "easy":
        //         password += easy[Math.floor(Math.random() * easy.length)];
        //         break;
            
        //     case "medium":
        //         password += medium[Math.floor(Math.random() * medium.length)];
        //         break;

        //     case "hard":
        //         password += hard[Math.floor(Math.random() * hard.length)];
        //         break;

        //     default:
        //         alert("Invalid input!")
        // }
    }
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwordContainer.value = password;
    console.log(password)
}

// createPassword();