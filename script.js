const upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerEl = 'abcdefghijklmnopqrstuvwxyz';
const numEl = '0123456789';
const specialEl = '~!@#$%^&*(){}[]_-+=\|:;?/<>';
const button = document.getElementById("generate");
const userChoices = {};
const passLength = parseInt(prompt("How long do you want your password to be: Choose 8 and 128?"));

function promptUser() {
  const numChar = confirm("INCLUDE: NUMBERS?");
  if (numChar) {
    userChoices["numEl"] = numEl;
  }
  const lowerChar = confirm("INCLUDE: LOWERCASE?");
  if (lowerChar) {
    userChoices["lowerEl"] = lowerEl;
  }
  const upperChar = confirm("INCLUDE: UPPERCASE?");
  if (upperChar) {
    userChoices["upperEl"] = upperEl;
  }
  const special = confirm("INCLUDE: SPECIAL?");
  if (special) {
    userChoices["specialEl"] = specialEl;
  }
}promptUser();

function writePassword() {
  let finalPassword = '';
  for (var i = 0; i < passLength; i++) {
    let passwordEls = Object.keys(userChoices)
    let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
    let char = getRandomCharacter(userChoices[randomEl]);
    finalPassword += char;
    } 
  return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

writePassword();

button.addEventListener("click", function(event){
  password.innerHTML = writePassword();
})

const myInp = document.getElementById("password");