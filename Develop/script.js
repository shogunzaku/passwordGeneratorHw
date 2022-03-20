// Assignment Code
// added prompts
var generateBtn = document.querySelector("#generate");
let userChoice = window.prompt("How Many Characters would you like your password to contain?");
let userChoice2 = window.prompt("Include lowercase?");
let userChoice3 = window.prompt("Include uppercase?");
let userChoice4 = window.prompt("Include numeric characters");
let userChoice5 = window.prompt("Include special characters?");


console.log(passNames);

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


