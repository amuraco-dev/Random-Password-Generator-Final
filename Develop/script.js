// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// prettier-ignore
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(function (x) {
  return x.toUpperCase();
});
// prettier-ignore
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
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
    if (passwordlength === null) {
      return;
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
    if (failed === false) {
      break;
    }

    passwordlength = prompt(
      "Invalid input please input a number of characters between 8 and 128"
    );
  }
  // Collect answers to character type prompts!
  var charactertypes = [
    "lowercase",
    "uppercase",
    "numeric",
    "special characters",
  ];
  var allowedcharacterstypes = [];
  while (true) {
    charactertypes.forEach(function (charactertype) {
      var selection = confirm("Do you want to allow " + charactertype);
      if (selection) {
        allowedcharacterstypes.push(charactertype);
      }
    });
    if (allowedcharacterstypes.length > 0) {
      break;
    }
    alert("You must select at least one character type!");
  }
  // Build an array of permitted characters based on user selected criteria
  var permittedcharacters = [];
  if (allowedcharacterstypes.includes("lowercase")) {
    permittedcharacters = permittedcharacters.concat(lowerCase);
  }
  if (allowedcharacterstypes.includes("uppercase")) {
    permittedcharacters = permittedcharacters.concat(upperCase);
  }
  if (allowedcharacterstypes.includes("numeric")) {
    permittedcharacters = permittedcharacters.concat(numbers);
  }
  if (allowedcharacterstypes.includes("special characters")) {
    permittedcharacters = permittedcharacters.concat(specialCharacters);
  }
  console.log(permittedcharacters);
  //  Loop to randomly generate password from permitted characters
  var password = "";
  for (var i = 0; i < passwordlength; i++) {
    var randomcharacter =
      permittedcharacters[
        Math.floor(Math.random() * permittedcharacters.length)
      ];
    password += randomcharacter;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
