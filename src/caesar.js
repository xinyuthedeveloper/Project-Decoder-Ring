// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    const inputArray = input.toLowerCase().split("");
    const output = inputArray.map((letter) => {
      if (!alphabet.includes(letter)) return letter;
      else {
        if (encode) {
          let shiftedIndex = alphabet.indexOf(letter) + shift;
          if (shiftedIndex > 25) (shiftedIndex -= 26);
          else if (shiftedIndex < 0) (shiftedIndex += 26);
          return alphabet[shiftedIndex];          
        }
        else {
          let shiftedIndex = alphabet.indexOf(letter) - shift;
          if (shiftedIndex < 0) (shiftedIndex += 26);
          else if (shiftedIndex > 25) (shiftedIndex -= 26);
          return alphabet[shiftedIndex];          
        }
      }
    });
    return output.join("");
  };
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };