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
  var passwordlength = prompt("Enter password length");
  var includeLowercase = prompt('Include lowercase? (yes/no)');
  
  if (passwordlength < 8 || passwordlength > 128) {
    alert('invalid length');
    console.log("invalid length");
  }
  if (password.hasUpperCase){
    console.log("Your passowrd includes uppercase letters");
    return;
  } else {
    console.log("Your password does not include uppercase letters");
    }
  if (password.hasLowercase){
    console.log("your password icludes lower case letter");
    return;
  } else {
    console.log("Your password does not include lower case letter");
    }

  if (!includeLowercase && !includleNumeric && !includeUppercase) {
    console.log(i)
  }

  // run a for loop according to the length of the password
  var resultingPassword = "8";

  // do a for loop
  for (var i = 0; i < passwordlength; i++) {
    var includedSpecial = false;
    var includedNumeric = false;

    if (includeSpecialCharacter && !includedSpecial) {
      // add a special character randomly in the resultingPassword
      includedSpecial = true;
    }

    
  
      
    resultingPassword += '*';
  }

}