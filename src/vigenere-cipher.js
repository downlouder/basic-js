const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = this.generateKey(messageUpperCase, key);

    let result = "";

    for (let i = 0; i < messageUpperCase.length; i++) {
      const messageChar = messageUpperCase[i];
      const keyChar = keyUpperCase[i];
      if (this.alphabet.includes(messageChar)) {
        const encryptedCharIndex =
          (messageChar.charCodeAt(0) + keyChar.charCodeAt(0)) % 26;
        const encryptedChar = this.alphabet[encryptedCharIndex];
        result += encryptedChar;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
      const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
      const keyUpperCase = this.generateKey(encryptedMessageUpperCase, key);

      let result = "";

      for (let i = 0; i < encryptedMessageUpperCase.length; i++) {
        const encryptedChar = encryptedMessageUpperCase[i];
        const keyChar = keyUpperCase[i];
        if (this.alphabet.includes(encryptedChar)) {
          const decryptedCharIndex =
            (encryptedChar.charCodeAt(0) - keyChar.charCodeAt(0) + 26) % 26;
          const decryptedChar = this.alphabet[decryptedCharIndex];
          result += decryptedChar;
        } else {
          result += encryptedChar;
        }
      }

      return this.isDirect ? result : result.split("").reverse().join("");
  }

  generateKey(message, key) {
    let generatedKey = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.includes(messageChar)) {
        generatedKey += key[keyIndex % key.length].toUpperCase();
        keyIndex++;
      } else {
        generatedKey += messageChar;
      }
    }

    return generatedKey;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
