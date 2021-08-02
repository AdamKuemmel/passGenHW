// Assignment Code
var generateBtn = document.querySelector("#generate");

//ask user name
var userName = prompt("hello, what is your name?");
var validLength = false;

//ask user password length
var passLength = prompt(
  "okay " +
    userName +
    ", How many characters would you like to include in your password?"
);
console.log(passLength);

if (passLength < 7 || passLength > 129 || isNaN(passLength) == true) {
  while (validLength == false) {
    console.log(passLength);
    passLength = prompt(
      "okay " +
        userName +
        ", Please enter a number between 8 and 128 for your password length."
    );

    console.log(passLength);
    if (passLength > 7 && passLength < 129 && isNaN(passLength) == false) {
      validLength = true;
    }
  }
}

console.log(typeof passLength);

//ask user  upperCase
var upperConfirm = confirm(
  "would you like to include upperCase text in your password?"
);

//ask user special characters
var specAlpha = confirm("would you like to include special characters?");

//ask user numeric
var askNum = confirm("would you like to include numeric characters?");

//declare string values for
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spec = "!#$%&'*+,-.:;=?@^_`|~";
var numeric = "0123456789";

//create string to fill with selected characters concat()
var userSelected = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

if (upperConfirm) {
  userSelected = userSelected + alphaUpper;
}

if (specAlpha) {
  userSelected = userSelected + spec;
}
if (askNum) {
  userSelected = userSelected + numeric;
}

//write funtion that generates password

function generatePassword() {
  //random selct on in the userSelected created string
  var resultPass = "";
  for (var i = 0; i < passLength; i++) {
    resultPass += userSelected.charAt(
      Math.floor(Math.random() * userSelected.length)
    );
  }
  console.log(userSelected);
  console.log(resultPass);
  return resultPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
