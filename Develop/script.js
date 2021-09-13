// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Write definition for generate password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passwordlength = prompt(
    "Choose a number of characters between 8 and 128!"
  );
  // passwordlength === "a" // invalid
  // passwordlength === "eight" // invalid
  // passwordlength === 8 // valid
  // passwordlength === -1 // invalid
  while (true) {
    // If you hit cancel from prompt, return.
    if (passwordlength===null){
      return
    }
    var failed = false;
    var input = Number(passwordlength);
    // regular expression for any number
    console.log(typeof passwordlength);
    if (!/^[0-9]*$/.test(passwordlength)) {
      failed = true;
    }
    if (input < 8 || input > 128) {
      failed = true;
    }
    if (failed===false){
      break
    }
    
    passwordlength=prompt (
      "Invalid input please input a number of characters between 8 and 128"
    )
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
