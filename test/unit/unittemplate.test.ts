import { countUppercase } from "../../src/template";

describe("We need to determine the amount of uppercase letters in a string. So the word", () => {
  it("CODe contains 3 uppercase letter", () => {
    expect(countUppercase("CODe")).toEqual(3);
  });
  it("code contains 0 uppercase letter", () => {
    expect(countUppercase("code")).toEqual(0);
  });
  it("CODE contains 4 uppercase letter", () => {
    expect(countUppercase("CODE")).toEqual(4);
  });
});
describe("Now that we have the amount of uppercase letters, we can determine the amount of lowercase letters in a string. So the word", () => {
  it("CODe contains 1 lowercase letter", () => {
    expect(countLowercase("CODe")).toEqual(1);
  });
  // it("code contains 4 lowercase letter", () => {
  //   expect(countLowercase("code")).toEqual(4);
  // });
  // it("CODE contains 0 lowercase letter", () => {
  //   expect(countLowercase("CODE")).toEqual(0);
  // });
});