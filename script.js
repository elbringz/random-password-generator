// Assignment code here

var length = 8;
var choices = [];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = [' ','!','"','#','$','%','&','*','+','-','.','<','>','=','?','@'];
function generatePassword() {

}

function givePrompts(){
  length = prompt("How many characters should your password contain? (8-128 characters)");
  if(length < 8 || length > 128){
    alert('Password length must be a number 8-128. Please try again');
    return false;
  }

  if(confirm('Would you like uppercase letters to be included in your password?')) {
    choices = choices.concat(uppercase);
  }

  if(confirm('Would you like lowercase letters to be included in your password?')) {
    choices = choices.concat(lowercase);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
