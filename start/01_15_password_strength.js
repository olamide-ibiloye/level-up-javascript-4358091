// Write your code here
function checkPassword(password) {
  let oneLowerCaseCharacter = /(?=.+[a-z])/;
  let oneUpperCaseCharacter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;

  let isValid =
    oneLowerCaseCharacter.test(password) &&
    oneUpperCaseCharacter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);

  return isValid ? "Your password is valid" : "Your password is invalid";
}

console.log(checkPassword("12345Ra!"));
