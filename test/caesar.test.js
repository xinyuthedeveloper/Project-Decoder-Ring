// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caeser()", () => {
  it("should encode correctly", () => {
    const expected = 'wklqnixo';
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should decode correctly", () => {
    const expected = 'thinkful';
    const actual = caesar('wklqnixo', 3, false);
    expect(actual).to.equal(expected);
  });
  
  it("should ignore all capital letters", () => {
    const expected = "f xj x qefkhcri pqrabkq";
    const actual = caesar("I am a Thinkful student", 3, false);
    expect(actual).to.equal(expected);
  });
  
  it("should correctly handle shifts that go past the end of the alphabet", () => {
    const expected = "abc";
    const actual = caesar("xyz", 3);
    expect(actual).to.equal(expected);
  });
  
  it("should maintains spaces and other nonalphabetic symbols in the message", () => {
    const expected = ",./#%";
    const actual = caesar(",./#%", 8);
    expect(actual).to.equal(expected);
  });
  
  it("should return false for shift equals to 0", () => {
    const expected = false;
    const actual = caesar("testing", 0);
    expect(actual).to.equal(expected);
  });
});