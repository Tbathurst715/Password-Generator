
var generateBtn = document.querySelector("#generate");

var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersArray = letters.split(" ");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersUpperArray = lettersUpper.split(" ");
var numbers = "0123456789";
var numbersArray = numbers.split(" ");
var specialCharacters = "!@#$%^&*";
var specialCharactersArray = specialCharacters.split(" ");


function writePassword() {
  var generatePassword = "";
  var characters = [];
  var passwordText = document.querySelector("#password");

  var passLength = prompt("Enter the length you would like your password to be anywhere between 8 to 128 characters");
  if (passLength < 8 || passLength > 128) {
    alert("Must be between 8 and 128 characters");
  }
  else {

    if (confirm("Would you like lowercase letters in your password?") === true) { Array.prototype.push(characters, lettersArray); };

    if (confirm("Do you want to Uppercase letters in your password?") === true) { Array.prototype.push(characters, lettersUpperArray); };

    if (confirm("Would you like numbers in your password?") === true) { Array.prototype.push(characters, numbersArray); };

    if (confirm("Do you want special characters in your password?") === true) { Array.prototype.push(characters, specialCharactersArray); };

    if (characters === 0) {
      alert("You must select one option");
    }
    else {
      for (var i = 0; i < passLength; i++) {
        var random = Math.floor(Math.random() * characters.length); generatePassword = characters[random];

        console.log(generatePassword);
      }
    }
  }
  var password = characters;

  passwordText.value = password;

  passwordText.innerHTML = generatePassword;
}


generateBtn.addEventListener("click", writePassword)