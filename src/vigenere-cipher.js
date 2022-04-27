class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct; 
  }
  validation(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = this.keyhandling(message, key);
    return [message, key];
  }

  keyhandling(message, key){
    if (key.length >= message.length){
      return key.slice(0, key.length).toUpperCase();
    } else if (key.length < message.length){
      return (
        key
        .repeat(Math.ceil(message.length / key.length))
        .slice(0, message.length)
        .toUpperCase()
      );
    }
  }
  
  encrypt(message, key){
    [message, key] = this.validation(message, key);
    let encryptText = '';
    let pattern = new RegExp(/[^a-zA-Z]/);
    let counter = 0;

    for (let i = 0; i < message.length; i++) {
      if (pattern.test(message[i])) {
        encryptText += message[i];
        counter++;
      } else {
        let newCharCode = (message.codePointAt(i) + key.codePointAt(i - counter) - 65);
        if (newCharCode > 90) newCharCode = newCharCode - 26;
        encryptText += String.fromCharCode(newCharCode);
      }
    }

    return (this.direct) ? encryptText : encryptText.split("").reverse().join("");
  }

  decrypt(message, key) {
    [message, key] = this.validation(message, key);
    let decryptText = '';
    let pattern = new RegExp(/[^a-zA-Z]/);
    let counter = 0;
    for (let i = 0; i < message.length; i++) {
      if (pattern.test(message[i])) {
        decryptText += message[i];
        counter++;
      } else {
        let newCharCode = (message.codePointAt(i) - key.codePointAt(i - counter) + 65);
        if (newCharCode < 65) newCharCode = newCharCode + 26;
        decryptText += String.fromCharCode(newCharCode);
      }
    }
    return (this.direct) ? decryptText : decryptText.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
