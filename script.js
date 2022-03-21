// Assignment Code
// added prompts
let generateBtn = document.querySelector("#generate");
let userChoice = window.prompt("How Many Characters would you like your password to contain?");
let userChoice2 = window.prompt("Include lowercase?");
let userChoice3 = window.prompt("Include uppercase?");
let userChoice4 = window.prompt("Include numeric characters");
let userChoice5 = window.prompt("Include special characters?");

// added password generator funtion
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  
}


// Write password to the #password input
function writePassword() {
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

