
import {Translator} from "../main.js";


  describe('object is an instance of a class.', () => {
    class Translator {};
    test('is new object is instance of class', () => {
      expect(new Translator()).toBeInstanceOf(Translator);
    })
    test('convert input to output', () => {
      const translator = new Translator({H: '....',  I: '..'}, 'hi', '..... ..');
      expect(translator.convert('hi')).toBe('--. ...');
    })
  })
    
   
    
//   class A {}

// expect(new A()).toBeInstanceOf(A);
// expect(() => {}).toBeInstanceOf(Function);
// expect(new A()).toBeInstanceOf(Function); // throws