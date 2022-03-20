// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(passNames);

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


