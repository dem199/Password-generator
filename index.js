const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}],|:;<>.?/"
  };
  
  let passwordLength = 15;
  let includeSymbols = true;
  let includeNumbers = true;
  
  const passwordOne = document.getElementById("password-one");
  const passwordTwo = document.getElementById("password-two");
  
  function getRandomCharacter(characterSet) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet[randomIndex];
  }
  
  function getRandomPassword() {
    let newPassword = "";
    const selectedCharacters =
      characters.uppercase +
      (includeSymbols ? characters.symbols : "") +
      characters.lowercase +
      (includeNumbers ? characters.numbers : "");
      
    for (let i = 0; i < passwordLength; i++) {
      newPassword += getRandomCharacter(selectedCharacters);
    }
    return newPassword;
  }
  
  function generatePassword() {
    const generatePasswordOne = getRandomPassword();
    const generatePasswordTwo = getRandomPassword();
    passwordOne.textContent = generatePasswordOne;
    passwordTwo.textContent = generatePasswordTwo;
  }
  
  function regeneratePassword() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
  }
  
  function toggleSymbols() {
    includeSymbols = !includeSymbols;
  }
  
  function toggleNumbers() {
    includeNumbers = !includeNumbers;
  }
  
  function submit() {
    generatePassword();
  }
  
  function copyPassword() {
    const passwordToCopy = passwordOne.textContent;
    navigator.clipboard.writeText(passwordToCopy);
  }
  

