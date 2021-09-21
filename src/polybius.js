// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const square = [
    {key: '11', character: 'A'}, 
    {key: '21', character: 'B'}, 
    {key: '31', character: 'C'}, 
    {key: '41', character: 'D'}, 
    {key: '51', character: 'E'}, 
    {key: '12', character: 'F'}, 
    {key: '22', character: 'G'}, 
    {key: '32', character: 'H'}, 
    {key: '42', character: '(I/J)'}, 
    {key: '52', character: 'K'}, 
    {key: '13', character: 'L'}, 
    {key: '23', character: 'M'}, 
    {key: '33', character: 'N'}, 
    {key: '43', character: 'O'}, 
    {key: '53', character: 'P'}, 
    {key: '14', character: 'Q'}, 
    {key: '24', character: 'R'}, 
    {key: '34', character: 'S'}, 
    {key: '44', character: 'T'}, 
    {key: '54', character: 'U'}, 
    {key: '15', character: 'V'}, 
    {key: '25', character: 'W'}, 
    {key: '35', character: 'X'}, 
    {key: '45', character: 'Y'}, 
    {key: '55', character: 'Z'}, 
  ];
  function polybiusEncode(input) {
    const inputArray = input.toUpperCase().split('');
    const encodedArray = inputArray.map((letter) => {
      if (letter == ' ') return letter;
      return square.find((item) => item.character.includes(letter)).key);
    });
    return encodedArray.join('');
  }
  
  function polybiusDecode(input) {
    const updated = input.replace(/ /g, '00');
    if (updated.length % 2) return false;
    const inputArray = updated.match(/.{1,2}/g);
    const decodedArray = inputArray.map((letter) => {
      if (letter == '00') return (' ');
      return square.find((item) => item.key === letter).character);
    });
    return decodedArray.join('').toLowerCase();
  }
  
  function polybius(input, encode = true) {
    // your solution code here
    if (encode) return polybiusEncode(input);
    else return polybiusDecode(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
