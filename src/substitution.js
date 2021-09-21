const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const standardAlphabet = realAlphabet.split('');
  
  function checkForDuplicates(array) {
  return new Set(array).size == array.length;
}
  
  function substitutionEncode(input, alphabet) {
    // creating the input and cipher alphabet arrays
    // mapping the input array to return the corresponding value of the cipher alphabet
    const cipherAlphabet = alphabet.toLowerCase().split('');
    const inputArray = input.toLowerCase().split('');
    const result = inputArray.map((letter) => {
      if (letter === ' ') return letter;
      const matched = standardAlphabet.find((item) => item === letter);
        const matchedIndex = standardAlphabet.indexOf(matched);
        return cipherAlphabet[matchedIndex];
      });
    //joining the cipher array to string
    return result.join('');
  };
 
    function substitutionDecode(input, alphabet) {
    const cipherAlphabet = alphabet.toLowerCase().split('');
    const inputArray = input.toLowerCase().split('');
    const indexCipher = inputArray.map((letter) => {
      if (letter === ' ') return letter;
      const matched = cipherAlphabet.find((item) => item === letter);
    return cipherAlphabet.indexOf(matched);
    });
    const decodedArray = indexCipher.map((index) => {
      if (index === ' ') return index;
      else return standardAlphabet[index];
    });
    return decodedArray.join('');
}
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    const test = checkForDuplicates(alphabet.split(''));
    if (!test || alphabet.length < 26) return false;
    if (encode) return substitutionEncode(input, alphabet);
    else return substitutionDecode(input, alphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };