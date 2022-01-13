import { morseCode } from "./morse.js";

export class Translator {
  constructor(morseCode, textInput, textOutput) {
    this.morseCode = morseCode;
    this.textInput = textInput;
    this.textOutput = textOutput;
  }
  clear() {
    this.textInput.value = "";
    this.textOutput.innerHTML = "";
  }
  nonReset(event) {
    event.preventDefault();
  }
  //take input and split into letters, loop through, compare to object morse.
  convert(textInputValue) {
    const strToConvert = this.textInput.value.toUpperCase().split("");
    //console.log(strToConvert);
    let convertedStr = "";
    for (let i = 0; i < strToConvert.length; i++) {
      for (let j in this.morseCode) {
        if (strToConvert[i] === j) {
          //console.log(convertedStr += morseCode[j] + ' ');
          convertedStr += this.morseCode[j] + " ";
        }
        this.textOutput.innerHTML = convertedStr;
      }
    }
  }

  decode(textInputValue) {
    console.log(textInputValue);
    //console.log(this.textInput)
    //let morseDecode = this.textInput.value.split(' ');
    let morseDecode = textInputValue.split(" ");
    //this.nonReset();
    this.clear();
    //console.log(morseDecode);
    let str = "";
    for (let i = 0; i < morseDecode.length; i++) {
      for (let j in morseCode) {
        //console.log(morseDecode[i], morseCode[j])
        if (morseDecode[i] === morseCode[j]) {
          //console.log(str += j)
          str += j;
        }
      }
    }
    this.textOutput.innerHTML = str;
  }
}
