const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let result = '';

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      
      let messageIndex = this.alphabet.indexOf(message[i]);
      let keyIndex = this.alphabet.indexOf(key[index % key.length]);
      let encryptedIndex = (messageIndex + keyIndex) % this.alphabet.length;
      result += this.alphabet[encryptedIndex];
      index++;
    }
    
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let result = '';

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }
      
      let messageIndex = this.alphabet.indexOf(message[i]);
      let keyIndex = this.alphabet.indexOf(key[index % key.length]);
      let decryptedIndex = (messageIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
      result += this.alphabet[decryptedIndex];
      index++;
    }
    
    return this.direct ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
