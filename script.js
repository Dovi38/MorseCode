import {Translator} from './main.js';
import {morseCode} from './morse.js';

const convertBtn = document.querySelector('.btn-convert--translator');
const clearBtn = document.querySelector('.btn-clear--translator');
const decodeBtn = document.querySelector('.btn-decode--translator');
const textInput = document.querySelector('#input-translator');
const textOutput = document.querySelector('#output-translator');

const translator = new Translator(morseCode, textInput, textOutput);

  convertBtn.addEventListener('click', () => {
    console.log('button clicked')
    translator.convert();
    
  })
  clearBtn.addEventListener('click', () =>{
    translator.clear();
  })
  decodeBtn.addEventListener('click', () => {
    translator.decode()
  })