// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");
describe("polybius()", () => {
  
  it("should translate both i and j to 42", () => {
    const actual = polybius("ij", encode = true);
    expect(actual).to.equal('4242')
  });  
  
  it("should return (i/j) when decoding", () => {
    const actual = polybius("4432423352125413", false);
    expect(actual).to.include('(i/j)')
  });  
  
  it("should ignore capitalizaion", () => {
    const actual = polybius("Thinkful", encode = true);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  
  it("should leave space as is when encoding", () => {
    const actual = polybius("hello world", encode = true);
    expect(actual).to.include(' ');
  });  
  
  it("should leave space as is when decoding", () => {
    const actual = polybius('3251131343 2543241341', encode = false);
    expect(actual).to.include(' ');
  });  
});