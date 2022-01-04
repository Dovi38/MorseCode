class Translator {
  constructor(textInput, textOutput) {
    this.textInput = textInput,
    this.textOutput = textOutput,
    this.clear();
  }
   
   clear() {
      this.textInput.value = '';
      this.textOutput.innerHTML = '';
   }
   nonReset(event) {
       event.preventDefault();
     }
};
    

  class Morse extends Translator {
  constructor(textInput, textOutput, morseCode) {
    super(textInput, textOutput);
    this.morseCode = {
      A: '.-',
      B: '-...',
      C: '-.-.',
      D: '-..',
      E: '.',
      F: '..-.',
      G: '--.',
      H: '....',
      I: '..',
      J: '.---',
      K: '-.-',
      L: '.-..',
      M: '--',
      N: '-.',
      O: '---',
      P: '.--.',
      Q: '--.-',
      R: '.-.',
      S: '...',
      T: '-',
      U: '..-',
      V: '...-',
      W: '.--',
      X: '-..-',
      Y: '-.--',
      Z: '--..',
      '.': '.-.-.-',
      ',': '--..--',
      '?': '..--..',
      ' ': '/',
    }
  }
  
   convert() {
      const strToConvert = this.textInput.value.toUpperCase().split('');
      console.log(strToConvert);
      let convertedStr = '';
      for(let i = 0; i < strToConvert.length; i++){
        for(let j in this.morseCode) {
          if(strToConvert[i] === j ) {
            //console.log(convertedStr += morseCode[j] + ' ');
            convertedStr += this.morseCode[j] + ' ';
          } 
          this.textOutput.innerHTML = convertedStr;
        }
      }
  };
  
   decode() {
      let morseDecode = this.textInput.value.split(' ');
      super.nonReset();
      super.clear();
      console.log(morseDecode);
      let str = '';
      for(let i=0; i< morseDecode.length; i++){
      for(let j in morseCode) {
        //console.log(morseDecode[i], morseCode[j])
        if(morseDecode[i] === morseCode[j]) {
          //console.log(str += j)
          str += j;
        }
        }
      }
        this.textOutput.innerHTML = str;
    }
}

  const convertBtn = document.querySelector('.btn-convert--translator');
  const clearBtn = document.querySelector('.btn-clear--translator');
  const decodeBtn = document.querySelector('.btn-decode--translator');
  const textInput = document.querySelector('#input-translator');
  const textOutput = document.querySelector('#output-translator');

  const translatorMorse = new Translator(textInput, textOutput);
  convertBtn.addEventListener('click', (convert) => {
    nonReset();
    
  })
  clearBtn.addEventListener('click', (clear) => {
    clear();
  })
  decodeBtn.addEventListener('click', (decode) => {
    nonReset();
    
  })