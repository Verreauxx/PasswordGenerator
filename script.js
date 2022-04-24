// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var characters;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);

  };

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    characters = alert("You must choose a criteria");

  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    characters = lowerCase.concat(upperCase, numbers, special);
    console.log(characters);
  }

  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }

  // 2 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    characters = lowerCase.concat(upperCase, numbers);
    console.log(characters);
  }

  // 1 true option
  else if (confirmLower) {
    characters = lowerCase;
    console.log(characters);
  }
  else if (confirmUpper) {
    characters = blankUpper.concat(upperCase);
    console.log(characters);
  }
  else if (confirmNumber) {
    characters = numbers;
    console.log(characters);
  }
  else if (confirmSpecial) {
    characters = special;
    console.log(characters);
  }

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = characters[Math.floor(Math.random() * characters.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}