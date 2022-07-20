
var generateBtn = document.querySelector("#generate");

var lowCase = confirm("Would you like lowercase letters in this password?");
var upperCase = confirm("Would you like uppercase letters in this password?");
var nums = confirm("Do you want numbers in this password?");
var symbols = confirm("Do you want symbols in this password?");
var passLength = prompt("Enter the length you would like your password to be anywhere between 8 to 128 characters"
  
  



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);