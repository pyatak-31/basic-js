const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (bool = true) {
    this.bool = bool;
}

  preparation(word, key) {
    word = word.toUpperCase().match(/[A-Z]/g);
    key = key.toUpperCase().match(/[A-Z]/g);
    let arr = [];
    
    for (let i = 0, j = 0; i < word.length; i++) {
      if (key.length > i) {
        arr.push(key[i]);
      } else if (key.length - 1 == j ) {
        arr.push(key[j]);
        j = 0;
      } else {
        arr.push(key[j]);
        j++;
      }
    }
    return arr;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ('Error');
    } else {
      let keyArr = this.preparation(message, key),
        j = 0,
        res = message.toUpperCase().replace(/./g, (el, i) => {
          if (el != el.match(/[A-Z]/)) {
            j++;
            return el;
          } else {
            let computedLetters = el.charCodeAt() - 65 + keyArr[i-j].charCodeAt() - 65;
                  
            return computedLetters > 25 ? String.fromCharCode(computedLetters - 26 + 65) : String.fromCharCode(computedLetters + 65);
          }
        });
          
      return this.bool ? res : res.split('').reverse().join('');
    }
  } 

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error ('Error');
    } else {
      let keyArr = this.preparation(encryptedMessage, key),
        j = 0,
        res = encryptedMessage.toUpperCase().replace(/./g, (el, i) => {
          if (el != el.match(/[A-Z]/)) {
            j++;
            return el;
          } else {
            let computedLetters = (el.charCodeAt() - 65) - (keyArr[i-j].charCodeAt() - 65);
            return computedLetters < 0 ? String.fromCharCode(26 - Math.abs(computedLetters) + 65) : String.fromCharCode(computedLetters + 65);
          }
        });
      
        return this.bool ? res : res.split('').reverse().join('');
      }
    }
  }

module.exports = VigenereCipheringMachine;
