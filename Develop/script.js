// Assignment code here
// var password = {
// length: 8,
// hasUpperCase: true,
// has LowerCase : true,
// has specialcharacters : true,
//} ;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  var passwordlength = prompt("12");
  var numbers = confirm("1234567890");
  var lowerCases = confirm("qwertyuioplkjhgfdsazxcvbnm");
  var uppercases = confirm("QWERRTYUIOPLKJHGFDSAZXCVBNM")
}