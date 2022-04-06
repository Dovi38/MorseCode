import { Translator } from "../main.js";
import { morseCode } from "../morse.js";

describe("object is an instance of a class.", () => {
  // class Translator {};
  // test('is new object is instance of class', () => {
  //   expect(new Translator()).toBeInstanceOf(Translator);
  // })
  test("decode input to output", () => {
    const translator = new Translator(morseCode, "....", "h");
    const input = "....";
    expect(translator.decode(input)).toBe("H");
  });
});
