// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");
describe("substitution()", () => {
  
  it("return false if the length of substitution alphabet is less than 26", () => {
    const actual = substitution('thinkful', "short");
    expect(actual).to.be.false;
  });  
  
  it("return false if the substitution alphabet is not unique", () => {
    const actual = substitution('This is just testing', "ababababababbabsdfsdf");
    expect(actual).to.be.false;
  }); 
  
  it("should be able to decode with special characters inputted", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.be.equal(expected);
  });  
  
  it("should be able to encode with special characters inside the substitution alphabet", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.be.equal(expected);
  });  
   
  it("should ignore all capialization", () => {
    const expected = 'jrufscpw'
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.be.equal(expected);
  });
  
  it("should still include spaces", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.include(' ')
  });
  
});