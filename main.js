//object morseCode letters assigned to code
  const morseCode = {
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
  
  //assigning variables to html classes
  const convertBtn = document.querySelector('.btn-convert--translator');
  const clearBtn = document.querySelector('.btn-clear--translator');
  const decodeBtn = document.querySelector('.btn-decode--translator');
  const textInput = document.querySelector('#input-translator');
  const textOutput = document.querySelector('#output-translator');

 //after convert button clicked: html input will stay and will convert to uppercase each letter, array with substrings.Loop through array and object to match letter with object key and print key value as output.
convertBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const strToConvert = textInput.value.toUpperCase().split('');
  let convertedStr = '';
  console.log(strToConvert);
  for(let i = 0; i < strToConvert.length; i++){
    for(let j in morseCode) {
      if(strToConvert[i] === j ) {
        //console.log(convertedStr += morseCode[j] + ' ');
        convertedStr += morseCode[j] + ' ';
      } 
    }
  }
  return textOutput.innerHTML = convertedStr;
})

//clear button resets input and output for new entries
clearBtn.addEventListener('click', () => {
textInput.value = '';
textOutput.innerHTML = '';
})

//morse code converts to english words. Each letter need to separate with space and words with / + space. Input not reset, each morse letter converts to string array.Loop through input array and object.If array string match with object key value, print object key as output.
decodeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let morseDecode = textInput.value.split(' ');
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
  textOutput.innerHTML = str;
})

  

