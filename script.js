import {Translator} from './main.js';
import {morseCode} from './morse.js';

const convertBtn = document.querySelector('.translator__btn-convert');
const clearBtn = document.querySelector('.translator__btn-clear');
const decodeBtn = document.querySelector('.translator__btn-decode');
const textInput = document.querySelector('.translator__input');
const textOutput = document.querySelector('.translator__output');

const translator = new Translator(morseCode, textInput, textOutput);

  convertBtn.addEventListener('click', () => {
    translator.convert(); 
  })
  clearBtn.addEventListener('click', () => {
    translator.clear();
  })
  decodeBtn.addEventListener('click', () => {
    translator.decode()
  })